package main

import (
	"encoding/json"
	"fmt"
)

func findLongestChainDestination(itinerary [][]string) string {
	if len(itinerary) == 0 {
		return ""
	}

	if len(itinerary) == 1 && itinerary[0][0] == itinerary[0][1] {
		return "обратитесь к специалисту"
	}

	// Построение карты маршрутов
	routes := make(map[string]string)
	for _, leg := range itinerary {
		routes[leg[0]] = leg[1]
	}

	// Поиск начального города
	endCities := make([]string, 0, len(itinerary))
	for _, leg := range itinerary {
		endCities = append(endCities, leg[1])
	}

	var startCity string
	for _, leg := range itinerary {
		isStart := true
		for _, endCity := range endCities {
			if leg[0] == endCity {
				isStart = false
				break
			}
		}
		if isStart {
			startCity = leg[0]
			break
		}
	}

	if startCity == "" {
		return ""
	}

	// Проходим по маршруту
	currentCity := startCity
	var finalDestination string
	for {
		nextCity, ok := routes[currentCity]
		if !ok {
			break
		}
		finalDestination = nextCity
		currentCity = nextCity
	}

	return finalDestination
}

func testCases() {
	testData := []struct {
		input    [][]string
		expected string
	}{
		{
			input:    [][]string{{"Новосибирск", "Дубай"}, {"Новосибирск", "Искитим"}, {"Искитим", "Линево"}},
			expected: "Линево",
		},
		{
			input:    [][]string{{"Лондон", "Стамбул"}, {"Новосибирск", "Лондон"}, {"Стамбул", "Пекин"}},
			expected: "Пекин",
		},
		{
			input:    [][]string{{"Барнаул", "Новосибирск"}},
			expected: "Новосибирск",
		},
		{
			input:    [][]string{{"Искитим", "Искитим"}},
			expected: "обратитесь к специалисту",
		},
		{
			input:    [][]string{{"Москва", "Тула"}, {"Омск", "Тюмень"}},
			expected: "",
		},
		{
			input:    [][]string{{"Томск", "Омск"}, {"Новосибирск", "Томск"}},
			expected: "Омск",
		},
		{
			input:    [][]string{},
			expected: "",
		},
	}

	for i, test := range testData {
		result := findLongestChainDestination(test.input)
		fmt.Printf("Test Case %d:\n", i+1)
		inputJSON, _ := json.Marshal(test.input)
		fmt.Printf("  Input: %s\n", string(inputJSON))
		fmt.Printf("  Expected: %s\n", test.expected)
		fmt.Printf("  Result: %s\n", result)
		status := "Failed"
		if result == test.expected {
			status = "Passed"
		}
		fmt.Printf("  %s\n\n", status)
	}
}

func main() {
	testCases()
}
