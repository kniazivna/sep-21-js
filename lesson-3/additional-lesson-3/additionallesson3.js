//1. Створити пустий масив та :
//a. заповнити його 50 парними числами за допомоги циклу.

/*let arrayOne =[];

for(let i = 0; i<100; i++){
    if (i % 2 ===0) {
        arrayOne.push(i)
    }
}
console.log(arrayOne);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//b. заповнити його 50 непарними числами за допомоги циклу.

/*let arrayTwo =[];

for(let i = 0; i<100; i++){
    if (i % 2 !==0) {
        arrayTwo.push(i)
    }
}
console.log(arrayTwo);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
/*
let arrayThree =[];
for (let i = 0; i < 20; i++) {
    let x=Math.floor(Math.random()*100);
    arrayThree.push(x)

}
console.log(arrayThree);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

/*let arrayFour =[];
for (let i = 0; i < 20; i++) {
    let x = Math.floor(Math.random() * (732 -8)) + 8;
    arrayFour.push(x)
 }
console.log(arrayFour);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Вивести за допомогою console.log кожен третій елемен
/*
let array = [25, 31, 44, 55, 24, 31, 10, 9, 3, 4,64,55,69,57, 63,22,14,23,12,16];
console.log(array);

for( let i=0; i<=array.length; i+=3){
    console.log(array[i]);
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

/*let array = [25, 31, 44, 55, 24, 31, 10, 9, 3, 4,64,55,69,57, 63,22,14,23,12,16];
console.log(array);

for (let i = 0; i<=array.length; i+=3){
    if (array[i]%2 === 0){
        console.log(array[i]);
    }
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

/*let arrayNew = [];
let array = [25, 31, 44, 55, 24, 31, 10, 9, 3, 4,64,55,69,57, 63,22,14,23,12,16];
console.log(array);

for (let i = 0; i<=array.length; i+=3){
    if (array[i]%2 === 0){
        console.log(array[i]);

        let z = array[i];
        arrayNew.push(z);
    }
}
console.log(arrayNew);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

/*let array =  [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] ;
console.log(array);
for ( let i = 0; i<=array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i-1]);
    }
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

/*let priceOfProduct = [100,250,50,168,120,345,188];
let generalPrice= priceOfProduct[0]+ priceOfProduct[1]+priceOfProduct[2]+priceOfProduct[3]+priceOfProduct[4]+priceOfProduct[5]+priceOfProduct[6];
console.log(generalPrice);
let averagePrice = generalPrice/priceOfProduct.length;
console.log(averagePrice);*/

//Думаю тут потрібна якась функція, щоб вручну не додавати, але не розумію яка, можете підказати, як правильно?

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
/*
let arrayFive =[];
let array = [];
for (let i = 0; i < 10; i++) {
    let x=Math.floor(Math.random()*10);
    array.push(x)
    let y = array[i]*5;
    arrayFive.push(y);

}
console.log(array);
console.log(arrayFive);
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
/*let arrayNumber = [];
let arrayMix = [24,10,31,"olena", "petro", "olga", 4 , true, false, 2018];
console.log(arrayMix);

for(let arr of arrayMix){
    if (typeof arr === "number" ) {
        console.log(arr);
        arrayNumber.push(arr);


    }
}
console.log(arrayNumber);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
//- Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]
/*let usersWithCities = [];
for (let userWithId of usersWithId) {
    for (let cityWithId of citiesWithId) {
        if (userWithId['id'] === cityWithId['user_id']) {
            userWithId['address'] = cityWithId;
            usersWithCities =usersWithId ;
        }//В мене питання address в консольці, якщо об'єкт врядок, показує, як останній рядок, а як відкриваєш масив, то як перший елемент масиву, але не знаю, як його туди поставити, вже голову зламала, що не роблю тільки помилки(((
    }
}
console.log(usersWithCities);*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

/*let arrayNumbers = [ 1, 2, 3, 5, 7, 9, 56, 8, 67, 88 ];
for (let i = 0; i<=arrayNumbers.length; i++){
    if(arrayNumbers[i]%2 === 0 && arrayNumbers[i] !== 0){
        console.log(arrayNumbers[i]);
    }
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

/*let arrayNum= [ 1, 2, 3, 5, 7, 9, 56, 8, 67, 88 ];
console.log(arrayNum);
let arrayNums = [];
for( i = 0; i< arrayNum.length; i++){
    arrayNums[i]=arrayNum[i];
}
console.log(arrayNums);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
/*
let letters = [ 'a', 'b', 'c'];
let  word = "";
for (let i = 0; i < letters.length; i++){
    word = word + letters[i];
};

console.log(word);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
/*let letters = [ 'a', 'b', 'c'];
let  word = "";
let i = 0;
while(i<letters.length){
    word = word + letters[i];
    i++;
}
console.log(word);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let letters = [ 'a', 'b', 'c'];
let  word = "";
for (letter of letters) {
    word = word + letter;
}

console.log(word);
