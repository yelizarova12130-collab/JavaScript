let arr = [];
console.log(Array.isArray(arr));


console.log(arr.push('new element1'));
console.log(arr.push('new element2'));
console.log(arr.push('new element3'));
console.log(arr.push('new element4'));
console.log(arr.push('new element5'));
console.log(arr);

console.log(arr.pop());;
console.log(arr);

console.log(arr.unshift('!!!'));
console.log(arr);

console.log(arr.shift());;
console.log(arr);

let join = arr.join(';');
console.log(join);

let nums = [12, 14, 55];

let concat = arr.concat(nums);
console.log(concat);
console.log(arr);

console.log(nums.reverse());

console.log(concat);
let slice = (concat.slice(0, 4));
console.log(slice);
console.log(concat);
// let splice = concat.splice(0,2, 'sdfghjk', 23456, '!!!!');
// console.log(splice);
// console.log(concat);

// console.log(concat.indexOf(12));
// concat.splice(4,1);

console.log(concat.includes(14))
