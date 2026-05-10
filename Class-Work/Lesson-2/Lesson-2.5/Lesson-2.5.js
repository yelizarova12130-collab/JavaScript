let user = {
    id: 1,
    name: 'John'
}
// якщо хочемо додати характеристуку але це не наш обьєкт

user.age = 31;
user['status']=false;
console.log(user);


//Чи можна видалити якусь певну характеристику

delete user.id;
console.log(user);
