// Взяти масив (Client [] з попереднього завдання).
// Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

function Client (id,name,surname,email,phone,order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
function Product(title, price) {
    this.title = title;
    this.price = price;
}
const Clients = [
new Client(1, 'Anna', 'Koval', 'anna.koval@gmail.com', '+380671112233', [
        new Product ('eggs', 70),
        new Product ('beef',  320 ),
        new Product ('pepper', 45 )
    ]),
new Client(2, 'Oleh', 'Bondarenko', 'oleh.bond@gmail.com', '+380501234567', [
        new Product ('lemon', 40 ),
        new Product ('mayonnaise', 65 ),
        new Product ('chocolate', 40 ),
        new Product ('sausage', 190 ),
        new Product ('cola', 65 ),
    ]),
new Client(3, 'Iryna', 'Shevchenko', 'iryna.shev@gmail.com', '+380931112244', [
        new Product('salt',20),
        new Product('rice',65),
        new Product('banana',60),
        new Product('pepper',45),
    ]),
new Client(4, 'Maksym', 'Tkachenko', 'maksym.tk@gmail.com', '+380661234890', [
        new Product('burger',180),
        new Product('ice cream',120),
        new Product('yogurt',55),
    ]),
new Client(5, 'Dmytro', 'Lysenko', 'dmytro.lys@gmail.com', '+380631234567', [
        new Product('nuts',150),
        new Product('pizza',320),
        new Product('fries',90),
        new Product('ketchup',50)
    ]),
new Client(6, 'Olena', 'Kravets', 'olena.kr@gmail.com', '+380681119988', [
        new Product('lemon',40),
        new Product('jam',95),
        new Product('chicken',220),
        new Product('apple',45),
        new Product('banana',60)
    ]),
new Client(7, 'Sofia', 'Melnyk', 'sofia.m@gmail.com', '+380971112299', [
        new Product('milk',50),
        new Product('tea',90)
    ]),
new Client(8, 'Andrii', 'Savchenko', 'andrii.s@gmail.com', '+380951234321', [
        new Product('eggs',70),
        new Product('butter',95),
        new Product('juice',85),
        new Product('chicken',220)
    ]),
new Client(9, 'Kateryna', 'Romanenko', 'katya.rom@gmail.com', '+380731111111', [
        new Product('orange',75),
        new Product('juice',85),
        new Product('water',25),
        new Product('cola',55),
        new Product('potato',30),
        new Product('tomato',95)
    ]),
new Client(10, 'Vlad', 'Hrytsenko', 'vlad.h@gmail.com', '+380991234567', [
        new Product('garlic',70),
        new Product('salt',20),
        new Product('pepper',45),
        new Product('oil',110)
    ])
];
console.log(Clients);
console.log(sortClient = Clients.sort((Client1, Client2) => Client1.order.length - Client2.order.length));
