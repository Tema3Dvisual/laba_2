import Foundation

func isAscendingDigits(num: Int) -> Bool {
    let numStr = String(num)
    if numStr.count <= 1 {
        return false 
    }

    for i in 1..<numStr.count {
        if numStr[numStr.index(numStr.startIndex, offsetBy: i)] <= numStr[numStr.index(numStr.startIndex, offsetBy: i - 1)] {
            return false
        }
    }
    return true
}

func reverseNumber(num: Int) -> Int {
    let numStr = String(num)
    let reversedStr = String(numStr.reversed())

    if let reversedNum = Int(reversedStr) {
        return reversedNum
    } else {
        fputs("Превышение диапазона Int для числа \(num)\n", stderr)
        return 0
    }
}

print("Введите последовательность чисел, разделенных пробелами: ", terminator: "")
guard let input = readLine() else {
    print("Ошибка при чтении ввода")
    exit(1)
}

let numbersStr = input.components(separatedBy: " ")
let numbers = numbersStr.compactMap { Int($0) }

var result: [Int] = []

for num in numbers {
    if isAscendingDigits(num: num) {
        result.append(reverseNumber(num: num))
    }
}

print("Результат: ", terminator: "")
if result.isEmpty {
    print("В последовательности нет чисел, соответствующих условию.")
} else {
    print(result.map { String($0) }.joined(separator: " "))
}
print()
