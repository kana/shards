use std::io;
use std::io::Write;

fn main() {
    let mut line = String::new();
    while io::stdin().read_line(&mut line).unwrap() > 0 {
        let _ = io::stdout().write(line.as_bytes());
        line.clear();
    }
}
