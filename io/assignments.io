x := Object clone
x a1 ::= 123
x a2 := 456
# x a3 = 789  # Error
x a2 = 789
x println

setSlot("y", Object clone)
y newSlot("b1", 111)
y setSlot("b2", 222)
# y updateSlot("b3", 333)  # Error
y updateSlot("b2", 333)
y println
