
// console.log(str);
// console.log(str[0]);
// let s = new String ('Hello World!');
// console.log(typeof s);

/////////////////////////////////////////// Викликаємо методом конкад наш об*єкт
//let str = 'Hello World!';
//let s = str.concat('!!!')
//console.log(s);

///////////////////////////////////////////

let str = 'Hello World!';
console.log(str);
console.log(str.toUpperCase()); // До верхнього регістру
console.log(str.toLowerCase()); // До нижнього регістру
console.log(str.startsWith ('H')); //Він дозволяє в якості аргументу передати секвенсієс символів з якої починається наша стрінга
console.log(str.endsWith ('!'));
console.log(str.substring (0,  7));
console.log(str.indexOf('l')); //
console.log(str.indexOf('l',5)); //
console.log(str.lastIndexOf('l')); // шукає кінцеві
console.log(str.charAt(8));
console.log(str.replace('o', '#'));

let split = str.split(' ');
console.log(split);

