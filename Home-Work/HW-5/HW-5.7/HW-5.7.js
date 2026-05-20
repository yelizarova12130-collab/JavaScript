// створити функцію, яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


const list = (text, count) => {
    let result = '';

    for (let i = 0; i < count; i++) {
        result = result +`<li>${text}</li>`;
    }

    console.log(`<ul>${result}</ul>`);
};

list('hello', 3);
