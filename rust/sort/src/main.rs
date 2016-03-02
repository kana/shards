use std::io::prelude::*;

fn sort(lines: &mut Vec<String>) {
    for i in 0..lines.len() {
        for j in i..lines.len() {
            if lines[i] > lines[j] {
                // Typical code to swap values in other languages like:
                //
                //     let tmp = lines[i];
                //     lines[i] = lines[j];
                //     lines[j] = tmp;
                //
                // is not valid in Rust because of its semantics:
                //
                //     error: cannot move out of indexed content [E0507]
                //            let tmp = lines[i];
                //                      ^~~~~~~~
                lines.swap(i, j);
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
