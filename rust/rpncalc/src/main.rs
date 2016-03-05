use std::io::prelude::*;

// src/main.rs:41:24: 41:27 error: mismatched types:
//  expected `for<'r> core::ops::Fn(&'r collections::vec::Vec<i64>) -> collections::vec::Vec<i64> + 'static`,
//     found `fn(&collections::vec::Vec<i64>) -> collections::vec::Vec<i64> {add}`
// (expected trait core::ops::Fn,
//     found fn item) [E0308]
// src/main.rs:41             calculate: add,
//                                       ^~~
// src/main.rs:41:24: 41:27 help: run `rustc --explain E0308` to see a detailed explanation
// src/main.rs:38:9: 42:10 error: the trait `core::marker::Sized` is not implemented for the type `for<'r> core::ops::Fn(&'r collections::vec::Vec<i64>) -> collections::vec::Vec<i64> + 'static` [E0277]
// src/main.rs:38         Operator {
// src/main.rs:39             token: "+",
// src/main.rs:40             arity: 2,
// src/main.rs:41             calculate: add,
// src/main.rs:42         }
// src/main.rs:38:9: 42:10 help: run `rustc --explain E0277` to see a detailed explanation
// src/main.rs:38:9: 42:10 note: `for<'r> core::ops::Fn(&'r collections::vec::Vec<i64>) -> collections::vec::Vec<i64> + 'static` does not have a constant size known at compile-time
// src/main.rs:38:9: 42:10 note: required because it appears within the type `Operator`
// src/main.rs:38:9: 42:10 note: structs must have a statically known size to be initialized
// error: aborting due to 2 previous errors
// Could not compile `rpncalc`.

struct Operator {
    token: &'static str,
    arity: u8,
    calculate: Fn(&Vec<i64>) -> Vec<i64>,
}

fn add(ns: &Vec<i64>) -> Vec<i64> {
    vec![ns[0] + ns[1]]
}

fn main() {
    let stdin = std::io::stdin();
    let mut stack: Vec<i64> = Vec::new();
    let operators = [
        Operator {
            token: "+",
            arity: 2,
            calculate: add,
        }
    ];

    for line in stdin.lock().lines() {
        for token in line.unwrap().split(' ') {
            match token {
                "+" => {
                    if 2 <= stack.len() {
                        let r = stack.pop().unwrap();
                        let l = stack.pop().unwrap();
                        stack.push(l + r);
                    } else {
                        println!("Stack does not have enough contents!");
                    }
                },
                "-" => {
                    if 2 <= stack.len() {
                        let r = stack.pop().unwrap();
                        let l = stack.pop().unwrap();
                        stack.push(l - r);
                    } else {
                        println!("Stack does not have enough contents!");
                    }
                },
                "*" => {
                    if 2 <= stack.len() {
                        let r = stack.pop().unwrap();
                        let l = stack.pop().unwrap();
                        stack.push(l * r);
                    } else {
                        println!("Stack does not have enough contents!");
                    }
                },
                "/" => {
                    if 2 <= stack.len() {
                        let r = stack.pop().unwrap();
                        let l = stack.pop().unwrap();
                        stack.push(l / r);
                    } else {
                        println!("Stack does not have enough contents!");
                    }
                },
                x => {
                    let n = x.parse::<i64>();
                    match n {
                        Ok(n) => {
                            stack.push(n);
                        },
                        Err(_) => {
                            println!("I don't know what {} means.", token);
                        },
                    }
                },
            }
        }

        print!("==>");
        for n in &stack {
            print!(" {}", n);
        }
        println!("");
    }
}
