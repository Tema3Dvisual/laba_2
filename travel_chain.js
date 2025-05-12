function findLongestChainDestination(itinerary) {
  if (!itinerary || itinerary.length === 0) {
    return "";
  }

  if (itinerary.length === 1 && itinerary[0][0] === itinerary[0][1]) {
    return "обратитесь к специалисту";
  }

  // Построение карты маршрутов и множества всех городов
  const routes = {};
  const cities = new Set();
  for (const leg of itinerary) {
    routes[leg[0]] = leg[1];
    cities.add(leg[0]);
    cities.add(leg[1]);
  }

  // Поиск начального города
  let startCity = null;
  for (const city of cities) {
    let isStart = true;
    for (const leg of itinerary) {
      if (leg[1] === city) {
        isStart = false;
        break;
      }
    }
    if (isStart) {
      startCity = city;
      break;
    }
  }

  // Если начальный город не найден, возвращаем пустую строку
  if (!startCity) {
    return "";
  }

  // Проходим по маршруту от начального города до конечного
  let currentCity = startCity;
  let finalDestination = null;
  while (routes[currentCity]) {
    finalDestination = routes[currentCity];
    currentCity = routes[currentCity];
  }

  return finalDestination;
}

function testCases() {
  const testData = [
    {
      input: [["Новосибирск", "Дубай"], ["Новосибирск", "Искитим"], ["Искитим", "Линево"]],
      expected: "Линево",
    },
    {
      input: [["Лондон", "Стамбул"], ["Новосибирск", "Лондон"], ["Стамбул", "Пекин"]],
      expected: "Пекин",
    },
    {
      input: [["Барнаул", "Новосибирск"]],
      expected: "Новосибирск",
    },
    {
      input: [["Искитим", "Искитим"]],
      expected: "обратитесь к специалисту",
    },
    {
      input: [["Москва", "Тула"], ["Омск", "Тюмень"]],
      expected: "", // No continuous chain
    },
    {
      input: [["Томск", "Омск"], ["Новосибирск", "Томск"]],
      expected: "Омск",
    },
    {
       input: [],
       expected: ""
    }
  ];

  testData.forEach((test, index) => {
    const result = findLongestChainDestination(test.input);
    console.log(`Test Case ${index + 1}:`);
    console.log(`  Input: ${JSON.stringify(test.input)}`);
    console.log(`  Expected: ${test.expected}`);
    console.log(`  Result: ${result}`);
    console.log(`  ${result === test.expected ? "Passed" : "Failed"}\n`);
  });
}

testCases();
