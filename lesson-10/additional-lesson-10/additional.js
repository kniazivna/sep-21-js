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
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];


//     - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как
//     вместе так и по отдельности.
// Данные выводить в документ
// let form = document.createElement("form");
// form.id = 'form';
// form.name = 'form';
// form.action = "/someaction";
//
//
// let input1 = document.createElement("input");
// input1.type = 'checkbox';
// input1.name = 'status';
//
//
// let input2 = document.createElement("input");
// input2.type = 'checkbox';
// input2.name = 'age';
//
// let input3 = document.createElement("input");
// input3.type = 'checkbox';
// input3.name = 'city';
//
// let buttonSub = document.createElement("button");
// buttonSub.innerText = "Submit";
//
//
// document.body.append(form, buttonSub);
// form.append(input1, input2, input3);
//
// document.forms.onsubmit = function (e) {
//     e.preventDefault();
// }

// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// form.status.onclick = function (){
//     if(this.checked){
//          console.log(usersWithAddress.filter(value => !value.status));
//     }else{
//         console.log(usersWithAddress);
//     }
// };
//
// // 2й - оставляет старше 29 лет включительно
// form.age.onclick = function (){
//     if(this.checked){
//         console.log(usersWithAddress.filter(value => value.age > 0 && value.age >= 29));
//     }else{
//         console.log(usersWithAddress);
//     }
// };
// // 3й - оставляет тех у кого город киев
// form.city.onclick = function (){
//         if(this.checked){
//             console.log(usersWithAddress.filter(value => value.address.city === 'Kyiv'));
//         }else{
//             console.log(usersWithAddress);
//         }
//     };
//
// let contsiner = document.createElement('div');
//
//
// for (const us of usersWithAddress) {
//     let user = document.createElement('div');
//     user.style.border = '3px solid yellow';
//     //
//     // console.log(us.status);
//     contsiner.appendChild(user);
//
//     for (item in us) {
//         let list = document.createElement('ul');
//         list.style.backgroundColor = 'silver';
//         user.appendChild(list);
//         let info = document.createElement('li');
//         info.style.listStyle = 'none';
//         list.appendChild(info);
//         if (typeof us[item] !== "object") {
//             info.innerText = `${item} : ${us[item]}`;
//         } else {
//             info.innerText = `${item}`;
//             let sublist = document.createElement('ul');
//             info.appendChild(sublist);
//             for (element in us[item]) {
//                 let address = document.createElement('li');
//                 address.innerText = `${element} : ${us[item][element]}`
//                 sublist.appendChild(address);
//             }
//         }
//     }
// }
// document.body.appendChild(contsiner);


//тут я застрягла, думаю, що не з тої,що треба сторони підходжу, бо нижче зробила фільтр, який працює, але виводить в
// консоль, а от як правильно в документ то діло вивести не зрозумію ніяк, всі мої спроби невдалі(((
//можливо підкажете в яку сторону рухатись))))

// function filter() {
// //console.log(usersWithAddress);
//     buttonSub.onclick = function () {
//         if (form.status.checked && form.age.checked && form.city.checked) {
//             console.log(usersWithAddress.filter(value => !value.status && (value.age > 0 && value.age >= 29) && (value.address.city === 'Kyiv')));
//         } else if (form.status.checked && form.age.checked) {
//             console.log(usersWithAddress.filter(value => !value.status && (value.age > 0 && value.age >= 29)));
//         } else if (form.status.checked && form.city.checked) {
//             console.log(usersWithAddress.filter(value => !value.status && (value.address.city === 'Kyiv')));
//         } else if (form.age.checked && form.city.checked) {
//             console.log(usersWithAddress.filter(value => (value.age > 0 && value.age >= 29) && (value.address.city === 'Kyiv')));
//         } else if (form.status.checked) {
//             console.log(usersWithAddress.filter(value => !value.status));
//         } else if (form.age.checked) {
//             console.log(usersWithAddress.filter(value => value.age > 0 && value.age >= 29));
//         } else if (form.city.checked) {
//             console.log(usersWithAddress.filter(value => value.address.city === 'Kyiv'));
//         }
//     }
// }
// filter();


// user.classList.add('hidden');

//===================================================================================================================
//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let imgs = document.getElementsByTagName('img');

let i = 0;

function slider() {
    for (let img of imgs) {
        img.classList.add('hide');
        imgs[i].classList.remove('hide');
    }
}

prev.addEventListener('click', () => {
    if (i === 0) {
        i = imgs.length - 1;
    } else i--;
    slider();
})
next.addEventListener('click', () => {
    if (i + 1 === imgs.length) {
        i = 0;
    } else i++;
    slider();
})
// Але щоб все працювало в мене в html  у всіх крім 1 картинки клас hide теж прописаний, маю здогадки, що так не має бути))))
//але іншим варіантом мені не вдається зробити, щоб слайдер працював(










