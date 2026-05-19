// створити функцію яка повертає найменше число з масиву

function Value (numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min){
            min = number
        }
    }
    return min;
}

console.log(Value([23,67,906,44,17]));
