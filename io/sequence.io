prettyPrint := method(asSimpleString println)

"==== size" println

"Splatoon" size prettyPrint
#==> 8

"スプラトゥーン" size prettyPrint
#==> 7




"==== containsSeq" println

"Splatoon" containsSeq("too") prettyPrint
#==> true

"Splatoon" containsSeq("oct") prettyPrint
#==> false




"==== at" println

"Splatoon" at(3) prettyPrint
#==> 97
#  = 0x61 = a

"スプラトゥーン" at(3) prettyPrint
#==> 12488
#  = 0x30c8 = ト




"==== exSlice" println

"Splatoon" exSlice(0, 5) prettyPrint
#==> "Splat"

"Splatoon" exSlice(-4) prettyPrint
#==> "toon"

"Splatoon" exSlice(-4, -2) prettyPrint
#==> "to"

"スプラトゥーン" exSlice(0, 3) prettyPrint
#==> "スプラ"

"スプラトゥーン" exSlice(-4) prettyPrint
#==> "トゥーン"

"スプラトゥーン" exSlice(-4, -2) prettyPrint




"==== strip, lstrip, rstrip" println

# "  Splatoon  " strip
#==> Error.  Literal strings are immutable.

"  Splatoon  " asMutable strip prettyPrint
#==> "Splatoon"

"  Splatoon  " asMutable lstrip prettyPrint
#==> "Splatoon  "

"  Splatoon  " asMutable rstrip prettyPrint
#==> "  Splatoon"




"==== asUppercase, asLowercase" println

"Splatoon" asUppercase prettyPrint
#==> "SPLATOON"

"Splatoon" asLowercase prettyPrint
#==> "splatoon"




"==== split" println

"Ink or Sink" split prettyPrint
#==> list("Ink", "or", "Sink")

"Ink or Sink" split("n") prettyPrint
#==> list("I", "k or Si", "k")

"Ink or Sink" split("or") prettyPrint
#==> list("Ink ", " Sink")




"==== asNumber" println

"52" asNumber prettyPrint
#==> 52

".52 Gal." asNumber prettyPrint
#==> 0.52

"L-3 Nozzlenose" asNumber prettyPrint
#==> 1.#QNAN




"==== interpolate" println

main := "Octobrush"
"This is #{main}." interpolate prettyPrint

main := "Octobrush"
"The length of '#{main}' is #{main size}." interpolate prettyPrint
