// Map - асоціація (пов`язування чогось з чимось)
//Для чого можна використувувати Map - для того щоб робити асоціацію між ключем і значенням

let map = new Map();
console.log(map);
// У випадку якщо ми хочемо у Map додати якусь асоціацію
// map.set(1,'one');
// map.set(2,'two');
// map.set(3,'three');
// console.log(map);
// console.log(map.get(1));
// приклад
let tekila = {id: 'tekila'};
map.set(tekila, {name: 'Darina', surneme: 'Sokur'});
let pigulka = {id:'pigulka'}
map.set(pigulka, {name: 'Daryna', surneme: 'Domanska'});
//map.set(pigulka, {name: 'qwerty', surneme: 'asdfghj'});
console.log(map.get(tekila));
console.log(map.get(pigulka));
// map.delete(tekila);
console.log(map);
console.log(map.size);
console.log(map.keys());
let from = Array.from(map.keys());
console.log(from);

console.log(map.values());
console.log(Array.from(map.values()));
