let user = {
    name: 'John',
    skills: ['html', 'javascript'],
    greeting: function () {

    },
}
// let userClone = {...user};
// console.log(user === userClone);
// console.log(user.skills === userClone.skills);

// let s = JSON.stringify(123)  // перетворює все на стрінгове значення
// console.log(s);
// console.log(typeof s);


// let s = JSON.stringify(user)  // перетворює все на стрінгове значення
// console.log(s);
// console.log(typeof s);
// let parse = JSON.parse('123');
// console.log(parse);
// console.log(typeof parse);


// let userJsonClone = JSON.stringify(user);
// console.log(userJsonClone);
// let parse = JSON.parse(userJsonClone);
// console.log(parse);
// console.log(user);
// console.log(user === parse);
// console.log(user.skills === parse.skills);

// JSON - спосіб передачі інформації а не поведінки


let assign = Object.assign({}, user);
console.log(assign);
console.log(assign === user);
console.log(assign.skills === user.skills);

