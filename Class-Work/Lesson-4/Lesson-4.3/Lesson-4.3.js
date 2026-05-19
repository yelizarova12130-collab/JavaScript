// 10000грн pdv warTax

// function tax(sum) {
//     let pdv = sum/100*20;
//     let warTax = sum/100*1.5;
//     // let result = sum-pdv-war; // щоб зекономити рядок пишемо це зразу у return
//     return result = sum-pdv-warTax;
// }
//
// let number = tax(10000);
// console.log(number);

////////////////////////////////ЗМЕНШЕНИЙ ВАРІАНТ ЗАПИСУ/////////////////////////////////////////////////////

// function percentage (sum, per){
//     return sum / 100 * per;
// }

// function tax(sum) {
//     let pdv = percentage(sum,20);
//    let warTax = percentage(sum,1.5)
//     return result = sum-pdv-warTax;
// }
// let number = tax(10000);
// console.log(number);


////////////////////////////////ЗМЕНШЕНИЙ ВАРІАНТ ЗАПИСУ/////////////////////////////////////////////////////

// function percentage (sum, per){
//     return sum / 100 * per;
// }
//
// function tax(sum) {
//     return result = sum-percentage(sum,20)-percentage(sum,1.5);
// }
// let number = tax(10000);
// console.log(number);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



function userFilter (users) {
    let filteredUsers = [];
    for (const user of users) {
        if (user.age > 30) {
            filteredUsers.push(user);
        }
    }
    return filteredUsers;
}

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
let filter = userFilter (users);
console.log(filter);

