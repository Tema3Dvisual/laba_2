def is_cyclic_rotation(s, t)

  return false if s.length != t.length

  s_concat = s + s

  s_concat.include?(t)
end

s = "waterbottle"
t = "erbottlewat"
result = is_cyclic_rotation(s, t)
puts "Строка T является циклическим сдвигом строки S: #{result ? 'Yes' : 'No'}"

s = "waterbottle"
t = "lewaterbott"
result = is_cyclic_rotation(s, t)
puts "Строка T является циклическим сдвигом строки S: #{result ? 'Yes' : 'No'}"

s = "abc"
t = "cba"
result = is_cyclic_rotation(s, t)
puts "Строка T является циклическим сдвигом строки S: #{result ? 'Yes' : 'No'}"
