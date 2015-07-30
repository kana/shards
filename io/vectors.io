Vector := Sequence clone setItemType("float32")

iters := 1000
size := 1024
ops := iters * size

v1 := Vector clone setSize(size) rangeFill
v2 := Vector clone setSize(size) rangeFill

dt := Date secondsToRun(iters repeat(v1 *= v2))

writeln((ops / (dt * 1000000000)) asString(1, 3), " GFLOPS")

v3 := Vector clone setSize(5)
v3 println
v3 rangeFill
v3 println
(v3 + v3) println
v3 println

v4 := Vector clone setSize(8) rangeFill
v4 println
(v3 + v4) println
