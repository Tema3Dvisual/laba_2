function isCyclicRotation(s, t) {
    // Проверка на равенство длин
    if (s.length !== t.length) {
        return false;
    }
    // Конкатенация s + s
    var sConcat = s + s;
    // Проверка, является ли t подстрокой sConcat
    return sConcat.includes(t);
}
// Тестовые примеры
var s1 = "waterbottle";
var t1 = "erbottlewat";
var result1 = isCyclicRotation(s1, t1);
console.log("\u0421\u0442\u0440\u043E\u043A\u0430 T \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0446\u0438\u043A\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0441\u0434\u0432\u0438\u0433\u043E\u043C \u0441\u0442\u0440\u043E\u043A\u0438 S: ".concat(result1 ? "Yes" : "No"));
var s2 = "waterbottle";
var t2 = "lewaterbott";
var result2 = isCyclicRotation(s2, t2);
console.log("\u0421\u0442\u0440\u043E\u043A\u0430 T \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0446\u0438\u043A\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0441\u0434\u0432\u0438\u0433\u043E\u043C \u0441\u0442\u0440\u043E\u043A\u0438 S: ".concat(result2 ? "Yes" : "No"));
var s3 = "abc";
var t3 = "cba";
var result3 = isCyclicRotation(s3, t3);
console.log("\u0421\u0442\u0440\u043E\u043A\u0430 T \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0446\u0438\u043A\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0441\u0434\u0432\u0438\u0433\u043E\u043C \u0441\u0442\u0440\u043E\u043A\u0438 S: ".concat(result3 ? "Yes" : "No"));
