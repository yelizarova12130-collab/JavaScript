let n = 100;
let s = 'asd';
let b = true;

console.log( typeof n);
console.log( typeof s);
console.log( typeof b);

// Обьєкти
let user = {
    name: 'John',
    age: 42
}
// Масиви
let arr = [1,2,3, true];

console.log( typeof arr);
console.log( typeof user);

console.log( typeof undefined);
console.log( typeof null);
console.log( typeof NaN);

// true
console.log(!!100);
console.log(!!-100);
console.log(!!'asd');
// false
console.log(!!0);
console.log(!!null);
console.log(!!undefined);
console.log(!!'');
// нюанси
console.log(!!'0');
console.log(!!' ');

