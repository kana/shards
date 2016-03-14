use std::io::prelude::*;

struct Operator<'a> {
    token: &'static str,
    arity: usize,
    calculate: &'a Fn(&Vec<i64>) -> Vec<i64>,
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
            calculate: &add,
        }
    ];

    for line in stdin.lock().lines() {
        for token in line.unwrap().split(' ') {
            if let Ok(n) = token.parse::<i64>() {
                stack.push(n);
            } else if let Some(op) = operators.iter().find(|&op| op.token == token) {
                if op.arity <= stack.len() {
                    let r = stack.pop().unwrap();
                    let l = stack.pop().unwrap();
                    for v in (op.calculate)(&vec![l, r]) {
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
