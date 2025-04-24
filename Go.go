package main

import (
	"fmt"
	"strings"
)

func isCyclicRotation(s, t string) bool {
	// Проверка на равенство длин
	if len(s) != len(t) {
		return false
	}

	// Конкатенация s + s
	sConcat := s + s
	// Проверка, является ли t подстрокой sConcat
	return strings.Contains(sConcat, t)
}

func main() {
	s := "waterbottle"
	t := "erbottlewat"

	result := isCyclicRotation(s, t)

	fmt.Println("Строка T является циклическим сдвигом строки S:", map[bool]string{true: "Yes", false: "No"}[result])

	s = "waterbottle"
	t = "lewaterbott"
	result = isCyclicRotation(s, t)
	fmt.Println("Строка T является циклическим сдвигом строки S:", map[bool]string{true: "Yes", false: "No"}[result])

	s = "abc"
	t = "cba"
	result = isCyclicRotation(s, t)
	fmt.Println("Строка T является циклическим сдвигом строки S:", map[bool]string{true: "Yes", false: "No"}[result])
}
