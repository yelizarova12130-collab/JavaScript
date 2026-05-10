//– Створити 3 об’єкти, які описують книги.
// Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.


let book1 = {
    title: 'puzzle',
    pageCount: 456,
    genre: 'crime story',
    authors: [
        { name: "Franck Thilliez", age: 52 },
        { name: "Anne Smith", age: 48 }
    ]
};

let book2 = {
    title: 'maze',
    pageCount: 678,
    genre: 'detective',
    authors: [
        { name: "Franck Thilliez", age: 52 },
        { name: "Anne Smith", age: 48 }
    ]
};
let book3 = {
    title: 'unfinished manuscript',
    pageCount: 234,
    genre: 'detective',
    authors: [
        { name: "Franck Thilliez", age: 52 },
        { name: "Anne Smith", age: 48 }
    ]
};

console.log(book1);
console.log(book2);
console.log(book3);
