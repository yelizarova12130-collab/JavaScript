// є масив



const coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];
//  — відсортувати його за спаданням за monthDuration
const sort = coursesAndDurationArray
.sort((dur1, dur2) => dur2.monthDuration - dur1.monthDuration)

//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
.filter(value => value.monthDuration > 5)

//  — за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}
.map((value, index) => ({...value, id: index+1}));

console.log(sort);
