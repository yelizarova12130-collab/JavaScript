// створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

const sum = (arr) => {
    let number = 0;
    for (const item of arr) {
        number = number + item;
    }
    console.log(number);
}
sum([1,20,3]);
