xs := list("a", "b", "c", "d", "e")

"*** foreach(i, v, expr)" println
xs foreach(i, v, writeln(i, ":", v))

"*** foreach(v, expr)" println
xs foreach(v, v println)

"*** foreach(expr)" println
xs foreach(println)
