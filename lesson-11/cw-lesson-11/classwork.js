//є масив -

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


let key = 'listOfFavourites';
let favourites = [];
localStorage.setItem(key, JSON.stringify(favourites));
for(user of users){
    let block = document.createElement('div');
    block.innerText = `Name: ${user.name} Age: ${user.age} Status: ${user.status}`;
    block.style.border = '2px solid green';
    let button = document.createElement('button');
    button.innerText = 'Add to favorites';
button.onclick = () => {
    favourites = JSON.parse(localStorage.getItem(key));
    favourites.push(user);
    localStorage.setItem(key, JSON.stringify(favourites));
    }

    document.body.append(block, button);
}






