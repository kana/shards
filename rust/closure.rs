fn add(xs: &Vec<i64>) -> Vec<i64> {
    vec![xs[0] + xs[1]]
}

fn calc(f: &Fn(&Vec<i64>) -> Vec<i64>, xs: &Vec<i64>) -> Vec<i64> {
    f(xs)
}

fn main() {
    let xs = vec![11, 22, 33, 44];

    println!("{:?}", calc(&add, &xs));
    println!("{:?}", calc(&|xs| { vec![xs[0] * xs[2]] }, &xs));
}
