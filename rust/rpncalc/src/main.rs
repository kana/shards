use std::io::prelude::*;

fn main() {
    let stdin = std::io::stdin();
    let mut stack: Vec<i64> = Vec::new();

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
