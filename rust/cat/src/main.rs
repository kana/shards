use std::env;
use std::fs::File;
use std::iter;
use std::io;
use std::io::prelude::*;
use std::io::BufReader;

fn main() {
    for file_path in env::args().skip(1) {
        let f = BufReader::new(File::open(file_path).unwrap());
        for line in f.lines() {
            println!("{}", line.unwrap());
        }
    }
}
