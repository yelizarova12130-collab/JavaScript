// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

let arr = [ 10, 'hello', true, 25, 'javascript', false, 3.14, 'okten', true, 100];

// for( let i = 0; i < arr.length; i++ ) {
//     if( typeof arr[i] === 'boolean'){
//         console.log(arr[i]);
//     }
// }

//– Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// for( let i = 0; i < arr.length; i++ ) {
//     if( typeof arr[i] === 'number'){
//         console.log(arr[i]);
//     }
// }

//– Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for( let i = 0; i < arr.length; i++ ) {
    if( typeof arr[i] === 'string'){
        console.log(arr[i]);
    }
}
