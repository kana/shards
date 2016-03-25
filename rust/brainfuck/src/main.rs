use std::collections::HashMap;
use std::env;
use std::fs::File;
use std::io::prelude::*;

fn main() {
    let mut ops = Vec::new();
    let mut ops_index : usize = 0;
    let mut data = vec![0u32];
    let mut data_index = 0;
    let mut input_bytes = std::io::stdin().bytes();
    let mut loop_indices_map = HashMap::new();

    for file_path in env::args().skip(1) {
        for b in File::open(file_path).unwrap().bytes() {
            let c = std::char::from_u32(u32::from(b.unwrap())).unwrap();
            match c {
                '<' | '>' | '+' | '-' | ',' | '.' | '[' | ']' => ops.push(c),
                _ => {},
            }
        }
    }

    for i in 0..ops.len() {
        if ops[i] == '[' {
            let mut nest = 0;
            let mut k = i;
            for j in i..ops.len() {
                match ops[j] {
                    '[' => {
                        nest = nest + 1;
                    },
                    ']' => {
                        nest = nest - 1;
                        if nest == 0 {
                            k = j;
                            break;
                        }
                    }
                    _ => {},
                }
            }
            loop_indices_map.insert(i, k);
            loop_indices_map.insert(k, i);
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
                    ops_index = *loop_indices_map.get(&ops_index).unwrap();
                }
            },
            ']' => {
                if data[data_index] != 0 {
                    ops_index = *loop_indices_map.get(&ops_index).unwrap();
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
