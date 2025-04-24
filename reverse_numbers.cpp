#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

bool isAscendingDigits(int num) {
    string numStr = to_string(num);
    if (numStr.length() <= 1) {
        return false; // Числа из одной цифры не считаются
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
        return 0; // Или другое значение по умолчанию
    }
}

int main() {
    vector<int> numbers = {4, 87, 129, 33, 45, 123456789, 1023};
    vector<int> result;

    for (int num : numbers) {
        if (isAscendingDigits(num)) {
            result.push_back(reverseNumber(num));
        }
    }

    cout << "Результат: ";
    for (size_t i = 0; i < result.size(); ++i) {
        cout << result[i];
        if (i < result.size() - 1) {
            cout << " ";
        }
    }
    cout << endl;

    return 0;
}
