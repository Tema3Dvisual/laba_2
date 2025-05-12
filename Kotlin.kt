fun isCyclicRotation(s: String, t: String): Boolean {
    // Проверка на равенство длин
    if (s.length != t.length) {
        return false
    }

    // Конкатенация s + s
    val sConcat = s + s

    // Проверка, является ли t подстрокой sConcat
    return sConcat.contains(t)
}

fun main() {
    val s1 = "waterbottle"
    val t1 = "erbolewat"
    val result1 = isCyclicRotation(s1, t1)
    println("Строка T является циклическим сдвигом строки S: ${if (result1) "Yes" else "No"}")

    val s2 = "waterbottle"
    val t2 = "lewaterbott"
    val result2 = isCyclicRotation(s2, t2)
    println("Строка T является циклическим сдвигом строки S: ${if (result2) "Yes" else "No"}")

    val s3 = "abc"
    val t3 = "cba"
    val result3 = isCyclicRotation(s3, t3)
    println("Строка T является циклическим сдвигом строки S: ${if (result3) "Yes" else "No"}")
}
