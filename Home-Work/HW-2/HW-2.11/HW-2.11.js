//– є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//  буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення
//  (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

// let x = true;
// if (x === 0 || x === '' || x === false || x === null || x === undefined || x === NaN ) {
//     console.log('default');
// } else {
//     console.log(x)
// }


let x = 'Hello okten';
if(!x){
    console.log (x='default');
}else {
    console.log(x)
}
