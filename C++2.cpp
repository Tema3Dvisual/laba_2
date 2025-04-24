#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

using namespace std;

string findLongestChainDestination(const vector<pair<string, string>>& itinerary) {
    if (itinerary.empty()) {
        return "";
    }

    if (itinerary.size() == 1 && itinerary[0].first == itinerary[0].second) {
        return "обратитесь к специалисту";
    }

    unordered_map<string, string> routes;
    unordered_map<string, int> cityCount;

    for (const auto& leg : itinerary) {
        routes[leg.first] = leg.second;
        cityCount[leg.first]++;
        cityCount[leg.second]++;
    }

    string startCity;
    int startCount = 0;
    for (const auto& leg : itinerary) {
        if (cityCount[leg.first] > 0 && cityCount.find(leg.second) != cityCount.end()) {
            bool isStart = true;
            for (const auto& otherLeg : itinerary) {
                if (otherLeg.second == leg.first) {
                    isStart = false;
                    break;
                }
            }
            if (isStart) {
                startCity = leg.first;
                startCount++;
            }
        }
    }

    if (startCount == 0 && itinerary.size() > 1)
       return "обратитесь к специалисту";

    string destination = "";
    if (itinerary.size() == 1) {
        return itinerary[0].second;
    }

    string currentCity = startCity;
    string finalDestination = "";
    
    while (routes.count(currentCity) > 0) {
        finalDestination = routes[currentCity];
        currentCity = routes[currentCity];        
    }

    return finalDestination;
}

int main() {
    vector<pair<string, string>> itinerary1 = {
        {"Новосибирск", "Дубай"},
        {"Новосибирск", "Линево"},
        {"Линево", "Искитим"}
    };
    cout << "Пример 1: " << findLongestChainDestination(itinerary1) << endl; 

    vector<pair<string, string>> itinerary2 = {
        {"Лондон", "Лондон"}
    };
    cout << "Пример 2: " << findLongestChainDestination(itinerary2) << endl; 

    vector<pair<string, string>> itinerary3 = {
        {"Барнаул", "Новосибирск"}
    };
    cout << "Пример 3: " << findLongestChainDestination(itinerary3) << endl; 
    
    vector<pair<string, string>> itinerary4 = {
        {"Искитим", "Искитим"}
    };
    cout << "Пример 4: " << findLongestChainDestination(itinerary4) << endl;

    vector<pair<string, string>> itinerary5 = {
        {"Москва", "Тула"},
        {"Омск", "Тюмень"}
    };
    cout << "Пример 5: " << findLongestChainDestination(itinerary5) << endl;

    vector<pair<string, string>> itinerary6 = {
      {"Томск", "Омск"},
      {"Новосибирск", "Томск"}
    };
    cout << "Пример 6: " << findLongestChainDestination(itinerary6) << endl;


    return 0;
}
