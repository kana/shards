use std::io::prelude::*;

struct Operator<'a> {
    token: &'static str,
    arity: usize,
    calculate: &'a Fn(&[i64]) -> Vec<i64>,
}

fn main() {
    let stdin = std::io::stdin();
    let mut stack: Vec<i64> = Vec::new();
    let operators = [
        Operator {
            token: "+",
            arity: 2,
            calculate: &|ns| { vec![ns[0] + ns[1]] },
        },
        Operator {
            token: "-",
            arity: 2,
            calculate: &|ns| { vec![ns[0] - ns[1]] },
        },
        Operator {
            token: "*",
            arity: 2,
            calculate: &|ns| { vec![ns[0] * ns[1]] },
        },
        Operator {
            token: "/",
            arity: 2,
            calculate: &|ns| { vec![ns[0] / ns[1]] },
        },
        Operator {
            token: "swap",
            arity: 2,
            calculate: &|ns| { vec![ns[1], ns[0]] },
        },
    ];

    for line in stdin.lock().lines() {
        for token in line.unwrap().split(' ') {
            if let Ok(n) = token.parse::<i64>() {
                stack.push(n);
            } else if let Some(op) = operators.iter().find(|&op| op.token == token) {
                let length = stack.len();
                if op.arity <= length {
                    let popped : Vec<_> = stack.drain((length - op.arity)..length).collect();
                    for v in (op.calculate)(&popped[..]) {
                        stack.push(v);
                    }
                } else {
                    println!("Stack does not have enough contents!");
                }
            } else {
                println!("I don't know what {} means.", token);
            }
        }

        print!("==>");
        for n in &stack {
            print!(" {}", n);
        }
        println!("");
    }
}
