import * as readline from 'readline';

function findLongestChainDestination(itinerary: [string, string][]): string {
    if (!itinerary || itinerary.length === 0) {
        return "";
    }

    if (itinerary.length === 1 && itinerary[0][0] === itinerary[0][1]) {
        return "обратитесь к специалисту";
    }

    // Построение карты маршрутов и множества всех городов
    const routes: { [key: string]: string } = {};
    const cities: Set<string> = new Set();
    for (const leg of itinerary) {
        routes[leg[0]] = leg[1];
        cities.add(leg[0]);
        cities.add(leg[1]);
    }

    // Поиск начального города (города, который является началом, но не концом ни одного другого маршрута)
    let startCity: string | null = null;
    cities.forEach(city => { // Изменен цикл for...of на forEach
        let isStart = true;
        for (const leg of itinerary) {
            if (leg[1] === city) {
                isStart = false;
                break;
            }
        }
        if (isStart) {
            startCity = city;
            return; // Замена break в цикле forEach
        }
    });

    // Если начальный город не найден, возвращаем пустую строку
    if (!startCity) {
        return "";
    }

    // Проходим по маршруту от начального города до конечного
    let currentCity: string | null = startCity;
    let finalDestination: string | null = null;
    while (currentCity && routes[currentCity]) {
        finalDestination = routes[currentCity];
        currentCity = routes[currentCity];
    }

    return finalDestination || "";
}

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const question = (query: string): Promise<string> => {
        return new Promise((resolve) => {
            rl.question(query, resolve);
        });
    };


    try {
        const numPairsStr = await question("Введите количество пар пунктов пребывания: ");
        const numPairs = parseInt(numPairsStr);

        if (isNaN(numPairs) || numPairs < 0) {
            console.log("Некорректный ввод количества пар.");
            return;
        }

        const itinerary: [string, string][] = [];
        for (let i = 0; i < numPairs; ++i) {
            const line = await question(`Введите пару ${i + 1} (Начальный пункт,Конечный пункт): `);
            const parts = line.split(",");

            if (parts.length === 2) {
                const start = parts[0].trim();
                const end = parts[1].trim();
                itinerary.push([start, end]);
            } else {
                console.log("Некорректный ввод. Пожалуйста, введите пару в формате 'Начальный пункт,Конечный пункт'.");
                i--; // Repeat input for this pair
            }
        }

        const result = findLongestChainDestination(itinerary);

        if (result === "обратитесь к специалисту") {
            console.log(result);
        } else if (!result) {
            console.log("Маршрут не найден.");
        } else if (itinerary.length === 1 && itinerary[0][0] === itinerary[0][1]) {
            console.log("обратитесь к специалисту");
        }
        else {
            console.log(`Итоговый конечный пункт: ${result}`);
        }
    } finally {
        rl.close();
    }
}

main();
