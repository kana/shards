outer := 123

Foo := Object clone

# Blocks are lexically scoped.
Foo blockk := block(outer, block(a, a + outer)) call(777)
Foo blockk call(321) println

# Methods are not so.
Foo methodd := method(outer, method(a, a + outer)) call(888)
Foo methodd(321) println


# The self of a block is the locals object where the block was created.
Foo blockk := block(block(self)) call
(Foo blockk call == Lobby) println  # TODO: This returns false.  Why?
Foo blockk call println
Lobby println

# The self of a method is the target of the message.
Foo methodd := method(method(self)) call
(Foo methodd == Foo) println
Foo methodd println
Foo println
