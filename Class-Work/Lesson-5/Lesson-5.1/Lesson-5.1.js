/////////////////////////Функціональні вирази////////////////////////////////

// greeting(); ////// не буде працювати
// const greeting = function () {
//     console.log('hi!');
// };
//
//
// asd();
// function asd() {
//     console.log('ashfdhgsafdh');
// }

/////////////////////////Стрілочні функції////////////////////////////////////

// function calc(a,b) {
//     return a + b;
// }
// let calc = (a, b) => /*return*/ a + b;
// console.log(calc(10, 20));
//
// let asd = () => console.log(arguments);
// console.log(asd('ASD'));

/////////////////////////Функції в об’єктах та контекст this////////////////////

let user = {
    name: 'vasya',
    age: 31,
    greeting: function (msg) {
        console.log(this);
        return `${msg} my name is ${this.name}`

    },
    vitanny: (msg) => `${msg} my age is ${user.age}`

}

console.log(user.greeting('hi'));
console.log(user.vitanny('hello'));
