use std::io::prelude::*;

// src/main.rs:7:25: 7:33 error: cannot move out of indexed content [E0507]
// src/main.rs:7                 let t = lines[i];
//                                       ^~~~~~~~
// src/main.rs:7:21: 7:22 note: attempting to move value to here
// src/main.rs:7                 let t = lines[i];
//                                   ^
// src/main.rs:7:21: 7:22 help: to prevent the move, use `ref t` or `ref mut t` to capture value by reference
// src/main.rs:8:28: 8:36 error: cannot move out of indexed content [E0507]
// src/main.rs:8                 lines[j] = lines[i];
//                                          ^~~~~~~~

fn sort(lines: &mut Vec<String>) {
    for i in 0..lines.len() {
        for j in i..lines.len() {
            if lines[i] > lines[j] {
                let t = lines[i];
                lines[i] = lines[j];
                lines[j] = t;
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
