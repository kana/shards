package main

import "fmt"

func main() {
        //  a:  [0 1 2 3 4 5]
        //  b:  [2 3]
        a := []int {0, 1, 2, 3, 4, 5}
        b := a[2:4]
        fmt.Println(" a: ", a)
        fmt.Println(" b: ", b)

        // ta:  [0 1 2 3 4 5 999]
        //  a:  [0 1 2 3 4 5]
        //  b:  [2 3]
        //
        //  So ta is copied from a.
        ta := append(a, 999)
        fmt.Println("ta: ", ta)
        fmt.Println(" a: ", a)
        fmt.Println(" b: ", b)

        // ta:  [0 1 2 3 4 5 999]
        // tb:  [2 3 888]
        //  a:  [0 1 2 3 888 5]
        //  b:  [2 3]
        //
        //  This time b is not affected, but a is modified.
        tb := append(b, 888)
        fmt.Println("ta: ", ta)
        fmt.Println("tb: ", tb)
        fmt.Println(" a: ", a)
        fmt.Println(" b: ", b)
}
