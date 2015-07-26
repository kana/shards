numberedCat := method(path,
  f := File with(path)
  f openForReading
  f readLines foreach(i, v, writeln(i + 1, ": ", v))
  f close
)

"==== Reading a file" println
numberedCat("files.io")

"==== Writing a file" println
in := File with("files.io")
in openForReading
out := File with("files.io.numbered")
out openForUpdating
in readLines foreach(i, v, out write((i + 1) asString, ": ", v, "\n"))
in close
out close
numberedCat("files.io.numbered")

out remove
