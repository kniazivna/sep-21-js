//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

/*let hello = 'hello world';
console.log("String's length is " + hello.length);
document.write(`<h3>String's length is ${hello.length}</h3>`);

let lorem = 'lorem ipsum';
console.log("String's length is " + lorem.length);
document.write(`<h3>String's length is ${lorem.length}</h3>`);

let js = 'javascript is cool';
console.log("String's length is " + js.length);
document.write(`<h3>String's length is ${js.length}</h3>`);*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

/*let helloToUpperCase = 'hello world';
console.log(helloToUpperCase.toUpperCase());
document.write(`<h3>${helloToUpperCase.toUpperCase()}</h3>`);

let loremToUpperCase = 'lorem ipsum';
console.log(loremToUpperCase.toUpperCase());
document.write(`<h3>${loremToUpperCase.toUpperCase()}</h3>`);

let jsToUpperCase = 'javascript is cool';
console.log(jsToUpperCase.toUpperCase());
document.write(`<h3>${jsToUpperCase.toUpperCase()}</h3>`);*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

/*let helloLowerCase = 'HELLO WORLD';
console.log(helloLowerCase.toLowerCase());
document.write(`<h3>${helloLowerCase.toLowerCase()}</h3>`);

let loremToLowerCase = 'LOREM IPSUM';
console.log(loremToLowerCase.toLowerCase());
document.write(`<h3>${loremToLowerCase.toLowerCase()}</h3>`);

let jsToLowerCase = 'JAVASCRIPT IS COOL';
console.log(jsToLowerCase.toLowerCase());
document.write(`<h3>${jsToLowerCase.toLowerCase()}</h3>`);*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

/*let str = ' dirty string   ';
console.log(str.trim());
document.write(`<h3>${str.trim()}</h3>`);*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

/*let str = 'Каждый охотник желает знать';
let stringToarray = (str) => str.split(' ');

let arr = stringToarray(str);
document.write(arr);
console.log(arr);*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

/*
let str = 'Каждый охотник желает знать';
let delete_characters = (str, length) => str.substr(str, length);
document.writeln(delete_characters(str, 7));
console.log(delete_characters(str, 7));*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

/*let str = "HTML JavaScript PHP";
let insert_dash = (str) => str.replaceAll(" ", "-").toUpperCase();
document.write(insert_dash(str));
console.log(insert_dash(str));*/

/*
let str1 = "HTML JavaScript PHP";
console.log(str.split(' ').join('-').toUpperCase());*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

/*let str = "olena";
let firstToUppercase = (str) => str[0].toUpperCase(str).concat(str.slice(1));//не знаю чи можна так записувати?I чому якщо toUpperCase повертає string, то при використанні його до певного індексу повертається лише буква, яка знаходиться в тому індексі?(див. рядок 108)
console.log(firstToUppercase(str));*/

/*
let firstToUppercase2 = (str) => str[0].toUpperCase(str);
console.log(firstToUppercase2(str));*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

/*let capitalize = (str) => str.split(' ').map(item => item.charAt(0).toUpperCase().concat(item.slice(1))).join(" ")
document.write(capitalize('сьогодні дуже гарний день'));
console.log(capitalize('сьогодні дуже гарний день'));*/






/*
let arr = ["nvfjkbghjf", "jkfhdg", "bfdjgf"];
let map = arr.map(item => item.charAt(0).toUpperCase().concat(item.slice(1))).join(" ");
console.log(map);*/
