IO.puts false
IO.puts true
IO.puts true == false
IO.puts is_boolean(true)  #=> true
IO.puts is_boolean(false)  #=> true
IO.puts is_boolean(0)  #=> false
IO.puts is_boolean(0 == 0)  #=> true
