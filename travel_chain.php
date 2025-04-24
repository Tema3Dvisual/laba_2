<?php

function findLongestChainDestination(array $itinerary): string {
  if (empty($itinerary)) {
    return "";
  }

  if (count($itinerary) == 1 && $itinerary[0][0] == $itinerary[0][1]) {
    return "обратитесь к специалисту";
  }

  // Построение карты маршрутов
  $routes = [];
  foreach ($itinerary as $leg) {
    $routes[$leg[0]] = $leg[1];
  }

  // Поиск начального города (города, который не является конечным пунктом никакого другого маршрута)
  $endCities = array_map(function($leg) { return $leg[1]; }, $itinerary);
  $startCity = null;
  foreach ($itinerary as $leg) {
      if (!in_array($leg[0], $endCities)) {
          $startCity = $leg[0];
          break;
      }
  }

  if ($startCity === null) {
    return "";
  }

  // Проходим по маршруту
  $currentCity = $startCity;
  $finalDestination = null;
  while (isset($routes[$currentCity])) {
    $finalDestination = $routes[$currentCity];
    $currentCity = $routes[$currentCity];
  }

  return $finalDestination ?: "";
}

function testCases(): void {
  $testData = [
    [
      'input' => [["Новосибирск", "Дубай"], ["Новосибирск", "Искитим"], ["Искитим", "Линево"]],
      'expected' => "Линево"
    ],
    [
      'input' => [["Лондон", "Стамбул"], ["Новосибирск", "Лондон"], ["Стамбул", "Пекин"]],
      'expected' => "Пекин"
    ],
    [
      'input' => [["Барнаул", "Новосибирск"]],
      'expected' => "Новосибирск"
    ],
    [
      'input' => [["Искитим", "Искитим"]],
      'expected' => "обратитесь к специалисту"
    ],
    [
      'input' => [["Москва", "Тула"], ["Омск", "Тюмень"]],
      'expected' => "" // No continuous chain
    ],
    [
      'input' => [["Томск", "Омск"], ["Новосибирск", "Томск"]],
      'expected' => "Омск"
    ],
    [
      'input' => [],
      'expected' => ""
    ]
  ];

  foreach ($testData as $index => $test) {
    $result = findLongestChainDestination($test['input']);
    echo "Test Case " . ($index + 1) . ":\n";
    echo "  Input: " . json_encode($test['input']) . "\n";
    echo "  Expected: " . $test['expected'] . "\n";
    echo "  Result: " . $result . "\n";
    echo "  " . ($result == $test['expected'] ? "Passed" : "Failed") . "\n\n";
  }
}

testCases();

?>
