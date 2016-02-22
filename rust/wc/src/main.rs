use std::io::prelude::*;

fn main() {
    let mut byte_count = 0;
    let mut newline_count = 0;
    for byte in std::io::stdin().bytes() {
        byte_count = byte_count + 1;
        if byte.unwrap() == b'\n' {
            newline_count = newline_count + 1;
        };
    }
    println!("{} {} {}", newline_count, "???", byte_count);
}
