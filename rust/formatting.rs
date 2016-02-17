use std::fmt;

#[derive(Debug)]
struct Point {
    x: i32,
    y: i32,
}

impl fmt::Display for Point {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "({}, {})", self.x, self.y)
    }
}

fn main() {
    let p = Point { x: 123, y: 456 };
    println!("With Display {{}} ==> {}", p);
    println!("With Debug {{:?}} ==> {:?}", p);
}
