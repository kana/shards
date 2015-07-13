if(101 % 2 == 1, x := "yes", x := "no")
x println  #==> "yes"

"" println


y := if(1024 % 2 == 1, "yes", "no")
y println  #==> "no"

"" println


if(x == y) then(z := "foo") else(z := "bar")
z println  #==> "bar"

"" println


if(x == y) then("foo") else("bar") println  #==> nil

if(x == y) then(z := "baz") elseif(x < y) then(z := "qux") else(z := "xyz")
z println  #==> "xyz"

"" println


(123 % 3 == 0) ifTrue("hi" println) ifFalse("mmm" println)  #==> "hi"
(1024 % 3 == 0) ifTrue("hi" println) ifFalse("mmm" println)  #==> "mmm"
(123 % 3 == 0) ifTrue("hi") ifFalse("mmm") println  #==> true
(1024 % 3 == 0) ifTrue("hi") ifFalse("mmm") println  #==> false

"" println


(nil) ifNil("aaa" println) #==> "aaa"
(false) ifNil("bbb" println) ifNonNil("ccc" println) #==> "ccc"
(nil) ifNil("aaa") println #==> nil
(false) ifNil("bbb") ifNonNil("ccc") println #==> false
("xyzzy") ifNil("ddd") ifNonNil("eee") println #==> "xyzzy"
