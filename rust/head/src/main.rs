use std::io::prelude::*;

fn main() {
    // TODO: Support -n LINES
    let n = 10;
    let stdin = std::io::stdin();
    for line in stdin.lock().lines().take(n) {
        println!("{}", line.unwrap());
    }
}
