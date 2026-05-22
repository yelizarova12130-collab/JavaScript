// this це об*єкт який буде створювати нову функцію-конструкцію під час свого виконання.


// function User (name,age,status){
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     console.log(this);
// }

//let user1 = new User('Vanya', 26, false);
//let user2 = new User('Vasya', 13, true);

function User ( name, age, status, wifeName, wifeAage){
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = {name: wifeName, age: wifeAage};
    this.greating = function(){
        console.log ('hi');
    }
}

let user = new User('Vasya', 26, false, 'Anna', 24);
console.log(user);
