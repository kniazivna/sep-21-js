//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone){
    this.id = id,
    this.name = name,
    this.surname = surname,
    this.email = email,
    this.phone = phone
}

let users = [
new User(1, 'olena', 'kniaz', 'olenkaknyaz@gmail.com', 380937493281),
new User(2, 'petro', 'yakubliak', 'petro@gmail.com', 380937555551),
new User(3, 'olia', 'yakubliak', 'olia@gmail.com', 380937444481),
new User(4, 'igor', 'kniaz', 'iknyaz@gmail.com', 380937422281),
new User(5, 'oleksandra', 'kniaz', 'knyaz@gmail.com', 380937433381),
new User(6, 'maria', 'nanana', 'maria@gmail.com', 380937193281),
new User(7, 'galia', 'jhgfgh', 'olngghg@gmail.com', 380937223281),
new User(8, 'stepan', 'njjiig', 'jgjgjgg@gmail.com', 380937444481),
new User(9, 'bulka', 'fjhhhtuti', 'kfjghghg@gmail.com', 380937493111),
new User(10, 'lala', 'jfjgjgg', 'jgjghghg@gmail.com', 380937111181)
];

console.log(users);

//=====================================================================================================================

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(value => value.id % 2 === 0));

//=====================================================================================================================

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));

//=====================================================================================================================

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client extends User{
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order
    }
}
let clients = [
    new Client(1, 'olena', 'kniaz', 'olenkaknyaz@gmail.com', 380937493281, ['milk', 'butter','bread'] ),
    new Client(2, 'petro', 'yakubliak', 'petro@gmail.com', 380937555551, ['milk'] ),
    new Client(3, 'olia', 'yakubliak', 'olia@gmail.com', 380937444481, ['milk', 'butter','bread', 'fbfbdff', 'jfhfhfh']),
    new Client(4, 'igor', 'kniaz', 'iknyaz@gmail.com', 380937422281, ['milk', 'butter','bread', 'hfhfg', 'jfhfhgh', 'jfjfjghghg']),
    new Client(5, 'oleksandra', 'kniaz', 'knyaz@gmail.com', 380937433381, ['milk', 'butter','bread']),
    new Client(6, 'maria', 'nanana', 'maria@gmail.com', 380937193281, ['bread']),
    new Client(7, 'galia', 'jhgfgh', 'olngghg@gmail.com', 380937223281, ['butter','bread']),
    new Client(8, 'stepan', 'njjiig', 'jgjgjgg@gmail.com', 380937444481, ['milk', 'butter']),
    new Client(9, 'bulka', 'fjhhhtuti', 'kfjghghg@gmail.com', 380937493111, ['bread']),
    new Client(10, 'lala', 'jfjgjgg', 'jgjghghg@gmail.com', 380937111181, ['milk', 'butter','bread'])

];

console.log(clients);

//=====================================================================================================================

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((a, b) => a.order.length - b.order.length));