i := 0
loop(
    i = i + 1
    "loop" println
    if(i == 5) then(break)
)

j := 5
while(j > 0,
  "while" println
  j = j - 1
)

for(k, 0, 10, 3, k println)
for(k, 1, 5, k println)
for(k, 5, 1, -1, k println)

for(i, 1, 100,
  if(i % 3 != 0, continue)
  if(i % 5 != 0, continue)
  i println
)

zap := method(
  "aaa" println
  return "xyz"
  "bbb" println
)
zap println
