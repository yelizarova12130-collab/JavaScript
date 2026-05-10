//примітивні типи данних
//                      number
//                      string!(можуть бути як і примітивними так і ссилочними)
//                      boolean
/// примітивні типи данних - це ячейкі які при копіюванні відають свої хначення
let a=100;
let b=a;
b=b+10; //110
console.log(a); //100


let user= {name:'Vasya'};
let user2=user;
console.log(user2);
user2.age=31;
console.log(user2);

//якщо виведемо просто user то побачимо що йому присвоївся вік 31




