obj1 := Object clone
obj1 doHeavyTask := method(n,
  write("Start ", n, "...\n")
  wait(1)
  write("Finished ", n, ".\n")
  n
)
obj2 := obj1 clone

obj1 doHeavyTask("synchronous") println

obj1 asyncSend(doHeavyTask("async1-1")) println
obj2 asyncSend(doHeavyTask("async2-1")) println
obj1 asyncSend(doHeavyTask("async1-2")) println
obj2 asyncSend(doHeavyTask("async2-2")) println

a := obj1 futureSend(doHeavyTask(8))
b := obj2 futureSend(doHeavyTask(2))
(a / b) println
