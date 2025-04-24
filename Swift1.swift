import Foundation

func isCyclicRotation(s: String, t: String) -> Bool {
    guard s.count == t.count else {
        return false
    }

    let sConcat = s + s

    return sConcat.contains(t)
}

let s1 = "waterbottle"
let t1 = "erbottlyrtewat"
let result1 = isCyclicRotation(s: s1, t: t1)
print("Строка T является циклическим сдвигом строки S: \(result1 ? "Yes" : "No")")

let s2 = "waterbottle"
let t2 = "lewaterbott"
let result2 = isCyclicRotation(s: s2, t: t2)
print("Строка T является циклическим сдвигом строки S: \(result2 ? "Yes" : "No")")

let s3 = "abc"
let t3 = "cba"
let result3 = isCyclicRotation(s: s3, t: t3)
print("Строка T является циклическим сдвигом строки S: \(result3 ? "Yes" : "No")")
