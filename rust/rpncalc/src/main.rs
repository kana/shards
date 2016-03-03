use std::io::prelude::*;

fn main() {
    let stdin = std::io::stdin();

    for line in stdin.lock().lines() {
        for token in line.unwrap().split(' ') {
            println!("{}", token);
        }
    }
}
