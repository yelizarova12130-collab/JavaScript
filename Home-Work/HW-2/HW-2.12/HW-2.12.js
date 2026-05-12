//з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray.
// За допомогою іф перевірити кожен його елемент на тривалість навчання.
// У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.

let courses = [
    {title: 'JavaScript Complex', month: 5},
    {title: 'Java Complex', month: 6},
    {title: 'Python Complex', month: 6},
    {title: 'QA Complex', month: 4},
    {title: 'FullStack', month: 7},
    {title: 'Frontend', month: 4}
];

if(courses[0].month > 5 ){
    console.log('Super');
}if(courses[1].month > 5 ){
    console.log('Super');
}if(courses[2].month > 5 ){
    console.log('Super');
}if(courses[3].month > 5 ){
    console.log('Super');
}if(courses[4].month > 5 ){
    console.log('Super');
}if(courses[5].month > 5 ){
    console.log('Super');
}


for (let i = 0; i < courses.length; i++) {
    if (courses[i].month > 5) {
        console.log(courses[i].title + ' — Супер');
    }
}
