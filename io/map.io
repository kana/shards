xs := list(1, 2, 3, 4, 5)

"*** map(i, v, expr)" println
xs map(i, v, v + i) println

"*** map(v, expr)" println
xs map(v, v * v) println

"*** map(expr)" println
xs map(* 2) println

"*** map creates a new list" println
xsd := xs map(v, v)
(xs == xsd) println
#==> true
(xs isIdenticalTo(xsd)) println
#==> false
