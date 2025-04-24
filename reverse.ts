import * as readline from 'readline';

function isAscendingDigits(num: number): boolean {
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

function reverseNumber(num: number): number {
    const numStr = String(num);
    const reversedStr = numStr.split("").reverse().join("");
    try {
        return parseInt(reversedStr, 10);
    } catch (e: any) {
        console.error(`Превышение диапазона Int для числа ${num}`);
        return 0;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Введите последовательность чисел, разделенных пробелами:\n", (input: string) => {
    const numbersStr = input ? input.split(" ") : [];

    const numbers: number[] = numbersStr.map(Number).filter(num => !isNaN(num));

    const result = numbers.filter(isAscendingDigits).map(reverseNumber);

    let output = "Результат: ";
    if (result.length === 0) {
        output += "В последовательности нет чисел, соответствующих условию.";
    } else {
        output += result.join(" ");
    }

    console.log(output);
    rl.close();
});
