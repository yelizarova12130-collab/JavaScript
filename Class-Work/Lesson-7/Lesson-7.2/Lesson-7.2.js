//

function User (name, age){
    this.name = name;
    this.age = age;
}
// немає доступу але потрібно щось добавити

// let user = new User ('Vasya', 31);
// user.greeting = function () {
//     console.log('Hello World');
// }
// console.log(user);
// user.greeting();
//
// let user2 = new User ('Kolya', 54);
// console.log(user2);
// user.greeting();

// використовувати prototype

// console.log(User);
// User.prototype.greeting = function(){
//     return`Hello my name is ${this.name}`;
// };
//
// let user = new User('Vasya', 98);
// console.log(user.greeting());

//

// let user = new User ('Vasya', 31);
// user.greeting = function (msg) {
//     return`${msg} my name is ${this.name}`;
// };
// console.log(user.greeting('hello'));
// let user2 = new User ('Kolya', 54);
// console.log(user.greeting.apply(user2, ['hi']));                                 // apply - функція яка дозволяє підмінити контекст this
// console.log(user.greeting.call(user2, 'olla'));



// спосіб яким можна скопіювати ф-ю і викликати її від іншого об*єкта
let user = new User ('Vasya', 31);
user.greeting = msg => {return`${msg} my name is ${this.name}`; };
let user2 = new User ('Kolya', 54);
let greetingCopy = user.greeting.bind (user2);
console.log(greetingCopy('Привіт'));
