def is_ascending_digits(num):
    num_str = str(num)
    if len(num_str) <= 1:
        return False  # Числа из одной цифры не считаются

    for i in range(1, len(num_str)):
        if num_str[i] <= num_str[i - 1]:
            return False
    return True


def reverse_number(num):
    num_str = str(num)
    reversed_str = num_str[::-1]  # Более Pythonic способ переворота строки
    try:
        return int(reversed_str)
    except ValueError:
        print(f"Превышение диапазона int для числа {num}", file=sys.stderr)
        return 0  # Или другое значение по умолчанию


import sys

input_str = input("Введите последовательность чисел, разделенных пробелами: ")
numbers_str = input_str.split()
numbers = []
for num_str in numbers_str:
    try:
        numbers.append(int(num_str))
    except ValueError:
        print(f"Некорректный ввод: {num_str} не является числом.", file=sys.stderr)

result = []
for num in numbers:
    if is_ascending_digits(num):
        result.append(reverse_number(num))

print("Результат: ", end="")
if not result:
    print("В последовательности нет чисел, соответствующих условию.")
else:
    print(*result)  # Более Pythonic способ вывода списка с пробелами
