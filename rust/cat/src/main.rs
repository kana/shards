use std::env;
use std::fs::File;
use std::io::prelude::*;
use std::io::BufReader;

fn main() {
    let paths = env::args().skip(1).collect::<Vec<_>>();
    let paths = if paths.is_empty() { vec!["-".to_string()] } else { paths };
    for file_path in paths {
        let f = BufReader::new(File::open(file_path).unwrap());
        for line in f.lines() {
            println!("{}", line.unwrap());
        }
    }
}
