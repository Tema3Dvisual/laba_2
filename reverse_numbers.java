import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class reverse_numbers {

    public static boolean isAscendingDigits(int num) {
        String numStr = Integer.toString(num);
        if (numStr.length() <= 1) {
            return false; // Числа из одной цифры не считаются
        }

        for (int i = 1; i < numStr.length(); i++) {
            if (numStr.charAt(i) <= numStr.charAt(i - 1)) {
                return false;
            }
        }
        return true;
    }

    public static int reverseNumber(int num) {
        String numStr = Integer.toString(num);
        StringBuilder reversedStr = new StringBuilder(numStr);
        reversedStr.reverse();

        try {
            return Integer.parseInt(reversedStr.toString());
        } catch (NumberFormatException e) {
            System.err.println("Превышение диапазона int для числа " + num);
            return 0; // Или другое значение по умолчанию
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Введите последовательность чисел, разделенных пробелами: ");
        String input = scanner.nextLine();

        String[] numbersStr = input.split(" ");
        List<Integer> numbers = new ArrayList<>();

        for (String numStr : numbersStr) {
            try {
                int num = Integer.parseInt(numStr);
                numbers.add(num);
            } catch (NumberFormatException e) {
                System.err.println("Некорректный ввод: " + numStr + " не является числом.");
                // Пропускаем некорректный ввод и продолжаем
            }
        }

        List<Integer> result = new ArrayList<>();

        for (int num : numbers) {
            if (isAscendingDigits(num)) {
                result.add(reverseNumber(num));
            }
        }

        System.out.print("Результат: ");
        if (result.isEmpty()) {
            System.out.println("В последовательности нет чисел, соответствующих условию.");
        } else {
            for (int i = 0; i < result.size(); i++) {
                System.out.print(result.get(i));
                if (i < result.size() - 1) {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
        scanner.close();
    }
}
