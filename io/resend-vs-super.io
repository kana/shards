Foo := Object clone
Foo aaa := method("Foo aaa" println)
Foo bbb := method("Foo bbb" println)
Foo ccc := method("Foo ccc" println)

Bar := Foo clone
Bar aaa := method("Bar aaa" println; resend)
Bar bbb := method("Bar bbb" println; super(bbb))
Bar ccc := method("Bar ccc" println; super(aaa))

Bar aaa
Bar bbb
Bar ccc
