use std::env;

fn main() {
    let mut first = true;
    for arg in env::args().skip(1) {
        if first {
            first = false;
        } else {
          print!(" ");
        }
        print!("{}", arg);
    }
    println!("");
}
