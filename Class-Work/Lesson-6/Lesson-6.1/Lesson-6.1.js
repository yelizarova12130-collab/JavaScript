
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
console.log(str.endsWith ('!')); // перевіряє кінцевий знак (true,false)
console.log(str.substring (0,  7)); //показує від 0 символу по 7
console.log(str.indexOf('l')); // показує індекс першої заданої букви
console.log(str.indexOf('l',5)); //  показує індекс заданої букви починаючи рахувати з заданого індексу
console.log(str.lastIndexOf('l')); // шукає кінцеві
console.log(str.charAt(8)); // показує що знаходиться під заданим індексом
console.log(str.replace('o', '#'));

let split = str.split(' ');
console.log(split);

