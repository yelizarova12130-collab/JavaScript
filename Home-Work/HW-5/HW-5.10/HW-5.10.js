// створити функцію, яка повертає найменше число з масиву

let Value = [1,  0, 456, -100, 50, -780];

const minValue = (number) => {
    let min = number[0];
    for (let item of number) {
        if (item < min) {
            min = item;
        }

    }
    console.log(min);
}

minValue(Value);
