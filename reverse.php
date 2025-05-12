<?php

function isAscendingDigits(int $num): bool {
  $numStr = (string) $num;
  if (strlen($numStr) <= 1) {
    return false; // Числа из одной цифры не считаются
  }

  for ($i = 1; $i < strlen($numStr); $i++) {
    if ($numStr[$i] <= $numStr[$i - 1]) {
      return false;
    }
  }
  return true;
}

function reverseNumber(int $num): int {
  $numStr = (string) $num;
  $reversedStr = strrev($numStr);

  if (is_numeric($reversedStr) && $reversedStr <= PHP_INT_MAX && $reversedStr >= -PHP_INT_MAX) {
    return (int) $reversedStr;
  } else {
    fwrite(STDERR, "Превышение диапазона int для числа " . $num . "\n"); // Output to stderr
    return 0; // Или другое значение по умолчанию
  }
}

echo "Введите последовательность чисел, разделенных пробелами: ";
$input = trim(fgets(STDIN));

$numbersStr = explode(" ", $input);
$numbers = [];

foreach ($numbersStr as $numStr) {
  if (is_numeric($numStr)) {
    $numbers[] = (int) $numStr;
  } else {
    fwrite(STDERR, "Некорректный ввод: " . $numStr . " не является числом.\n"); // Output to stderr
  }
}

$result = [];

foreach ($numbers as $num) {
  if (isAscendingDigits($num)) {
    $result[] = reverseNumber($num);
  }
}

echo "Результат: ";
if (empty($result)) {
  echo "В последовательности нет чисел, соответствующих условию.";
} else {
  echo implode(" ", $result);
}
echo "\n";

?>
