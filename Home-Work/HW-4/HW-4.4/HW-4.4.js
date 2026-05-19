//створити функцію, яка приймає масив та виводить кожен його елемент

let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];

function courses () {
    for (const course of coursesTitleArray) {
        console.log(course);
    }
    return coursesTitleArray;
}
courses ();
