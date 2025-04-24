<?php

function isCyclicRotation(string $s, string $t): bool {
  // Проверка на равенство длин
  if (strlen($s) !== strlen($t)) {
    return false;
  }

  // Конкатенация s + s
  $sConcat = $s . $s;

  // Проверка, является ли t подстрокой sConcat
  return strpos($sConcat, $t) !== false;
}

// Тестовые примеры
$s1 = "waterbottle";
$t1 = "erbottlewat";
$result1 = isCyclicRotation($s1, $t1);
echo "Строка T является циклическим сдвигом строки S: " . ($result1 ? "Yes" : "No") . "\n";

$s2 = "waterbottle";
$t2 = "lewatrbott";
$result2 = isCyclicRotation($s2, $t2);
echo "Строка T является циклическим сдвигом строки S: " . ($result2 ? "Yes" : "No") . "\n";

$s3 = "abc";
$t3 = "cba";
$result3 = isCyclicRotation($s3, $t3);
echo "Строка T является циклическим сдвигом строки S: " . ($result3 ? "Yes" : "No") . "\n";

?>
