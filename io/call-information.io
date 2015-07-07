foo := Object clone
foo _call := method(call)

"# slot                  returns" println
"# ================      ======================================" println

"# call sender           locals object of caller" println
foo _call sender println
# == Lobby

"# call message          message used to call this method/block" println
foo _call message println
# == ``_call message println; ...; foo _call target println''

"# call activated        the activated method/block" println
foo _call activated println
# == foo getSlot("_call")

"# call slotContext      context in which slot was found" println
foo _call slotContext println
# == foo

"# call target           current object" println
foo _call target println
# == foo
