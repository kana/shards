use std::env;

fn main() {
    let mut first = true;
    for arg in env::args() {
        if first {
            first = false;
        } else {
          print!(" ");
        }
        print!("{}", arg);
    }
    println!("");
}
