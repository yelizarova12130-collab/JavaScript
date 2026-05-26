// set - набір, унікальний набір - це спеціальний об*єкт у який можна помістити в масив певні значення, діставати певні значення і ці значення не будуть повторюватись

// let set = new Set();
// set.add ('asd');
// set.add ('qwe');
// set.add ('asd');
// set.add ('xxx');
// console.log(set); // побачимо що є тільки три унікальні об*єкта
//
// // в сеті можна перевірити чи наявний той чи інший об*єкт
//
// console.log(set.has('xxxx'));
//
// // у випадку якщо хочемо видалити щось з середини
//
// set.delete('xxx');
// console.log(set);
//
// // подивитись скільки об*єктів існує в середині сету
//
// console.log(set.size);
//
// // Завжди можемо проітерувати
//
// set.forEach(value => console.log(value));
//
// // Зробити з унікального об*єкту масив
//
// let arrayFromSet = Array.from(set);
// console.log(arrayFromSet);


// Приклад використання

let set = new Set ([11, 22, 33, 44, 11, 22, 55]);
console.log(set);
let numbers = Array.from(set);
console.log(numbers);
