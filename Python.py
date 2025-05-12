def find_longest_chain_destination(itinerary):
    """
    Находит итоговый конечный пункт самой длинной цепочки следования.

    Args:
        itinerary: Список пар (начальный пункт, конечный пункт).

    Returns:
        Итоговый конечный пункт или "обратитесь к специалисту", если цепочка не найдена.
    """

    if not itinerary:
        return ""

    if len(itinerary) == 1 and itinerary[0][0] == itinerary[0][1]:
        return "обратитесь к специалисту"

    # Построение карты маршрутов и множества всех городов
    routes = {}
    cities = set()
    for start, end in itinerary:
        routes[start] = end
        cities.add(start)
        cities.add(end)

    # Поиск начального города
    start_city = None
    for city in cities:
        is_start = True
        for start, end in itinerary:
            if end == city:
                is_start = False
                break
        if is_start:
            start_city = city
            break

    # Если начальный город не найден, возвращаем пустую строку
    if start_city is None:
        return ""

    # Проходим по маршруту от начального города до конечного
    current_city = start_city
    final_destination = None
    while current_city in routes:
        final_destination = routes[current_city]
        current_city = routes[current_city]

    return final_destination


if __name__ == "__main__":
    num_pairs = int(input("Введите количество пар пунктов пребывания: "))
    itinerary = []
    for i in range(num_pairs):
        line = input(f"Введите пару {i + 1} (Начальный пункт,Конечный пункт): ")
        try:
            start, end = line.split(',')
            start = start.strip()
            end = end.strip()
            itinerary.append((start, end))
        except ValueError:
            print("Некорректный ввод. Пожалуйста, введите пару в формате 'Начальный пункт,Конечный пункт'.")
            i -= 1  # Повторить ввод для этой пары


    result = find_longest_chain_destination(itinerary)

    if result == "обратитесь к специалисту":
        print(result)
    elif not result:
        print("Маршрут не найден.")
    elif len(itinerary) == 1 and itinerary[0][0] == itinerary[0][1]:
        print("обратитесь к специалисту")

    else:
        print(f"Итоговый конечный пункт: {result}")
