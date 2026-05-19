function userFactory(id, name, age, status) {
    let user = {
        id: id,
        name: name,
        age: age,
        status: status
    }
    return user;
}

let u1 = userFactory(1, 'Katya', 123, true);
let u2 = userFactory(2, 'Kolya', 124, false);
let u3 = userFactory(3, 'Lera', 125, false);
let u4 = userFactory(4, 'Sveta', 126, true);

console.log(u1);
console.log(u2);
console.log(u3);
console.log(u4);
