// – створити функцію, яка приймає масив об’єктів з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об’єкту окремий блок.

function userInformation (users) {
    for (const user of users)
    {
    document.write (`<div> ${user.id} ${user.name} ${user.age}</div>`);
    }
}



userInformation([
    {id: 1, name: 'John', age: 18},
    {id: 2, name: 'Valeria', age: 28},
    {id: 3, name: 'Andriy', age: 16},
    {id: 4, name: 'Vasya', age: 99}
]);


