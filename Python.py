def is_cyclic_rotation(s, t):
    """
    Определяет, является ли строка T циклическим сдвигом строки S.

    Args:
        s: Исходная строка.
        t: Строка, которую нужно проверить на циклический сдвиг.

    Returns:
        True, если T является циклическим сдвигом S, False в противном случае.
    """

    if len(s) != len(t):
        return False

    # Конкатенируем строку S саму с собой
    s_concat = s + s

    # Проверяем, является ли строка T подстрокой конкатенированной строки
    return t in s_concat


# Пример использования
s = "waterbottle"
t = "erbottlewat"
result = is_cyclic_rotation(s, t)
print(f"Строка T является циклическим сдвигом строки S: {result}")

s = "waterbottle"
t = "lewaterbott"
result = is_cyclic_rotation(s, t)
print(f"Строка T является циклическим сдвигом строки S: {result}")

s = "abc"
t = "cba"
result = is_cyclic_rotation(s, t)
print(f"Строка T является циклическим сдвигом строки S: {result}")
