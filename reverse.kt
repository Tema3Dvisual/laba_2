fun isAscendingDigits(num: Int): Boolean {
    val numStr = num.toString()
    if (numStr.length <= 1) {
        return false // Числа из одной цифры не считаются
    }

    for (i in 1 until numStr.length) {
        if (numStr[i] <= numStr[i - 1]) {
            return false
        }
    }
    return true
}

fun reverseNumber(num: Int): Int {
    val numStr = num.toString()
    val reversedStr = numStr.reversed()
    return try {
        reversedStr.toInt()
    } catch (e: NumberFormatException) {
        System.err.println("Превышение диапазона Int для числа $num")
        0
    }
}

fun main() {
    print("Введите последовательность чисел, разделенных пробелами: ")
    val input = readLine() ?: "" // Read input or default to empty string

    val numbers = input.split(" ")
        .mapNotNull { it.toIntOrNull() } // Convert to Int, filter out non-numbers

    val result = numbers.filter { isAscendingDigits(it) }
        .map { reverseNumber(it) }

    print("Результат: ")
    if (result.isEmpty()) {
        println("В последовательности нет чисел, соответствующих условию.")
    } else {
        println(result.joinToString(" ")) // Print with spaces
    }
}
