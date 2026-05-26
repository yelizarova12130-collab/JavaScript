// Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User (id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email=email;
    this.phone=phone;
}

const users = [];
console.log(new User(1, 'Anna', 'Koval', 'anna.koval@gmail.com', '+380671112233'));
console.log(new User(2, 'Oleh', 'Bondarenko', 'oleh.bond@gmail.com', 'oleh.bond@gmail.com'));
console.log(new User(3, 'Iryna', 'Shevchenko', 'iryna.shev@gmail.com', '+380931112244'));
console.log(new User(4, 'Maksym', 'Tkachenko', 'maksym.tk@gmail.com', '+380661234890'));
console.log(new User(5, 'Dmytro', 'Lysenko', 'dmytro.lys@gmail.com', '+380631234567'));
console.log(new User(6, 'Olena', 'Kravets', 'olena.kr@gmail.com', '+380681119988'));
console.log(new User(7, 'Sofia', 'Melnyk', 'sofia.m@gmail.com', '+380971112299'));
console.log(new User(8, 'Andrii', 'Savchenko', 'andrii.s@gmail.com', '+380951234321'));
console.log(new User(9, 'Kateryna', 'Romanenko', 'katya.rom@gmail.com', '+380731111111'));
console.log(new User(10, 'Vlad', 'Hrytsenko', 'vlad.h@gmail.com', '+380991234567'));
console.log(users);
