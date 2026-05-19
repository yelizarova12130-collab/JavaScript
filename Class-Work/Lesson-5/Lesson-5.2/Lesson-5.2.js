/////////////////////////////// Замикання - це можливість ф-ї тримати посилання на якійсь внутрішній об*єкт.Це означає

// function asd() {
//     let x = 10;
//
//     function inner() {
//         return ++x;
//     }
//
//     return inner;
// }
//
// let foo = asd();
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());

//////////////////////////////////////////////////////////////Заборонити зміни
// let user = {name: 'asdgyqwe', age: 132};
// user.age = -100500;

function userBuilder(name, age) {
    let user = {name, age};
    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;

        },
        setAge(age) {
            if (age > 0) {
                user.age = age;
            }
        },
    }
}

let builder = userBuilder('vasya', 31);
console.log(builder);

console.log(builder.getAge());
console.log(builder.getName());
builder.setAge(-100);
console.log(builder.getAge());
