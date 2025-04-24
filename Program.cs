using System;

public class CyclicRotationChecker
{
    public static bool IsCyclicRotation(string s, string t)
    {
        // Проверка на равенство длин
        if (s.Length != t.Length)
        {
            return false;
        }

        // Конкатенация s + s
        string sConcat = s + s;

        // Проверка, является ли t подстрокой sConcat
        return sConcat.Contains(t);
    }

    public static void Main(string[] args)
    {
        string s = "waterbottle";
        string t = "erbottlewat";

        bool result = IsCyclicRotation(s, t);

        Console.WriteLine("Строка T является циклическим сдвигом строки S: " + (result ? "Yes" : "No"));

        s = "waterbottle";
        t = "lewatyuterbott";
        result = IsCyclicRotation(s, t);
        Console.WriteLine("Строка T является циклическим сдвигом строки S: " + (result ? "Yes" : "No"));

        s = "abc";
        t = "cbauo";
        result = IsCyclicRotation(s, t);
        Console.WriteLine("Строка T является циклическим сдвигом строки S: " + (result ? "Yes" : "No"));
    }
}
