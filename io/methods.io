"----------------------------------------" println

add := method(a, b, a + b)
add(4, 3) println

scream := method("!(*R&$!*&$!)!" println)
scream

"----------------------------------------" println

# "foo add := add" assigns the result of "add".
foo := Object clone
foo add := getSlot("add")
foo scream := getSlot("scream")

foo add(7, 8) println
foo scream

"----------------------------------------" println

Lobby println
selfie := method(self println)
selfie

foo println
foo selfie

"----------------------------------------" println

callie := method(call println)
callie

foo callie
