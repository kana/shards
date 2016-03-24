use std::env;
use std::fs::File;
use std::io::prelude::*;

fn main() {
    let mut ops = Vec::new();
    let mut ops_index : usize = 0;
    let mut loop_indices = Vec::new();
    let mut data = vec![0u32];
    let mut data_index = 0;
    let mut input_bytes = std::io::stdin().bytes();

    for file_path in env::args().skip(1) {
        for b in File::open(file_path).unwrap().bytes() {
            let c = std::char::from_u32(u32::from(b.unwrap())).unwrap();
            match c {
                '<' | '>' | '+' | '-' | ',' | '.' | '[' | ']' => ops.push(c),
                _ => {},
            }
        }
    }

    while ops_index < ops.len() {
        let c = ops[ops_index];
        match c {
            '<' => {
                if data_index == 0 {
                    panic!("No more data to <");
                }
                data_index = data_index - 1;
            },
            '>' => {
                if data_index == data.len() - 1 {
                    data.push(0);
                }
                data_index = data_index + 1;
            },
            '+' => {
                data[data_index] = data[data_index] + 1;
            },
            '-' => {
                data[data_index] = data[data_index] - 1;
            },
            ',' => {
                let b = input_bytes.next().unwrap().unwrap();
                let c = u32::from(b);
                data[data_index] = c;
            },
            '.' => {
                print!("{}", std::char::from_u32(data[data_index]).unwrap());
            },
            '[' => {
                if data[data_index] == 0 {
                    let mut nest = 0;
                    let i = ops_index;
                    for i in ops_index..ops.len() {
                        match ops[i] {
                            '[' => {
                                nest = nest + 1;
                            },
                            ']' => {
                                nest = nest - 1;
                                if nest == 0 {
                                    break;
                                }
                            }
                            _ => {},
                        }
                    }
                    ops_index = i;
                } else {
                    loop_indices.push(ops_index);
                }
            },
            ']' => {
                if data[data_index] != 0 {
                    ops_index = loop_indices.pop().unwrap();
                    continue;
                }
            },
            _ => {
                panic!("Unknown instruction: {}", c);
            },
        }

        ops_index += 1;
    }
}
