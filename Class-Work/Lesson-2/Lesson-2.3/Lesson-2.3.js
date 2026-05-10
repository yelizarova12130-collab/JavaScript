// let userID = 1;
// let userName = "Vasya";
// let userAge = 31;

// Скорочена версія

let user1 = {
    id : 1,
    name : "Vasya",
    age : 31,
    skills: ['java', 'js', 'html'],
    wife: {
        name : "Olya",
        age : 28
    }
}
// console.log(user1);
//
// //Витягнути будь яку з характеристик (перший спосіб)
// console.log(user1.id);
// //(Другий спосіб) У випадку якщо ми хочемо звернутись через масиви
// console.log(user1['age']);
//
// console.log(user1.skills[0]);

console.log(user1.wife.name);
