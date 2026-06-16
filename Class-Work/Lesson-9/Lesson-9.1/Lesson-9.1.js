// DOM - обьєктно модель документ

// console.log(document.head.innerHTML);
// console.log(document.head.children);
// console.log(document.body.innerHTML);


// Шукати елементи за певними індефікаторами (клас і тд).
//
//////////////////////////////////////////////////Найбільш швидкий спосіб.


// ID
// let ul1 = document.getElementById("list1");
// console.log(ul1);


// class
// let menuCollection = document.getElementsByClassName('menu');
// console.log(menuCollection);
//
// for (const menuCollectionElement of menuCollection) {
//     console.log(menuCollectionElement);
// }


// TAG
// let List = document.getElementsByTagName('li');
// console.log(List);

// let list1 = document.getElementById('list1');
// console.log(list1);
// let ListLiCollection = list1.getElementsByTagName('li');
// console.log(ListLiCollection);


////////////////////////////////////////////////// Не більш швидкий варіант

//console.log(document.querySelector('ul'));// Знаходить тільки один елемент по певному css селектору
//console.log(document.querySelectorAll('ul')); // Знаходить всі елементи по певному  css селектору

// console.log(document.querySelector('.menu'));
// console.log(document.querySelectorAll('.menu'));

// console.log(document.querySelector('body .menu'));
// console.log(document.querySelectorAll('body .menu'));

// console.log(document.querySelectorAll('.menu:nth-child(2)>li'));
let nodeList = document.querySelectorAll('#list2>li');
console.log(nodeList);
for (const node of nodeList) {
    console.log(node);
    
}
