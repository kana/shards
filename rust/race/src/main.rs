extern crate rand;
use rand::Rng;
use std::io::prelude::*;
use std::cell::RefCell;
use std::thread;
use std::time::Duration;


//    Compiling race v0.1.0 (file:///Users/kana/working/shards/rust/race)
// src/main.rs:15:13: 15:26 error: the trait `core::marker::Sync` is not implemented for the type `core::cell::UnsafeCell<i32>` [E0277]
// src/main.rs:15             thread::spawn(move || {
//                            ^~~~~~~~~~~~~
// src/main.rs:15:13: 15:26 help: run `rustc --explain E0277` to see a detailed explanation
// src/main.rs:15:13: 15:26 note: `core::cell::UnsafeCell<i32>` cannot be shared between threads safely
// src/main.rs:15:13: 15:26 note: required because it appears within the type `core::cell::RefCell<i32>`
// src/main.rs:15:13: 15:26 note: required because it appears within the type `[closure@src/main.rs:15:27: 23:14 bank_a:&core::cell::RefCell<i32>, bank_b:&core::cell::RefCell<i32>, thread_id:i32]`
// src/main.rs:15:13: 15:26 note: required by `std::thread::spawn`
// src/main.rs:15:13: 15:26 error: the trait `core::marker::Sync` is not implemented for the type `core::cell::UnsafeCell<usize>` [E0277]
// src/main.rs:15             thread::spawn(move || {
//                            ^~~~~~~~~~~~~
// src/main.rs:15:13: 15:26 help: run `rustc --explain E0277` to see a detailed explanation
// src/main.rs:15:13: 15:26 note: `core::cell::UnsafeCell<usize>` cannot be shared between threads safely
// src/main.rs:15:13: 15:26 note: required because it appears within the type `core::cell::Cell<usize>`
// src/main.rs:15:13: 15:26 note: required because it appears within the type `core::cell::RefCell<i32>`
// src/main.rs:15:13: 15:26 note: required because it appears within the type `[closure@src/main.rs:15:27: 23:14 bank_a:&core::cell::RefCell<i32>, bank_b:&core::cell::RefCell<i32>, thread_id:i32]`
// src/main.rs:15:13: 15:26 note: required by `std::thread::spawn`
// error: aborting due to 2 previous errors
// Could not compile `race`.
// 

fn main() {
    let mut handles = Vec::new();
    let bank_a = &RefCell::new(1000);
    let bank_b = &RefCell::new(1800);

    for thread_id in 0..2 {
        handles.push(
            thread::spawn(move || {
                let r = rand::thread_rng().gen_range(1, 10);
                thread::sleep(Duration::from_millis(r * 100));
                let a = bank_a.into_inner();
                let b = bank_b.into_inner();
                *bank_a.borrow_mut() = b;
                *bank_b.borrow_mut() = a;
                println!("Thread {} sets a={} and b={}", thread_id, a, b);
            })
        );
    }

    for h in handles {
        h.join().unwrap();
    }
}
