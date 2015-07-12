foo := Object clone
bar := Object clone

foos := "xxx"
bars := foos clone

list(
  "1     == 1",
  "1     == 2",
  "1     != 2",
  "1     != 1",
  "1     <= 2",
  "1     <= 1",
  "1     <= 0",
  "2     >= 1",
  "1     >= 1",
  "0     >= 1",
  "1     <  2",
  "1     <  1",
  "1     <  0",
  "2     >  1",
  "1     >  1",
  "0     >  1",
  "foo   == foo",
  "foo   == bar",
  "foo   != bar",
  "foo   != foo",
  "\"foo\" == \"foo\"",
  "\"foo\" == \"bar\"",
  "\"foo\" != \"bar\"",
  "\"foo\" != \"foo\"",
  "foos  == foos",
  "foos  == bars",
  "foos  != bars",
  "foos  != foos"
) foreach(s,
  write(s, " ==> ", doString(s), "\n")
)
