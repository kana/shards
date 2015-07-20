xs := List clone
xs println
#==> list()

ys := list()
ys append(1)
ys append("a")
ys append("b")
ys println
#==> list(1, "a", "b")

list("a", 111, "b") println
#==> list("a", 111, "b")




ys size println
#==> 3

ys at(0) println
#==> 1
ys at(1) println
#==> "a"
ys at(2) println
#==> "b"

ys at(-1) println
#==> "b"
ys at(-2) println
#==> "a"
ys at(-3) println
#==> 1

ys at(3) println
#==> nil
ys at(-4) println
#==> nil




ys atPut(1, "xxx")
ys println
#==> list(1, "xxx", "b")

ys remove("b")
ys println
#==> list(1, "xxx")

ys atInsert(1, "zzz")
ys println
#==> list(1, "zzz", "xxx")
