xs := list(1, 2, 3, 4, 5)

"*** select(i, v, expr)" println
xs select(i, v, i % 2 == 0) println

"*** select(v, expr)" println
xs select(v, v % 2 == 0) println

"*** select(expr)" println
xs select(< 3) println

"*** select creates a new list" println
xsd := xs select(true)
(xs == xsd) println
#==> true
(xs isIdenticalTo(xsd)) println
#==> false
