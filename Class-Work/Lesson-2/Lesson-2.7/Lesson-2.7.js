
// if(true) {
//     console.log('test');
// }
//
// //якщо ми виконаємо це ж з false то нічого не буде
// // if(false) {
// //     console.log('test');
// // }
//
// let color = 'green';
// if(color === 'red'){
//     console.log('stop');
// }else{
//     console.log('go!');
// }

////////////


let color = prompt('enter color');
// if (color === 'green') {
//     if(confirm('is road clear?')) {
//     console.log('go');
//     }else{
//         console.log('just wait');
//     }
// }else if (color === 'yellow') {
//     console.log('wait');
// }else if (color === 'red') {
//     console.log('stop');
// }else{
//     console.log('error');
// }
let isRoadClear = confirm('is road clear?');
if (color === 'green' && isRoadClear) {
    console.log('go');
}else if (color === 'yellow') {
    console.log('wait');
}else if (color === 'red') {
    console.log('stop');
}else{
    console.log('error');
}
