use std::collections::HashMap;

fn find_longest_chain_destination(itinerary: &Vec<(String, String)>) -> String {
    if itinerary.is_empty() {
        return String::from("");
    }

    if itinerary.len() == 1 && itinerary[0].0 == itinerary[0].1 {
        return String::from("обратитесь к специалисту");
    }

    // Построение карты маршрутов
    let mut routes: HashMap<String, String> = HashMap::new();
    for (start, end) in itinerary {
        routes.insert(start.clone(), end.clone());
    }

    // Поиск начального города
    let end_cities: Vec<String> = itinerary.iter().map(|(_, end)| end.clone()).collect();

    let start_city: Option<&String> = itinerary.iter().find(|(start, _)| !end_cities.contains(start)).map(|(start, _)| start);

    match start_city {
        Some(city) => {
            // Проходим по маршруту
            let mut current_city = city.clone();
            let mut final_destination: String = String::from(""); // Initialize to empty string

            loop {
                match routes.get(&current_city) {
                    Some(next_city) => {
                        final_destination = next_city.clone();
                        current_city = next_city.clone();
                    }
                    None => break,
                }
            }

            final_destination
        }
        None => String::from(""),
    }
}

fn test_cases() {
    let test_data = vec![
        (vec![("Новосибирск".to_string(), "Дубай".to_string()), ("Новосибирск".to_string(), "Искитим".to_string()), ("Искитим".to_string(), "Линево".to_string())], "Линево".to_string()),
        (vec![("Лондон".to_string(), "Стамбул".to_string()), ("Новосибирск".to_string(), "Лондон".to_string()), ("Стамбул".to_string(), "Пекин".to_string())], "Пекин".to_string()),
        (vec![("Барнаул".to_string(), "Новосибирск".to_string())], "Новосибирск".to_string()),
        (vec![("Искитим".to_string(), "Искитим".to_string())], "обратитесь к специалисту".to_string()),
        (vec![("Москва".to_string(), "Тула".to_string()), ("Омск".to_string(), "Тюмень".to_string())], "".to_string()),
        (vec![("Томск".to_string(), "Омск".to_string()), ("Новосибирск".to_string(), "Томск".to_string())], "Омск".to_string()),
        (vec![], "".to_string()),
    ];

    for (i, (input, expected)) in test_data.iter().enumerate() {
        let result = find_longest_chain_destination(input);
        println!("Test Case {}:", i + 1);
        println!("  Input: {:?}", input);
        println!("  Expected: {}", expected);
        println!("  Result: {}", result);
        println!("  {}\n", if result == *expected { "Passed" } else { "Failed" });
    }
}

fn main() {
    test_cases();
}
