def is_ascending_digits(num)
  num_str = num.to_s
  return false if num_str.length <= 1

  (1...num_str.length).each do |i|
    return false if num_str[i].to_i <= num_str[i - 1].to_i
  end
  true
end

def reverse_number(num)
  num_str = num.to_s.reverse
  begin
    num_str.to_i
  rescue RangeError
    $stderr.puts "Превышение диапазона int для числа #{num}"
    0
  end
end

print "Введите последовательность чисел, разделенных пробелами: "
input = gets.chomp

numbers = input.split.map(&:to_i)

result = []
numbers.each do |num|
  result << reverse_number(num) if is_ascending_digits(num)
end

print "Результат: "
if result.empty?
  puts "В последовательности нет чисел, соответствующих условию."
else
  puts result.join(' ')
end
