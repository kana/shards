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
}

fn main() {
    let mut cells = [0; WIDTH * HEIGHT];
    cells[pos(WIDTH / 2, HEIGHT / 2 - 1)] = 1;
    cells[pos(WIDTH / 2 + 1, HEIGHT / 2 - 1)] = 1;
    cells[pos(WIDTH / 2 - 1, HEIGHT / 2)] = 1;
    cells[pos(WIDTH / 2, HEIGHT / 2)] = 1;
    cells[pos(WIDTH / 2, HEIGHT / 2 + 1)] = 1;
    show_board(&cells);
}
