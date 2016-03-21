#[derive(Debug)]
struct Foo {
    name: &'static str,
}

impl Drop for Foo {
    fn drop(&mut self) {
        println!("Dropping {:?}", self);
    }
}

fn main() {
    let x = Foo { name: "x" };
    {
        let y = Foo { name: "y" };
        {
            let z = Foo { name: "z" };
        }
    }
}
