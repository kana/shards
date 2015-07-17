try("no exception") println
try(Exception raise("woooo")) println

MyException := Exception clone
YourException := Exception clone

e := try(MyException raise("fooooo"))
e catch(YourException,
  writeln("Caught YourException: ", e coroutine backTraceString)
) catch(MyException,
  writeln("Caught MyException: ", e coroutine backTraceString)
) pass

e := try(Exception raise(ignored))
e catch(YourException,
  writeln("Caught YourException: ", e coroutine backTraceString)
) catch(MyException,
  writeln("Caught MyException: ", e coroutine backTraceString)
)

e := try(Exception raise("re-raised"))
e catch(YourException,
  writeln("Caught YourException: ", e coroutine backTraceString)
) catch(MyException,
  writeln("Caught MyException: ", e coroutine backTraceString)
) pass
