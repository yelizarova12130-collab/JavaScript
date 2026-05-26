// створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
// Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
// За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const cinderellas = [
    new Cinderella('Anna', 18, 35),
    new Cinderella('Ira', 19, 36),
    new Cinderella('Olya', 20, 37),
    new Cinderella('Nastia', 21, 38),
    new Cinderella('Katya', 22, 39),
    new Cinderella('Lena', 23, 40),
    new Cinderella('Masha', 24, 41),
    new Cinderella('Sofia', 25, 42),
    new Cinderella('Vika', 26, 43),
    new Cinderella('Dasha', 27, 44)
];

class Prince {
    constructor(name,age,foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}
const prince = new Prince('Prince Charming', 30, 38);

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.foundShoeSize);

console.log(prince.wife = cinderellaMain);
