import java.util.*;

public class TravelChain {

    public static String findLongestChainDestination(List<Pair<String, String>> itinerary) {
        if (itinerary == null || itinerary.isEmpty()) {
            return "";
        }

        if (itinerary.size() == 1 && itinerary.get(0).first.equals(itinerary.get(0).second)) {
            return "обратитесь к специалисту";
        }

        // Построение карты маршрутов и множества всех городов
        Map<String, String> routes = new HashMap<>();
        Set<String> cities = new HashSet<>();

        for (Pair<String, String> leg : itinerary) {
            routes.put(leg.first, leg.second);
            cities.add(leg.first);
            cities.add(leg.second);
        }

        // Поиск начального города (города, который является началом, но не концом ни одного другого маршрута)
        String startCity = null;
        for (String city : cities) {
            boolean isStart = true;
            for (Pair<String, String> leg : itinerary) {
                if (leg.second.equals(city)) {
                    isStart = false;
                    break;
                }
            }
            if (isStart) {
                startCity = city;
                break;
            }
        }

        // Если начальный город не найден, возвращаем пустую строку
        if (startCity == null) {
            return "";
        }

        // Проходим по маршруту от начального города до конечного
        String currentCity = startCity;
        String finalDestination = null;
        while (routes.containsKey(currentCity)) {
            finalDestination = routes.get(currentCity);
            currentCity = routes.get(currentCity);
        }

        return finalDestination;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Введите количество пар пунктов пребывания: ");
        int numPairs = scanner.nextInt();
        scanner.nextLine(); // Consume newline

        List<Pair<String, String>> itinerary = new ArrayList<>();
        for (int i = 0; i < numPairs; ++i) {
            System.out.print("Введите пару " + (i + 1) + " (Начальный пункт,Конечный пункт): ");
            String line = scanner.nextLine();
            String[] parts = line.split(",");

            if (parts.length == 2) {
                String start = parts[0].trim();
                String end = parts[1].trim();
                itinerary.add(new Pair<>(start, end));
            } else {
                System.out.println("Некорректный ввод. Пожалуйста, введите пару в формате 'Начальный пункт,Конечный пункт'.");
                i--; // Repeat input for this pair
            }
        }

        String result = findLongestChainDestination(itinerary);

        if (result.equals("обратитесь к специалисту")) {
            System.out.println(result);
        } else if (result.isEmpty()) {
            System.out.println("Маршрут не найден.");
        } else if (itinerary.size() == 1 && itinerary.get(0).first.equals(itinerary.get(0).second)) {
            System.out.println("обратитесь к специалисту");
        }
        else {
            System.out.println("Итоговый конечный пункт: " + result);
        }

        scanner.close();
    }

    // Helper class to represent a pair
    static class Pair<K, V> {
        public K first;
        public V second;

        public Pair(K first, V second) {
            this.first = first;
            this.second = second;
        }
    }
}
