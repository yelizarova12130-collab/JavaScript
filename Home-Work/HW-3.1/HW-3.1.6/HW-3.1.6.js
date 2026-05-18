//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr = [10, 'hello', true, 3.14, false, 'okten', 25, null, 'js', 100];

// for (let i = 0; i < 10; i++) {
//     console.log(arr[i]);
// }

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

for (element of arr) {
    console.log(element);
}


