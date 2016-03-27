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
    let cells = [0; WIDTH * HEIGHT];
    show_board(&cells);
}
