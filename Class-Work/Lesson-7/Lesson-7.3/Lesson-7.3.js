///// описувати класи


// class User{
//
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
    // класова конструкція дозволяє нам визначати поведінку безпосередно в тілі самого конструктора
    //greeting(){
    //    return `hello me name is ${this.name}`;
    //}
//}
//
// let user = new User ('Kolya', 54);
// console.log(user);
// console.log(user.greeting());



// class User {
//
//     constructor(username, age) {
//         this.username = username;
//         this.age = age;
//     }
//     work (){
//         return `work in process`;
//     }
// }
// // Взяти логіку з якогось іншого класу
//
// class Customer  extends User {
//     constructor(username, age,password) {
//         super(username, age); //те саме що і this тільки в батьківському класі
//         this.password = password;
//     }
// }
//
// let customer =new Customer('Vasya', 32, 111);
// console.log(customer);
// console.log(customer.work());


// Як можна зробити наслідування в стандартній конструкції

function User (name,age) {
    this.name = name;
    this.age = age;
}

function Customer (name, age, password) {
    User.apply(this, arguments);
    this.password = password;
}
let customer = new Customer ('Kolya', 54, 1111);
console.log(customer);
