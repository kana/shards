use std::io::prelude::*;

fn main() {
    let stdin = std::io::stdin();

    let mut lines : Vec<String> =
        stdin.lock().lines()
        .map(|line| line.unwrap())
        .collect();

    lines.sort();
    for line in lines {
        println!("{}", line);
    }
}
