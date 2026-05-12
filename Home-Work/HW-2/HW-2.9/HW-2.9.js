//– Скласти розклад на тиждень за домопогою switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let plans = prompt('Enter a number');

switch( plans ) {
    case '1':
        console.log('Sunday');
        break;
    case '2':
        console.log('Monday');
        break;
    case '3':
        console.log('Tuesday');
        break;
    case '4':
        console.log('Wednesday');
        break;
    case '5':
        console.log('Thursday');
        break;
    case '6':
        console.log('Friday');
        break;
    case '7':
        console.log('Saturday');
        break;
}
