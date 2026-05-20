// створити функцію, яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список

let arr = [12, false,'hello'];

const list = () => {
    for (item of arr) {
        console.log(item);
    }
}
list();
