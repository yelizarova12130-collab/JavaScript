// Створити функцію, яка робить глибоку копію об’єкта.
//
// Додати перевірки на undefined, null, NaN.
//
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.
const clone = cloner({
    id: 123,
    name: 'Anna',
    age: NaN,
    foo() {
        console.log('bar');
    }
});

console.log(clone);

clone.foo();
console.log(Number.isNaN(clone.age));

function cloner(obj) {

    if (obj === undefined || obj === null) {
        throw new Error('Object does not exist');
    }

    let functions = [];
    let nanKeys = [];

    for (const key in obj) {

        if (typeof obj[key] === 'function') {
            functions.push({
                key,
                functionClone: obj[key].bind({})
            });
        }

        if (typeof obj[key] === 'number' && Number.isNaN(obj[key])) {
            nanKeys.push(key);
        }
    }

    const cloneObj = JSON.parse(JSON.stringify(obj));

    for (const key of nanKeys) {
        cloneObj[key] = NaN;
    }

    for (const func of functions) {
        cloneObj[func.key] = func.functionClone;
    }

    return cloneObj;
}
