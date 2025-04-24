public class Java {

    public static boolean isCyclicRotation(String s, String t) {
        // Проверка на равенство длин
        if (s.length() != t.length()) {
            return false;
        }

        // Конкатенация s + s
        String sConcat = s + s;

        // Проверка, является ли t подстрокой sConcat
        return sConcat.contains(t);
    }

    public static void main(String[] args) {
        String s = "waterbottle";
        String t = "errrtbottlewat";

        boolean result = isCyclicRotation(s, t);

        System.out.println("Строка T является циклическим сдвигом строки S: " + (result ? "Yes" : "No"));

        s = "waterbottle";
        t = "lewaterbott";
        result = isCyclicRotation(s, t);
        System.out.println("Строка T является циклическим сдвигом строки S: " + (result ? "Yes" : "No"));

        s = "abc";
        t = "cba";
        result = isCyclicRotation(s, t);
        System.out.println("Строка T является циклическим сдвигом строки S: " + (result ? "Yes" : "No"));
    }
}
