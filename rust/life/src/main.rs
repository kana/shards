const WIDTH: usize = 72;
const HEIGHT: usize = 20;

fn pos(x: usize, y: usize) -> usize {
    x + y * WIDTH
}

fn show_board(cells: &[u8]) {
    for y in 0..HEIGHT {
        for x in 0..WIDTH {
            print!("{}", if cells[pos(x, y)] != 0 { 'o' } else { ' ' });
        }
        println!("");
    }

    println!("");
    println!("");
    println!("");
}

fn update(cells: &mut [u8]) {
    let mut next = [0; (WIDTH + 2) * (HEIGHT + 2)];
    for y in 0..HEIGHT {
        for x in 0..WIDTH {
            for dx in 0..3 {
                for dy in 0..3 {
                    if cells[pos(x, y)] != 0 {
                        let i = (x + dx) + (y + dy) * (WIDTH + 2);
                        next[i] = next[i] + 1;
                    }
                }
            }
        }
    }

    for y in 0..HEIGHT {
        for x in 0..WIDTH {
            let i = (x + 1) + (y + 1) * (WIDTH + 2);
            cells[pos(x, y)] =
                if next[i] == 3 || next[i] == 4 { 1 }
                else { 0 };
        }
    }
}

fn main() {
    let mut cells = [0; WIDTH * HEIGHT];
    cells[pos(WIDTH / 2, HEIGHT / 2 - 1)] = 1;
    cells[pos(WIDTH / 2 + 1, HEIGHT / 2 - 1)] = 1;
    cells[pos(WIDTH / 2 - 1, HEIGHT / 2)] = 1;
    cells[pos(WIDTH / 2, HEIGHT / 2)] = 1;
    cells[pos(WIDTH / 2, HEIGHT / 2 + 1)] = 1;
    loop {
        show_board(&cells);
        update(&mut cells);
        std::thread::sleep(std::time::Duration::from_millis(500));
    }
}
