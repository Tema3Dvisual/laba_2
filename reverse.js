const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isAscendingDigits(num) {
  const numStr = String(num);
  if (numStr.length <= 1) {
    return false; // Числа из одной цифры не считаются
  }

  for (let i = 1; i < numStr.length; i++) {
    if (numStr[i] <= numStr[i - 1]) {
      return false;
    }
  }
  return true;
}

function reverseNumber(num) {
  const numStr = String(num);
  const reversedStr = numStr.split("").reverse().join(""); // JavaScript way to reverse
  try {
    return parseInt(reversedStr, 10); // Radix 10 is important for parsing integers
  } catch (e) {
    console.error(`Превышение диапазона int для числа ${num}`);
    return 0;
  }
}

readline.question("Введите последовательность чисел, разделенных пробелами:\n", input => {
  const numbersStr = input ? input.split(" ") : []; // Handle null input

  const numbers = numbersStr.map(Number).filter(num => !isNaN(num)); // Convert and filter non-numeric entries

  const result = numbers.filter(isAscendingDigits).map(reverseNumber);

  let output = "Результат: ";
  if (result.length === 0) {
    output += "В последовательности нет чисел, соответствующих условию.";
  } else {
    output += result.join(" ");
  }

  console.log(output);
  readline.close();
});
