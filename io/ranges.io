Range  # autoload



"==== Range basics" println

1 to(5) map(x, x * x) println
#==> list(1, 4, 9, 16, 25)

1 toBy(10, 3) println
#==> Range_...

1 toBy(10, 3) asList println
#==> list(1, 4, 7, 10)

Range clone setRange(1, 10, 3) asList println
#==> list(1, 4, 7, 10)




"==== Range protocol" println

Foo := Range clone
Foo nextInSequence := method(skipVal,
  new := Foo clone
  new character := ((character at(0)) + if(skipVal, skipVal, 1)) asCharacter
  new
)
Foo to := method(e, Range clone setRange(self, e))
Foo compare := method(other, self character compare(other character))

a := Foo clone
a character := "a"
z := Foo clone
z character := "z"

a to(z) map(character) println
#==> list(a, b, c, ..., z)
