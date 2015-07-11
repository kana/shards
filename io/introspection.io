Foo := Object clone
Bar := Foo clone
Bar baz := method(a, a * a)
Bar qux := method(b, baz(b) + b)

"slotNames:" println
Bar slotNames println
"" println

"protos:" println
Bar protos println
"" println

"getSlot:" println
Bar getSlot("baz") println
"" println

"code:" println
Bar getSlot("qux") code println
"" println
