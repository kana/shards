use std::io::prelude::*;

fn main() {
    let mut byte_count = 0;
    let mut word_count = 0;
    let mut newline_count = 0;
    let mut is_last_char_space = true;
    for byte in std::io::stdin().bytes() {
        byte_count = byte_count + 1;
        let c = byte.unwrap() as char;
        let is_space_char = c.is_whitespace();

        if is_last_char_space && !is_space_char {
            word_count = word_count + 1;
        };
        is_last_char_space = is_space_char;

        if c == '\n' {
            newline_count = newline_count + 1;
        };
    }
    println!("{} {} {}", newline_count, word_count, byte_count);
}
