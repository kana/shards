use std::io::prelude::*;

fn sort(lines: &mut Vec<String>) {
    for i in 0..lines.len() {
        for j in i..lines.len() {
            if lines[i] > lines[j] {
                // !??!?!?!?!?!
                unsafe {
                    std::ptr::swap(&mut lines[i], &mut lines[j]);
                }
            }
        }
    }
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
