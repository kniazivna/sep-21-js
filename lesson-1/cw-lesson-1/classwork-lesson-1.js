//1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
/*let array = [
  Math.floor(Math.random()*10),
   Math.floor(Math.random()*10),
   Math.floor(Math.random()*10),
   Math.floor(Math.random()*10),
   Math.floor(Math.random()*10),
   Math.floor(Math.random()*10),
   Math.floor(Math.random()*10),
   Math.floor(Math.random()*10),
   Math.floor(Math.random()*10),
   Math.floor(Math.random()*10)// невпевнена щодо коми, потрібно ставити чи ні?
];
console.log(array);

let sum = array[0]+array[1]+array[2]+array[3]+array[4]+array[5]+array[6]+array[7]+array[8]+array[9];//тут, я не впевнена, можливо є якийсь коротший варіант, щоб це записати???
console.log(sum);*/

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
/*let book = {
  name: "Вбивство у 'Східному експресі'",
    pages: 500,
   genre: 'detective'
};

console.log(book);*/

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
 /*let book = {
 name: "Вбивство у 'Східному експресі'",
    pages: 500,
    genre: 'detective',
    author: "Агата Крісті"
};

console.log(book);*/

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
/*let books = [
    {
    name: "Вбивство у 'Східному експресі'",
    pages: 500,
    genre: 'detective',
    author: "Агата Крісті"
},
    {
        name: "Мелодія кави у тональності кардамону",
        pages: 328,
        genre: 'novel',
        author: "Наталія Гурницька"
    },
    {
        name: "Їсти, молитися, кохати",
        pages: 690,
        genre: 'novel',
        author: "Елізабет Гілберт"
    }
];

console.log(books[0]);
console.log(books[1]);
console.log(books[2]);*/

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
/*let height = 23;
let width = 10;
let s = height * width;

console.log(s);*/
//чи буде правильним такий запис?
//let s = console.log(height * width);

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
/*let heightC = 10;
let dC = 4;
const pi = 3.14;
//let v = pi * ((dC / 2)**2)*heightC;
//і ще такий варіант
let v = pi * Math.pow(dC / 2, 2) * heightC;
console.log(v);*/

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
/*let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2) );
console.log(k);*/





