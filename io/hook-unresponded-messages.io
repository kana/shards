foo := Object clone
foo forward := method(
  write("sender = ", call sender, "\n")
  write("message name = ", call message name, "\n")
  call message arguments foreach(i, v, write("arg", i, " = ", v, "\n"))
)

foo foo
foo noSuchMessage(a + a, b b b, c(d(e)))
