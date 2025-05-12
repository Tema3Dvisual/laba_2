package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func isAscendingDigits(num int) bool {
	numStr := strconv.Itoa(num)
	if len(numStr) <= 1 {
		return false // Числа из одной цифры не считаются
	}

	for i := 1; i < len(numStr); i++ {
		if numStr[i] <= numStr[i-1] {
			return false
		}
	}
	return true
}

func reverseNumber(num int) int {
	numStr := strconv.Itoa(num)
	reversedStr := ""
	for _, r := range numStr {
		reversedStr = string(r) + reversedStr
	}

	reversedNum, err := strconv.Atoi(reversedStr)
	if err != nil {
		fmt.Fprintln(os.Stderr, "Превышение диапазона int для числа", num)
		return 0 // Или другое значение по умолчанию
	}
	return reversedNum
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Введите последовательность чисел, разделенных пробелами: ")
	input, _ := reader.ReadString('\n')
	input = strings.TrimSpace(input)

	numbersStr := strings.Split(input, " ")
	numbers := make([]int, 0)

	for _, numStr := range numbersStr {
		num, err := strconv.Atoi(numStr)
		if err != nil {
			fmt.Fprintln(os.Stderr, "Некорректный ввод:", numStr, "не является числом.")
			continue // Пропускаем некорректный ввод
		}
		numbers = append(numbers, num)
	}

	result := make([]int, 0)

	for _, num := range numbers {
		if isAscendingDigits(num) {
			result = append(result, reverseNumber(num))
		}
	}

	fmt.Print("Результат: ")
	if len(result) == 0 {
		fmt.Println("В последовательности нет чисел, соответствующих условию.")
	} else {
		for i, num := range result {
			fmt.Print(num)
			// HERE is the change
			if i < len(result)-1 {
				fmt.Print(" ")
			}
		}
		fmt.Println()
	}
}
