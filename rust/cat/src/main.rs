use std::fs::File;
use std::iter;
use std::io;
use std::io::prelude::*;
use std::io::BufReader;

fn main() {
    let f = io::stdin();
    for line in f.lock().lines() {
        println!("{}", line.unwrap());
    }
}
