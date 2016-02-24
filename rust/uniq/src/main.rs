use std::io::prelude::*;

fn main() {
    let mut last_line: String = "".to_string();
    let mut is_first_line = true;

    let stdin = std::io::stdin();
    for line in stdin.lock().lines() {
        let line = line.unwrap();

        if is_first_line || line != last_line {
            println!("{}", line);
        }

        last_line = line;
        is_first_line = false;
    }
}
