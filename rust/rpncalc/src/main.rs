use std::io::prelude::*;

// src/main.rs:16:24: 16:52 error: mismatched types:
//  expected `for<'r> core::ops::Fn(&'r collections::vec::Vec<i64>) -> collections::vec::Vec<i64> + 'static`,
//     found `[closure@src/main.rs:16:24: 16:52]`
// (expected trait core::ops::Fn,
//     found closure) [E0308]
// src/main.rs:16             calculate: |ns| { vec![ns[0] + ns[1]] },
//                                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~
// src/main.rs:16:24: 16:52 help: run `rustc --explain E0308` to see a detailed explanation
// src/main.rs:13:9: 17:10 error: the trait `core::marker::Sized` is not implemented for the type `for<'r> core::ops::Fn(&'r collections::vec::Vec<i64>) -> collections::vec::Vec<i64> + 'static` [E0277]
// src/main.rs:13         Operator {
// src/main.rs:14             token: "+",
// src/main.rs:15             arity: 2,
// src/main.rs:16             calculate: |ns| { vec![ns[0] + ns[1]] },
// src/main.rs:17         }
// src/main.rs:13:9: 17:10 help: run `rustc --explain E0277` to see a detailed explanation
// src/main.rs:13:9: 17:10 note: `for<'r> core::ops::Fn(&'r collections::vec::Vec<i64>) -> collections::vec::Vec<i64> + 'static` does not have a constant size known at compile-time
// src/main.rs:13:9: 17:10 note: required because it appears within the type `Operator`
// src/main.rs:13:9: 17:10 note: structs must have a statically known size to be initialized
// error: aborting due to 2 previous errors
// Could not compile `rpncalc`.

struct Operator {
    token: &'static str,
    arity: u8,
    calculate: Fn(&Vec<i64>) -> Vec<i64>,
}

fn main() {
    let stdin = std::io::stdin();
    let mut stack: Vec<i64> = Vec::new();
    let operators = [
        Operator {
            token: "+",
            arity: 2,
            calculate: |ns| { vec![ns[0] + ns[1]] },
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
