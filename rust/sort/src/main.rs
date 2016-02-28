use std::io::prelude::*;

fn sort(lines: &mut Vec<String>) {
    lines.sort();
}

fn main() {
    let stdin = std::io::stdin();

    let mut lines : Vec<String> =
        stdin.lock().lines()
        .map(|line| line.unwrap())
        .collect();

    sort(&mut lines);

    for line in lines {
        println!("{}", line);
    }
}
