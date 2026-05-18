//– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.

let letters = [ 'a', 'b', 'c'];
let word = "";
for (let i = 0; i <letters.length; i++) {
    word = word + letters[i];
}
console.log(word);
//////////////////////////////////////////////////////////////////////////////////////
//– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.

let letters2 = [ 'a', 'b', 'c'];
let word2 = "";
let i = 0;
while (i < letters2.length) {
    word2 = word2 + letters2[i];
    i++;
}
console.log(word2);

//////////////////////////////////////////////////////////////////////////////////////
//– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.
let letters3 = [ 'a', 'b', 'c'];
let word3 = "";
for (letter of letters) {
    word3 = word3 + letter;
}
console.log(word3);
