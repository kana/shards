fn add(x: i64, y: i64) -> i64 {
    x + y
}

fn calc(f: &Fn(i64, i64) -> i64, x: i64, y: i64) -> i64 {
    f(x, y)
}

fn main() {
    println!("{}", calc(&add, 11, 23));
    println!("{}", calc(&|x, y| { x * y }, 11, 23));
}
