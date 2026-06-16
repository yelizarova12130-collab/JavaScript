// let target = document.getElementById('target');
// console.log(target.innerText); // доступ до тексту що знаходиться в середині елементу
// //target.innerText = 'okten'; // Замінили текст
// target.style.backgroundColor = 'red';
// // console.log(target.classList); //список всіх класів
// // target.classList.add('foo');
// // target.classList.add('bar');
// // console.log(target.classList.item(0)); // витягнути певний клас за певним індексом
// // //console.log(target.classList.contains('bar'));// перевірити чи існує такий клас чи ні
// // target.classList.toggle('asd'); // Перемикач - якщо клас bar існує тоо він видаляє, а якщо наприклад ми напишемо замість bar - asd то він його добавить
//
// // Дістати інформацію
// // console.log(target.getAttribute('xxx'));
// // console.log(target.getAttribute('id'));
// // console.log(target.getAttribute('class'));
// // console.log(target.getAttribute('style'));
//
//
// // console.log(target.previousElementSibling); // Елемент який знаходиться до
// // console.log(target.nextElementSibling);
// // console.log(target.children); // повертають html  об'єкти
// // console.log(target.childNodes); // повертають вузли(node)
//
//
// target.innerHTML = '<b>hello world</b>';
// console.log(target.outerHTML);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

let collectionOfDiv = document.getElementsByClassName('point');
for (const DivElement of collectionOfDiv) {
    DivElement.innerText = 'hello world';
    DivElement.classList.add('asd')
}
