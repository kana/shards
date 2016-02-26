use std::io::prelude::*;

fn main() {
    let stdin = std::io::stdin();
    let mut lines = Vec::new();

    for line in stdin.lock().lines() {
        lines.push(line.unwrap());
    }

    lines.sort();
    for line in lines {
        println!("{}", line);
    }
}
