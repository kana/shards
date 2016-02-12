use std::fs::File;
use std::iter;
use std::io;
use std::io::prelude::*;
use std::io::BufReader;

fn main() {
    let f = File::open("Cargo.lock").unwrap();
    let f = BufReader::new(f);
    for line in f.lines() {
        print!("{}", line.unwrap());
    }
}
