extern crate getopts;
use getopts::Options;
use std::env;
use std::io::prelude::*;

fn main() {
    let mut opts = Options::new();
    opts.optopt("n", "", "Number of first lines to output", "LINES");
    let args: Vec<String> = env::args().collect();
    let matches = opts.parse(&args[1..]).unwrap();

    let n = match matches.opt_str("n") {
        Some(s) => { s.parse::<usize>().unwrap() }
        None => { 10 }
    };

    let stdin = std::io::stdin();
    for line in stdin.lock().lines().take(n) {
        println!("{}", line.unwrap());
    }
}
