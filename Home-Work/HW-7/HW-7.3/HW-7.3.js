// Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email=email;
    this.phone=phone;
}

const users = [
    new User(8, 'Anna', 'Koval', 'anna.koval@gmail.com', '+380671112233'),
    new User(3, 'Oleh', 'Bondarenko', 'oleh.bond@gmail.com', 'oleh.bond@gmail.com'),
    new User(10, 'Iryna', 'Shevchenko', 'iryna.shev@gmail.com', '+380931112244'),
    new User(5, 'Maksym', 'Tkachenko', 'maksym.tk@gmail.com', '+380661234890'),
    new User(6, 'Dmytro', 'Lysenko', 'dmytro.lys@gmail.com', '+380631234567'),
    new User(1, 'Olena', 'Kravets', 'olena.kr@gmail.com', '+380681119988'),
    new User(7, 'Sofia', 'Melnyk', 'sofia.m@gmail.com', '+380971112299'),
    new User(2, 'Andrii', 'Savchenko', 'andrii.s@gmail.com', '+380951234321'),
    new User(9, 'Kateryna', 'Romanenko', 'katya.rom@gmail.com', '+380731111111'),
    new User(4, 'Vlad', 'Hrytsenko', 'vlad.h@gmail.com', '+380991234567')
];

console.log( users.sort((user1, user2) => user1.id - user2.id));

