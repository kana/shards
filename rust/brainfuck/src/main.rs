use std::env;
use std::fs::File;
use std::io::prelude::*;

fn main() {
    let mut ops = Vec::new();
    for file_path in env::args().skip(1) {
        for b in File::open(file_path).unwrap().bytes() {
            let c = std::char::from_u32(u32::from(b.unwrap())).unwrap();
            match c {
                '<' | '>' | '+' | '-' | ',' | '.' | '[' | ']' => ops.push(c),
                _ => {},
            }
        }
    }
}
