use std::env;
use std::fs::File;
use std::io::prelude::*;
use std::io::BufReader;

// src/main.rs:47:26: 47:72 error: borrowed value does not live long enough
// src/main.rs:47                     &mut BufReader::new(File::open(file_path).unwrap()) as &mut BufRead
//                                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// src/main.rs:48:19: 50:6 note: reference must be valid for the block suffix following statement 0 at 48:18...
// src/main.rs:48                 };
// src/main.rs:49         cat(f);
// src/main.rs:50     }
// src/main.rs:46:24: 48:18 note: ...but borrowed value is only valid for the expression at 46:23
// src/main.rs:46                 } else {
// src/main.rs:47                     &mut BufReader::new(File::open(file_path).unwrap()) as &mut BufRead
// src/main.rs:48                 };
// error: aborting due to previous error
// Could not compile `cat`.

fn cat(f: &mut BufRead) {
    let mut buffer = String::new();
    while f.read_line(&mut buffer).unwrap() > 0 {
        print!("{}", buffer);
        buffer.clear();
    }
}

fn main() {
    let paths = env::args().skip(1).collect::<Vec<_>>();
    let paths = if paths.is_empty() { vec!["-".to_string()] } else { paths };
    let stdin = std::io::stdin();
    let mut stdin = stdin.lock();
    for file_path in paths {
        let f = if file_path == "-" {
                    &mut stdin as &mut BufRead
                } else {
                    &mut BufReader::new(File::open(file_path).unwrap()) as &mut BufRead
                };
        cat(f);
    }
}
