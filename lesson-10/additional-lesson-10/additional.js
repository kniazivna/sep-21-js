//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// let divWrap = document.createElement('div');
// divWrap.style.margin = '10px';
// divWrap.style.padding = '10px';
// divWrap.id = 'wrapper';
// divWrap.classList.add = 'wrapper';
//
// let div1 = document.createElement('div');
// div1.style.margin = '10px';
// div1.style.padding = '10px';
// div1.style.width = '200px';
// div1.style.height = '200px';
// div1.style.backgroundColor = 'yellow';
// div1.id = 'div1';
// div1.classList.add = 'div1 abc';
//
// let p = document.createElement('p');
// p.id = 'p';
// p.classList.add = 'text abc';
// p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, nostrum possimus? Labore quia tenetur voluptatibus.';
//
// let div2 = document.createElement('div');
// div2.style.margin = '10px';
// div2.style.padding = '10px';
// div2.style.width = '400px';
// div2.style.height = '300px';
// div2.style.backgroundColor = 'green';
// div2.id = 'div2';
// div2.classList.add = 'div1 abc def';
//
// document.body.appendChild(divWrap);
// divWrap.append(div1, p, div2);

// document.body.onclick = function (e) {
//     // if (e.which == 1) { }// я хотіла перевірити таким чином, чи натиснули ліву клавішу, але мені чомусь which перекреслює і не можу зробити таку перевірку
//     //уточніть чи правильно я розумію oncontextmenu це права клавіша миші, а onclick - це само собою розуміється, що ліва клавіша?
//     console.log("Назва тегу: " + e.target.localName + ",\nСписок класів: " + e.target.classList['add'] + ",\nCписок id: "
//         + e.target.id + ",\nРозмір: " + e.target.clientHeight + "*" + e.target.clientWidth);
//     //невпевнена, що висоту і ширину правильно вибрала, бо там було, ще декілька параметрів, які їх показують
// }

//=====================================================================================================================

//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

/*let popup = document.createElement('div');
popup.style.margin = "0 auto";
popup.style.padding = "10px";
popup.style.width = '400px';
popup.style.height = '300px';
popup.style.backgroundColor = 'silver';
popup.style.color = 'black';
popup.style.display = 'none';
popup.style.position = 'absolute';
popup.style.right = '100px';
popup.style.top = '100px';


let divWrap = document.createElement('div');
divWrap.style.margin = '10px';
divWrap.style.padding = '10px';
divWrap.id = 'wrapper';
divWrap.classList.add = 'wrapper';

let div1 = document.createElement('div');
div1.style.margin = '10px';
div1.style.padding = '10px';
div1.style.width = '200px';
div1.style.height = '200px';
div1.style.backgroundColor = 'yellow';
div1.id = 'div1';
div1.classList.add = 'div1 abc';

let p = document.createElement('p');
p.id = 'p';
p.classList.add = 'text abc';
p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, nostrum possimus? Labore quia tenetur voluptatibus.';

let div2 = document.createElement('div');
div2.style.margin = '10px';
div2.style.padding = '10px';
div2.style.width = '400px';
div2.style.height = '300px';
div2.style.backgroundColor = 'green';
div2.id = 'div2';
div2.classList.add = 'div1 abc def';

document.body.appendChild(divWrap);
divWrap.append(popup, div1, p, div2);


document.body.onclick = function (e) {
    popup.style.display = 'block';
    popup.innerText = "Назва тегу: " + e.target.localName + ",\nСписок класів: " + e.target.classList['add'] + ",\nCписок id: " + e.target.id + ",\nРозмір: " + e.target.clientHeight + "*" + e.target.clientWidth;
}*/
// тут не дуже впевнена, бо не всію ще робити спливаючі вікна, можливо будуть паоади, як краще це зробити)))

// можливо ще такий варіант має право на життя))))
//
// document.body.onclick = function (e){
//
//     alert("Назва тегу: " + e.target.localName +",\nСписок класів: " + e.target.classList['add'] + ",\nCписок id: "
//         + e.target.id + ",\nРозмір: " + e.target.clientHeight + "*" + e.target.clientWidth);
// }

//=====================================================================================================================

//-- взять массив пользователей

let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];




//     - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как
//     вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let form = document.createElement("form");
let input1 = document.createElement("input");
input1.type = 'checkbox';
input1.name = 'input1';

document.body.appendChild(form);
form.append(input1);
