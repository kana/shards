Person := Object clone

alice := Person clone
alice name := "Alice"
alice age := 13

bob := Person clone
bob name := "Bob"
bob age := 28

charles := Person clone
charles name := "Charles"
charles age := 79

people := list(alice, bob, charles)
people select(age < 30) map(name) println
people select(age % 2 == 1) map(name) println
