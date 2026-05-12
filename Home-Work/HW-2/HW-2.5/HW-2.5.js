//– описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let weather = [
    { morning:[21, 20, 19, 18, 17, 17, 15]},
    { afternoon: [25, 26, 17, 28, 24, 24, 25] },
    { night: [20, 20, 20, 20, 17, 17, 18] }
];

console.log(weather[0].morning[0]);
console.log(weather[1].afternoon[0]);
console.log(weather[2].night[0]);

//другий варіант

let temperature = [
    {day: 'Sunday', morning:21, afternoon:25, night:20},
    {day:'Monday', morning:20, afternoon:26, night:20},
    {day:'Tuesday', morning:19, afternoon:17, night:20},
    {day:'Wednesday', morning:18, afternoon:28, night:20},
    {day:'Thursday', morning:17, afternoon:24, night:17},
    {day:'Friday', morning:17, afternoon:24, night:17},
    {day:'Saturday', morning:21, afternoon:25, night:18}
];

console.log(temperature[0]);


