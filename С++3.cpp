#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <sstream>

using namespace std;

bool isAscendingDigits(int num) {
    string numStr = to_string(num);
    if (numStr.length() <= 1) {
        return false; 
    }

    for (size_t i = 1; i < numStr.length(); ++i) {
        if (numStr[i] <= numStr[i - 1]) {
            return false;
        }
    }
    return true;
}

int reverseNumber(int num) {
    string numStr = to_string(num);
    reverse(numStr.begin(), numStr.end());
    try {
        return stoi(numStr);
    } catch (const std::out_of_range& oor) {
        cerr << "Out of Range error: " << oor.what() << " Превышение диапазона int для числа " << num << endl;
        return 0; 
    }
}

int main() {
    string input;
    cout << "Введите последовательность чисел, разделенных пробелами: ";
    getline(cin, input);

    stringstream ss(input);
    int num;
    vector<int> numbers;
    while (ss >> num) {
        numbers.push_back(num);
    }

    vector<int> result;

    for (int num : numbers) {
        if (isAscendingDigits(num)) {
            result.push_back(reverseNumber(num));
        }
    }

    cout << "Результат: ";
    if (result.empty()) {
        cout << "В последовательности нет чисел, соответствующих условию.";
    } else {
        for (size_t i = 0; i < result.size(); ++i) {
            cout << result[i];
            if (i < result.size() - 1) {
                cout << " ";
            }
        }
    }
    cout << endl;

    return 0;
}
