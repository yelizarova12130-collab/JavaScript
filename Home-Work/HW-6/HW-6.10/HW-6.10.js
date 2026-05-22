//  описати колоду карт (від 6 до туза без джокерів).
//  Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:

const cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = [];
for (const cardSuit of cardSuits ){
    let color;
    if (cardSuit === 'diamond' || cardSuit === 'heart'){
        color = 'red';
    }else {
        color = 'black';
    }
    for (const value of values){
        deck.push ({cardSuit: cardSuit, value: value, color: color,});
    }
}
console.log(deck);

//  – знайти піковий туз
//console.log(spaceAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace'));
//  – всі шістки
//console.log(sixes = deck.filter(card => card.value === '6'));
//  – всі червоні карти
//console.log(redCard = deck.filter(card => card.color === 'red'));
//  – всі буби
//console.log(diamondCard = redCard.filter(card => card.cardSuit === 'diamond'));
//  – всі трефи від 9 та більше
//console.log(deck.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' && card.value !== '7' && card.value !== '8' && card.value !== '9')));

//Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт

//console.log(reduceCard = deck.reduce((acc, card) => {
//     if (card.cardSuit === 'spade') {
//         acc.spades.push(card);
//     }
//     if (card.cardSuit === 'diamond') {
//         acc.diamonds.push(card);
//     }
//     if (card.cardSuit === 'heart') {
//         acc.hearts.push(card);
//     }
//     if (card.cardSuit === 'clubs') {
//         acc.clubs.push(card)
//     }
//     return acc;
// }, {spades: [],diamonds:[],hearts:[],clubs:[]}));


console.log(reduceCard = deck.reduce((acc, card) => {
    switch (card.cardSuit) {
        case 'spade':
            acc.spades.push(card);
            break;
        case 'diamond':
            acc.diamonds.push(card);
            break;
        case 'heart':
            acc.hearts.push(card);
            break;
        case 'clubs':
            acc.clubs.push(card);
            break;
    }
    return acc;
}, {spades: [],diamonds:[],hearts:[],clubs:[]}));
