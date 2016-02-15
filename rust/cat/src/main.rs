use std::env;
use std::fs::File;
use std::io::prelude::*;
use std::io::BufReader;

// TODO:
// src/main.rs:10:17: 14:18 error: if and else have incompatible types:
//  expected `std::io::stdio::StdinLock<'_>`,
//     found `std::io::buffered::BufReader<std::fs::File>`
// (expected struct `std::io::stdio::StdinLock`,
//     found struct `std::io::buffered::BufReader`) [E0308]
// src/main.rs:10         let f = if file_path == "-" {
// src/main.rs:11                     std::io::stdin().lock()
// src/main.rs:12                 } else {
// src/main.rs:13                     BufReader::new(File::open(file_path).unwrap())
// src/main.rs:14                 };
// src/main.rs:10:17: 14:18 help: run `rustc --explain E0308` to see a detailed explanation
// src/main.rs:15:21: 15:30 error: the type of this value must be known in this context
// src/main.rs:15         for line in f.lines() {
//                                    ^~~~~~~~~
// src/main.rs:16:28: 16:41 error: the type of this value must be known in this context
// src/main.rs:16             println!("{}", line.unwrap());
//                                           ^~~~~~~~~~~~~
// <std macros>:2:25: 2:56 note: in this expansion of format_args!
// <std macros>:3:1: 3:54 note: in this expansion of print! (defined in <std macros>)
// src/main.rs:16:13: 16:43 note: in this expansion of println! (defined in <std macros>)
// error: aborting due to 3 previous errors
// Could not compile `cat`.

fn main() {
    let paths = env::args().skip(1).collect::<Vec<_>>();
    let paths = if paths.is_empty() { vec!["-".to_string()] } else { paths };
    for file_path in paths {
        let f = if file_path == "-" {
                    std::io::stdin().lock()
                } else {
                    BufReader::new(File::open(file_path).unwrap())
                };
        for line in f.lines() {
            println!("{}", line.unwrap());
        }
    }
}
