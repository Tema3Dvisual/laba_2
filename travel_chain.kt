fun findLongestChainDestination(itinerary: List<Pair<String, String>>): String {
    if (itinerary.isEmpty()) {
        return ""
    }

    if (itinerary.size == 1 && itinerary[0].first == itinerary[0].second) {
        return "обратитесь к специалисту"
    }

    // Построение карты маршрутов
    val routes = itinerary.associateBy({ it.first }, { it.second })

    // Поиск начального города
    val endCities = itinerary.map { it.second }
    val startCity = itinerary.firstOrNull { !endCities.contains(it.first) }?.first

    if (startCity == null) {
        return ""
    }

    // Проходим по маршруту
    var currentCity = startCity
    var finalDestination: String? = null
    while (routes.containsKey(currentCity)) {
        finalDestination = routes[currentCity]
        currentCity = routes[currentCity]!! // !! - оператор, который говорит, что значение не null, безопасно
    }

    return finalDestination ?: ""
}

fun testCases() {
    val testData = listOf(
        Pair(listOf(Pair("Новосибирск", "Дубай"), Pair("Новосибирск", "Искитим"), Pair("Искитим", "Линево")), "Линево"),
        Pair(listOf(Pair("Лондон", "Стамбул"), Pair("Новосибирск", "Лондон"), Pair("Стамбул", "Пекин")), "Пекин"),
        Pair(listOf(Pair("Барнаул", "Новосибирск")), "Новосибирск"),
        Pair(listOf(Pair("Искитим", "Искитим")), "обратитесь к специалисту"),
        Pair(listOf(Pair("Москва", "Тула"), Pair("Омск", "Тюмень")), ""),
        Pair(listOf(Pair("Томск", "Омск"), Pair("Новосибирск", "Томск")), "Омск"),
        Pair(listOf(), "")
    )

    testData.forEachIndexed { index, (input, expected) ->
        val result = findLongestChainDestination(input)
        println("Test Case ${index + 1}:")
        println("  Input: $input")
        println("  Expected: $expected")
        println("  Result: $result")
        println("  ${if (result == expected) "Passed" else "Failed"}\n")
    }
}

fun main() {
    testCases()
}
