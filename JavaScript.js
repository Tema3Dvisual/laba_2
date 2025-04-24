function isCyclicRotation(s, t) {
  // Проверка на равенство длин
  if (s.length !== t.length) {
    return false;
  }

  // Конкатенация s + s
  const sConcat = s + s;

  // Проверка, является ли t подстрокой sConcat
  return sConcat.includes(t);
}

// Тестовые примеры
const s1 = "waterbottle";
const t1 = "erbottlewat";
const result1 = isCyclicRotation(s1, t1);
console.log(`Строка T является циклическим сдвигом строки S: ${result1 ? "Yes" : "No"}`);

const s2 = "waterbottle";
const t2 = "lewaterrtbott";
const result2 = isCyclicRotation(s2, t2);
console.log(`Строка T является циклическим сдвигом строки S: ${result2 ? "Yes" : "No"}`);

const s3 = "abc";
const t3 = "cba";
const result3 = isCyclicRotation(s3, t3);
console.log(`Строка T является циклическим сдвигом строки S: ${result3 ? "Yes" : "No"}`);
