// створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sum(arr) {
    let number = 0;
for (const item of arr) {
    number = number + item;
}
return number;
}
console.log(sum([1,2,3]));
