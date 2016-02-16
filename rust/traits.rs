trait Shape {
    fn area(&self) -> f64;
}

struct Rectangle {
    x: f64,
    y: f64,
    width: f64,
    height: f64,
}

impl Shape for Rectangle {
    fn area(&self) -> f64 {
        self.width * self.height
    }
}

struct Circle {
    x: f64,
    y: f64,
    radius: f64,
}

impl Shape for Circle {
    fn area(&self) -> f64 {
        std::f64::consts::PI * self.radius * self.radius
    }
}

// NG
// =====================================================================
// traits.rs:36:15: 36:16 error: the trait `core::marker::Sized` is not implemented for the type `Shape + 'static` [E0277]
// traits.rs:36 fn print_area(s: Shape) {
//                            ^
// traits.rs:36:15: 36:16 help: run `rustc --explain E0277` to see a detailed explanation
// traits.rs:36:15: 36:16 note: `Shape + 'static` does not have a constant size known at compile-time
// traits.rs:36:15: 36:16 note: all local variables must have a statically known size
// traits.rs:53:16: 53:17 error: mismatched types:
//  expected `Shape + 'static`,
//     found `Rectangle`
// (expected trait Shape,
//     found struct `Rectangle`) [E0308]
// traits.rs:53     print_area(r);
//                             ^
// traits.rs:53:16: 53:17 help: run `rustc --explain E0308` to see a detailed explanation
// traits.rs:54:16: 54:17 error: mismatched types:
//  expected `Shape + 'static`,
//     found `Circle`
// (expected trait Shape,
//     found struct `Circle`) [E0308]
// traits.rs:54     print_area(c);
//                             ^
// traits.rs:54:16: 54:17 help: run `rustc --explain E0308` to see a detailed explanation
// error: aborting due to 3 previous errors
// fn print_area(s: Shape) {
//     println!("This shape has an ares of {}", s.area());
// }

// OK: Static dispatch
fn print_area_static<T: Shape>(s: T) {
    println!("This shape has an ares of {}", s.area());
}

// OK: Dynamic dispatch
fn print_area_dynamic(s: &Shape) {
    println!("This shape has an ares of {}", s.area());
}

fn main() {
    let r = Rectangle {
        x: 1.234,
        y: 5.678,
        width: 2.5,
        height: 4.0,
    };
    let c = Circle {
        x: 1.234,
        y: 5.678,
        radius: 1.0,
    };

    // Note that reversing the order of the following calls causes:
    // > error: use of moved value: `r` [E0382]
    print_area_dynamic(&r);
    print_area_dynamic(&c);
    print_area_static(r);
    print_area_static(c);
}
