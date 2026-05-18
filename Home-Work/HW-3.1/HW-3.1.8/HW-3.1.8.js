// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let arr = [];

arr[0] = 26;
arr[1] = true;
arr[2] = 'okten';
arr[3] = null;
arr[4] = 3.14;
arr[5] = false;
arr[6] = 'hello';
arr[7] = 0;
arr[8] = 'one';
arr[9] = true;

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

let i = 0;
while (i<arr.length) {
    console.log(arr[i]);
    i++;
}
