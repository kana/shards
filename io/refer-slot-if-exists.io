foo := Object clone
bar := Object clone
baz := Object clone
qux := Object clone

foo mbar := bar
bar mbaz := baz
baz mqux := qux

writeln("foo ==> ", foo)
writeln("foo ?mbar ?mbaz ?mqux ==> ", foo ?mbar ?mbaz ?mqux)
writeln("foo ?mbar ?mXXX ?mqux ==> ", foo ?mbar ?mXXX ?mqux)
writeln("foo ?mXXX ==> ", foo ?mXXX)
writeln("foo ?mXXX ?mbaz ==> ", foo ?mXXX ?mbaz)
