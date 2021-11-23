//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

/*function area (a,b){
    let result = a * b;
    return result;
}
//area (5, 6);// цей рядок можна не писати? навіть як ф-цію вставляємо в змінну(рядком нижче) це рахується виклик функції, я правильно розумію?
let result = area (8, 5);
console.log(result);
document.write('Площа прямокутника: '+ area (8, 5))*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка обчислює та повертає площу кола з радіусом r

/*
function circleArea (r){
const pi = 3.14;
let radius = r ** 2;
let result = pi * radius;
return result;
}
console.log(circleArea(10));
document.write("Площа круга: " + circleArea(10));*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

/*function cylinderArea(h, r) {
    let result = 2 * 3.14 * r * h;
    return result;
}
let result = cylinderArea(5, 10);
console.log(result);
document.write("Площа циліндру: " + cylinderArea(5, 10));*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка приймає масив та виводить кожен його елемент

/*let array = [2, 4, 6, 8, 10];

function createArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        document.write(array[i]);
    }
}

createArray(array);*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

/* function someText (text){
     document.write(`<p> ${text}</p>`);
 }
someText ('Some interesting text');*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*function someList(item) {
    document.write(`<ul>`);
    document.write(`<li>${item}</li>`);
    document.write(`<li>${item}</li>`);
    document.write(`<li>${item}</li>`);
    document.write(`</ul>`);
}

 someList('List item');*/

// Або ще у такий спосіб

/*function someList2(item2) {
    document.write(`<ul>`);
  for(let i = 0; i<3; i++){
      document.write(`<li>${item2}</li>`);
  }
    document.write(`</ul>`);
}

someList2('List item2');*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

/*
function someList3(item3, number) {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {

        document.write(`<li>${item3}</li>`);
    }
    document.write(`</ul>`);
}
someList3("Text of item 3", 3);*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

/*let array = [24,10,31,"olena", "petro", "olga", 4 , true, false, 2018];

function someList4(array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {

        document.write(`<li>${array[i]}</li>`);//
    }
    document.write(`</ul>`);
}

 someList4(array);*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

/*let listOfUsers = [ {id: 1, name: 'Olena', age: 33}, {id: 2, name: 'Petro', age: 30}, {id: 3, name: 'Olia', age: 2}];

function users(listOfUsers) {
    for( let user of listOfUsers){
        document.write(`<div>${user["id"]} ${user["name"]} ${user["age"]}</div>`)
    }
}
users(listOfUsers);*/

//або таким способом

let listOfUsers = [ {id: 1, name: 'Olena', age: 33}, {id: 2, name: 'Petro', age: 30}, {id: 3, name: 'Olia', age: 2}];

function users(listOfUsers) {
    for (let i = 0; i < listOfUsers.length; i++) {
        document.write(`<div>${listOfUsers[i]["id"]} ${listOfUsers[i]["name"]} ${listOfUsers[i]["age"]}</div>`);
    }
}
users(listOfUsers);

