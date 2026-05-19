// створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

// let array = [12, 'hello', true];
function list (array) {
    document.write (`<ul>`);
    for (const item of array) {
        document.write (`<li> ${item} </li>`);
    }
    document.write (`</ul>`);
}

list ([12, 'hello', true]);
