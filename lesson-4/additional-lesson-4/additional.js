//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
/*function sumOfArguments() {
    if (arguments.length === 1) {
        console.log(arguments[0]);
    }
    if(arguments.length > 1){
        console.log(arguments[0] + arguments[1]);
    }
    return arguments.length;
}
sumOfArguments(2, "Olia");*/

//або таким чином

/*function sumOfArguments() {

 return    arguments.length === 2 ? arguments[0] + arguments[1] : arguments[0];
}
console.log(sumOfArguments(20, 10));*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

/*let arrayFirst = [10, 20, 30, 40,50];
let arraySecond = [100, 200, 300, 400, 500];
function mixOfArray(arrayFirst, arraySecond){
    let arrayMix = [];
    let sum;
    for( let i = 0; i <arrayFirst.length; i++){
        for (let j = 0; j < arraySecond.length; j++){
        if (i === j){
            sum = arrayFirst[i] + arraySecond[j];
            arrayMix.push(sum);
        }
    }
    }
    return arrayMix;
}
console.log(mixOfArray(arrayFirst, arraySecond));*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

/*
let arrayOfObjects =  [{name: "Olena", age: 33}, {name: "Petro", age: 30}, {name: "Olia", age: 2}];

function keysOfObjects(arrayOfObjects){
    let arrayKeysOfObjects = [];
    for(let user of arrayOfObjects){
        for(let key in user){
            arrayKeysOfObjects.push(key);
        }
    }
    return arrayKeysOfObjects;
}
console.log (keysOfObjects(arrayOfObjects));*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

/*
let arrayOfObjects =  [{name: "Olena", age: 33}, {name: "Petro", age: 30}, {name: "Olia", age: 2}];

function valuesOfObjects(arrayOfObjects){
    let arrayValuesOfObjects = [];
    for(let user of arrayOfObjects){
        for(let value in user){
            arrayValuesOfObjects.push(user[value]);
        }
    }
    return arrayValuesOfObjects;
}
console.log (valuesOfObjects(arrayOfObjects));*/



