//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arrayOfNumbers = [ 25, 65, 87, 92, 55];
// console.log (arrayOfNumbers);
//
// let arrayOfStrings = ["olena", "kniaz", "student", "mother", "wife"];
// console.log (arrayOfStrings);
//
// let arrayOfMix = ["olena", "kniaz", "student", "mother", "wife", 25, 65, 87, 92, 55, true, true, false, true, false];
// console.log (arrayOfMix);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = "olena";
// array[1] = "kniaz";
// array[2] = "2";
// array[3] = true;
// array[4] = 24;
// array[5] = 31;
// array[6] = false;
// array[7] = 10;
// array[8] = "olha";
// array[9] = "petro";
// array[10] = 4;
// array[11] = 17;
// array[12] = 7;
// array[13] = 3;
// array[14] = "student";
// array[15] = "wife";
// array[16] = "love";
// array[17] = true;
// array[18] = false;
// array[19] = 11;
// console.log(array);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (i=0;i<10;i++){
//     document.write("<div>jhdgkhgtjhotjhotp</div>");
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (i=1;i<11;i++){
//    document.write(`<div>jhdgkhgtjhotjhotp ${i}</div>`);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// i = 0;
// while (i<20){
//     document.write("<h1>Title</h1>");
//     i++;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// i = 1;
// while (i<21){
//     document.write(`<h1>Title ${i}</h1>`);
//     i++;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//  let array = [Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100)]
// console.log(array);
//  for (i = 0; i<array.length; i++){
//      console.log(array[i]);
//  }

//i ще такий варіант, не до кінця зрозуміла, який варіант правильно використовувати, думаю, що той, який нижче , але підкажіть, будь ласка, як правильно.( решту подібних завдань теж роблю в 2 варіантахЇ

// let array = [Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100), Math.floor(Math.random()*100)]
// console.log(array);
// for(let arr of array){
//     console.log(arr);
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let names = ["olena", "petro", "olha", "oksana", "igor", "oleksandra", "maria", "sergij", "bohdan", "halyna"];
// console.log(names);
// for (i=0; i<10;i++){
//     console.log(names[i]);
// }

// 2 варіант
// let names = ["olena", "petro", "olha", "oksana", "igor", "oleksandra", "maria", "sergij", "bohdan", "halyna"];
//  console.log(names);
// for (let name of names){
//     console.log(name);
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arraymix = [24,10,31,"olena", "petro", "olga", 4 , true, false, 2018];
// console.log(arraymix);
// i=0;
// while(i<10){
//     console.log(arraymix[i]);
//     i++;
// }

// 2 варіант
// let arraymix = [24,10,31,"olena", "petro", "olga", 4 , true, false, 2018];
//  console.log(arraymix);
//  for(let arr of arraymix){
//      console.log(arr);
//  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arraymix = [24,10,31,"olena", "petro", "olga", 4 , true, false, 2018];
//  console.log(arraymix);
//  for (i=0; i<arraymix.length; i++){
//      if(typeof arraymix[i] === "boolean"){
//          console.log(arraymix[i]);
//      }
//
//  }

// 2 варіант
// let arraymix = [24,10,31,"olena", "petro", "olga", 4 , true, false, 2018];
//  console.log(arraymix);
//  for(let arr of arraymix){
//      if (typeof arr === "boolean") {
//          console.log(arr);
//      }
//
//  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 //- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arraymix = [24,10,31,"olena", "petro", "olga", 4 , true, false, 2018];
// console.log(arraymix);
// for(let arr of arraymix){
//     if (typeof arr === "number" ) {
//         console.log(arr);
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arraymix = [24,10,31,"olena", "petro", "olga", 4 , true, false, 2018];
//  console.log(arraymix);
//
//  for(let arr of arraymix){
//      if(typeof arr === "string"){
//          console.log(arr);
//      }
//  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

/*let array = [];
array[0] = true;
array[1] = 33;
array[2] = 'night';
array[3] = 'homework';
array[4] = 11;
array[5] = true;
array[6] = 'interesting';
array[7] = 30;
array[8] = false;
array[9] = 2;
console.log(array);

for (let arr of array){
    console.log(arr);
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

/*for(i=0; i<10; i++){
    console.log( `step number ${i}`);//не впевнена, що правильно зрозуміла умову, якщо неправильно, то чекаю на зауваження
    document.write(`<h3> Step number ${i}</h3>`);
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

/*for (i = 0; i<100; i++){
    console.log(`step number ${i+1}`);
    document.write(`<p>Step number ${i+1}</p>`);
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

/*for (i = 0; i < 100; i += 2) {//що тут роблю не так? чому warning в жовтому трикутнику є?пробувала і i=i+2 крок записувати, така сама ситуація(
    console.log(`Step number ${i}`);
    document.write(`<div> Step number ${i}</div>`);//тут правильно № кроку виводжу, чимало бути 1,2,3....50?
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
/*
 for ( i = 0; i<100; i++){
if(i%2===0){//це і наступне завдання, не впевнена, чи це правильно
    console.log(i);
    document.write(`<div>${i}</div>`);
}
}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

/*for ( i = 0; i<100; i++){
    if (i%2!==0){//це правильне рішення, чи має бути інший варіант?
        console.log(i);
        document.write(`<div>${i}</div>`);
    }
}*/
