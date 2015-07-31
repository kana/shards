prettyPrint := method(s,
    writeln(s asSimpleString, ": ", s encoding, ", ", s itemType, ", ", s itemSize)
)

prettyPrint("Splatoon")
#==> "Splatoon": ascii, uint8, 1

prettyPrint("Splatoon" asUTF8)
#==> "Splatoon": utf8, uint8, 1

prettyPrint("Splatoon" asUCS2)
#==> "Splatoon": ucs2, uint16, 2

prettyPrint("Splatoon" asUCS4)
#==> "Splatoon": ucs4, uint32, 4

prettyPrint("スプラトゥーン")
#==> "スプラトゥーン": ucs4, uint32, 4

prettyPrint("スプラトゥーン" asUTF8)
#==> "スプラトゥーン": utf8, uint8, 1

prettyPrint("スプラトゥーン" asUCS2)
#==> "スプラトゥーン": ucs2, uint16, 2

prettyPrint("スプラトゥーン" asUCS4)
#==> "スプラトゥーン": ucs4, uint32, 4

prettyPrint("π = 3.14159...")
#==> "π = 3.14159...": ucs2, uint16, 2

prettyPrint("π = 3.14159..." asUTF8)
#==> "π = 3.14159...": utf8, uint8, 1

prettyPrint("π = 3.14159..." asUCS2)
#==> "π = 3.14159...": ucs2, uint16, 2

prettyPrint("π = 3.14159..." asUCS4)
#==> "π = 3.14159...": ucs4, uint32, 4
