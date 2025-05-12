def find_longest_chain_destination(itinerary)
  return "" if itinerary.nil? || itinerary.empty?

  return "обратитесь к специалисту" if itinerary.length == 1 && itinerary[0][0] == itinerary[0][1]
  
  routes = {}
  itinerary.each do |start, end_point|
    routes[start] = end_point
  end

  
  end_cities = itinerary.map { |_, end_point| end_point }
  start_city = itinerary.find { |start, _| !end_cities.include?(start) }&.first

  return "" if start_city.nil?

 
  current_city = start_city
  final_destination = nil
  while routes.key?(current_city)
    final_destination = routes[current_city]
    current_city = routes[current_city]
  end

  final_destination || ""
end

def test_cases
  test_data = [
    { input: [["Новосибирск", "Дубай"], ["Новосибирск", "Искитим"], ["Искитим", "Линево"]], expected: "Линево" },
    { input: [["Лондон", "Стамбул"], ["Новосибирск", "Лондон"], ["Стамбул", "Пекин"]], expected: "Пекин" },
    { input: [["Барнаул", "Новосибирск"]], expected: "Новосибирск" },
    { input: [["Искитим", "Искитим"]], expected: "обратитесь к специалисту" },
    { input: [["Москва", "Тула"], ["Омск", "Тюмень"]], expected: "" },
    { input: [["Томск", "Омск"], ["Новосибирск", "Томск"]], expected: "Омск" },
    { input: [], expected: "" }
  ]

  test_data.each_with_index do |test, index|
    result = find_longest_chain_destination(test[:input])
    puts "Test Case #{index + 1}:"
    puts "  Input: #{test[:input]}"
    puts "  Expected: #{test[:expected]}"
    puts "  Result: #{result}"
    puts "  #{result == test[:expected] ? "Passed" : "Failed"}\n"
  end
end

test_cases
