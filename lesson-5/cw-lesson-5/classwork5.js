//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNumber = (a, b, c) => {
    if(a < b && a < c){
        console.log("Min number is a = " + a);
        document.write("Min number is a = " + a);
    } else if(b < a && b < c){
        console.log("Min number is b = " + b);
        document.write("Min number is b = " + b);
    }else{
        console.log( "Min number is c = " + c);
    document.write("Min number is c = " + c);
    }

}
minNumber(33, 30, 2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

/*let maxNumber = (a, b, c) => {
    if(a > b && a > c){
        console.log("Max number is a = " + a);
        document.write(`<p>Max number is a =  ${a}</p>`);
    } else if(b > a && b > c){
        console.log("Max number is b = " + b);
        document.write(`<p>Max number is b =  ${b}</p>`);
    }else{
        console.log( "Max number is c = " + c);
        document.write(`<p>Max number is c =  ${c}</p>`);
    }

}
maxNumber(33, 30, 2);*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка повертає найбільше число з масиву

let maxNumOfArray = (array) => {
    let maxNumber = array[0];
    for(let number of array){
        if(number > maxNumber){
          maxNumber = number;
        }
    }
    return maxNumber;
}

console.log(maxNumOfArray([50, 20, 30, 100, 500, 12, 37, 2]));
document.write(`<div> Max number of array ${maxNumOfArray([50, 20, 30, 100, 500, 12, 37, 2])}</div>`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка повертає найменьше число з масиву

let minNumOfArray = (array) => {
    let minNumber = array[0];
    for(let number of array){
        if(number < minNumber){
            minNumber = number;
        }
    }
    return minNumber;
}

console.log(minNumOfArray([50, 2, 30, 0, 500, -12, 37, 20]));
document.write(`<div> Min number of array ${minNumOfArray([50, 2, 30, 0, 500, -12, 37, 20])}</div>`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumOfNums = (arr) => {
    let num = 0;
    for (number of arr) {
        num = num + number;
    }
    return num;
}
console.log("Sum of numbers = " + sumOfNums([10, 20, 30, 40, 50, 100, 150]));
document.write(`<h2>Sum of numbers = ${sumOfNums([10, 20, 30, 40, 50, 100, 150])}</h2>`)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let averageFn = (arr) =>{
    let sum = 0;
    for(num of arr){
        sum = sum + num;
    }
    return  sum / arr.length;
}

console.log(averageFn([10, 20, 30, 40, 50, 100, 150]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let maxMinNumFn =(array) =>{
    let max = array[0];
    let min = array[0];
    for(num of array){
        if(num > max){
            max = num;
        }
        if(num < min){
            min = num;
        }
    }
    console.log("Max number is " +  max);
    return min;
}

document.write(`<h3> Min number is ${maxMinNumFn([40, 20, 30, 10, 50, 100, 150])}</h3>`);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let randomNumbersFn = (length) =>{
    let arr = [];
    for(let i = 0; i < length; i++){
        arr.push(Math.round(Math.random()*100));
    }
    return arr;
}
console.log(randomNumbersFn(5));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomNumsFn = (length, limit) => {
    let arr = [];
    for(let i = 0; i < length; i++){
        arr.push(Math.round(Math.random()*limit));
    }
    return arr;
}
console.log(randomNumsFn(10, 1000));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverseArrayFn = (arr) => {
    let revArr = [];
    for( let i = arr.length - 1; i>=0; i--){
        revArr.push(arr[i]);
    }
    return revArr;
}
console.log(reverseArrayFn([10, -3, 0, 20, 500, 1, 24, 10, 31, 30]));

// ще такий варіант

let reverseArrayFn2 = (arr) => {
    let revArr = [];
    for( let i = arr.length - 1, j =0; i>=0; i--, j++){
        revArr[j] = arr[i];
    }
    return revArr;
}
console.log(reverseArrayFn2([10, -3, 0, 20, 500, 1, 24, 10, 31, 30]));



