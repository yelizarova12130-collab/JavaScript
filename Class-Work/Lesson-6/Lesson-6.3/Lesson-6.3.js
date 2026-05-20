
 let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// users.forEach(function (value,index, array) {
//     console.log(value);
// });

 //users.forEach(value => console.log(value));

 // let filteredUser = users.filter(value => value.age > 30);
 // console.log(filteredUser);
 // console.log(users);


 // let mapedUsers = users.map (function (value, index) {
 //     return {...value,id: index+1}; //...-спрет(розгорнути)-передаємо всі дані що маємо
 // });
 //
 // console.log(mapedUsers);

////////////////////////////////теж саме тільки стрілочна функція

//  users.map((value,index) => {
//      return { id: index+1, name: value.name,age: value.age, status: value.status };
//  })
// console.log(users);

 //let find = users.find(value => value.name === 'max');
 //console.log(find);

 // // Перевіряє чи в кожного елемента статус true. Якщо всі елементи мають статус true, він поверне true.
 // // Якщо хоть один має статус false він поверне false
 // console.log(users.every(value => value.status));
 //
 // // Перевіряє чи хоча б один з них буде мати статус true то поверне true,
 // // у випадку якщо жоден не буде ати статус true він поверне false
 // console.log(users.some(value => value.status));

 // let sort = users.sort((u1,u2) =>{
 //     return u1.age - u2.age;
 // });
 // console.log(sort);
 //
 // console.log(users.sort((u1, u2) => {
 //     if (u1.name > u2.name) {
 //         return 1;
 //     }
 //     if (u1.name < u2.name) {
 //         return -1;
 //     }
 //     if (u1.name === u2.name) {
 //         return 0;
 //     }
 // }));


 let reduse = users.reduce((accumulator, user) => {
    if(user.status){
        accumulator.statT.push(user);
    }else {
        accumulator.statF.push(user);
    }
    return accumulator;
 },{statT:[],statF:[]});
 console.log(reduse);
