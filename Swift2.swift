import Foundation

func findLongestChainDestination(itinerary: [[String]]) -> String {
    guard !itinerary.isEmpty else {
        return ""
    }

    if itinerary.count == 1 && itinerary[0][0] == itinerary[0][1] {
        return "обратитесь к специалисту"
    }

    var routes: [String: String] = [:]
    for route in itinerary {
        routes[route[0]] = route[1]
    }
    
    let endCities = itinerary.map { $0[1] }
    let startCity = itinerary.first { !endCities.contains($0[0]) }?.first

    guard let startCity = startCity else {
        return ""
    }

    var currentCity = startCity
    var finalDestination: String? = nil
    while let nextCity = routes[currentCity] {
        finalDestination = nextCity
        currentCity = nextCity
    }

    return finalDestination ?? ""
}

func testCases() {
    let testData: [[String: Any]] = [
        ["input": [["Новосибирск", "Дубай"], ["Новосибирск", "Искитим"], ["Искитим", "Линево"]], "expected": "Линево"],
        ["input": [["Лондон", "Стамбул"], ["Новосибирск", "Лондон"], ["Стамбул", "Пекин"]], "expected": "Пекин"],
        ["input": [["Барнаул", "Новосибирск"]], "expected": "Новосибирск"],
        ["input": [["Искитим", "Искитим"]], "expected": "обратитесь к специалисту"],
        ["input": [["Москва", "Тула"], ["Омск", "Тюмень"]], "expected": ""], 
        ["input": [["Томск", "Омск"], ["Новосибирск", "Томск"]], "expected": "Омск"],
        ["input": [], "expected": ""]
    ]

    for (index, test) in testData.enumerated() {
        let input = test["input"] as! [[String]]
        let expected = test["expected"] as! String
        let result = findLongestChainDestination(itinerary: input)

        print("Test Case \(index + 1):")
        print("  Input: \(input)")
        print("  Expected: \(expected)")
        print("  Result: \(result)")
        print("  \(result == expected ? "Passed" : "Failed")\n")
    }
}

testCases()
