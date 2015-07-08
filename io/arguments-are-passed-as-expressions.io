myif := method(
  call evalArgAt(0) ifTrue(
  call evalArgAt(1)) ifFalse(
  call evalArgAt(2))
)

myif(3 * 3 == 9, "yay" println, "boo" println)
myif(3 * 3 == "x", "yay" println, "boo" println)
