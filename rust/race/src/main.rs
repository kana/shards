use std::io::prelude::*;
use std::thread;
use std::time::Duration;

fn main() {
    let mut handles = Vec::new();

    for thread_id in 0..10 {
        handles.push(
            thread::spawn(move || {
                thread::sleep(Duration::from_millis(100));
                println!("tid={}", thread_id);
            })
        );
    }

    for h in handles {
        h.join().unwrap();
    }
}
