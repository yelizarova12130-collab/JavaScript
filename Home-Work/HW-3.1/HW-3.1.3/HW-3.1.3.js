
let number = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
//
// let i = 0;
// while (i < number.length) {
//     console.log(number[i]);
// i++;
// }

//у зворотньому циклі (задом наперед)

// let i = number.length - 1;
// while (i >= 0) {
//     console.log(number[i]);
//     i--;
// }


// 2. перебрати його циклом for
// for (let i=0; i<number.length; i++) {
//     console.log(number[i]);
// }

//у зворотньому циклі (задом наперед)
// for (let i = number.length - 1; i >= 0; i--) {
//     console.log(number[i]);
// }

//3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 1;
// while (i < number.length) {
//     console.log(number[i]);
//     i += 2;
// }

//у зворотньому циклі (задом наперед)
// let i = number.length;
// while (i >= 0){
//     console.log(number[i]);
//     i -=2;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i <= number.length; i += 2) {
//     console.log(number[i]);
// }

//у зворотньому циклі (задом наперед)
// for (let i = number.length - 1; i >= 0; i -= 2) {
//     console.log(number[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i=0;
// while (i < number.length) {
//     if (number[i] % 2 ===0) {
//         console.log(number[i]);
//     }
//     i++;
// }

//у зворотньому циклі (задом наперед)
// let i = number.length - 1;
// while (i >= 0) {
//     if (number[i] % 2 === 0) {
//         console.log(number[i]);
//     }
//     i--;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for( let i = 0; i < number.length; i++ ){
//     if( number[i] % 2 === 0 ){
//         console.log(number[i]);
//     }
// }

//у зворотньому циклі (задом наперед)
//
// for( let i = number.length - 1; i >= 0; i-- ){
//     if( number[i] % 2 === 0 ){
//         console.log(number[i]);
//     }
// }


// 7. замінити кожне число, кратне 3, на слово “okten”
// for ( let i = 0; i < number.length; i++ ) {
//    if( number[i] % 3 === 0 ){
//        number[i] = 'okten';
//    }
//     console.log( number[i]);
// }

//у зворотньому циклі (задом наперед)
// for ( let i = number.length - 1; i >= 0; i-- ) {
//     if( number[i] % 3 === 0 ){
//         number[i] = 'okten';
//     }
//     console.log( number[i]);
// }


// 8. вивести масив у зворотньому порядку.
//  for (let i = number.length; i >=0 ; i--) {
//      console.log(number[i]);
//  }
