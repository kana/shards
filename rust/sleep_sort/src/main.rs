use std::io::prelude::*;
use std::thread;
use std::time::Duration;

// Example:
//
// $ awk '/^[^\/][^\/]/ { print length($0); }' src/main.rs | cargo run
//      Running `target/debug/sleep_sort`
// 5
// 5
// 10
// 11
// 14
// 16
// 21
// 22
// 24
// 24
// 26
// 33
// 33
// 34
// 35
// 38
// 54
// 62
fn main() {
    let mut handles = Vec::new();
    let stdin = std::io::stdin();
    for line in stdin.lock().lines() {
        let n = line.unwrap().parse::<u64>().unwrap();

        handles.push(
            thread::spawn(move || {
                thread::sleep(Duration::from_millis(n * 100));
                println!("{}", n);
            })
        );
    }

    for h in handles {
        h.join().unwrap();
    }
}
