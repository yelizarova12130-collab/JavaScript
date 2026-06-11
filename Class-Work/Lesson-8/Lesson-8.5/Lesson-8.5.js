let base = {
    id: 1,
    name: 'Vasya',
}
let copy = Object.create(base);
copy.surname = 'kokos';
console.log(base);
console.log(copy);
console.log(copy.id);
console.log(copy.name);
console.log(copy.hasOwnProperty('id'));
console.log(copy.hasOwnProperty('surname'));
