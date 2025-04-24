#include <iostream>
#include <string>

bool isCyclicRotation(const std::string& s, const std::string& t) {
   
    if (s.length() != t.length()) {
        return false;
    }
   
    std::string s_concat = s + s;

   
    return (s_concat.find(t) != std::string::npos);
}

int main() {
    std::string s = "waterbottle";
    std::string t = "erbottlewat";

    bool result = isCyclicRotation(s, t);

    std::cout << "Строка erbottlewat является циклическим сдвигом строки waterbottle: " << (result ? "Yes" : "No") << std::endl;

    s = "taburetka";
    t = "kataburet";
    result = isCyclicRotation(s, t);
    std::cout << "Строка kataburet является циклическим сдвигом строки taburetka: " << (result ? "Yes" : "No") << std::endl;

    s = "abc";
    t = "cba";
    result = isCyclicRotation(s, t);
    std::cout << "Строка cba является циклическим сдвигом строки abc: " << (result ? "Yes" : "No") << std::endl;

    return 0;
}
