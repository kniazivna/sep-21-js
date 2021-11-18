//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

/*
function minNumber(num1,num2,num3){
    if(num1 < num2 && num1 < num3){
        console.log(num1);
        document.write(num1);
    } else if (num2 < num1 && num2 < num3){
        console.log(num2);
        document.write(num2);
    } else if (num3 < num1 && num3 < num2){// уточніть тут може бути else if  чи краще else використовувати, і якщо останній варіант , то з умовою чи без?
        console.log(num3);
        document.write(num3);
    }
}
minNumber(8, 5, 2);*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

/*
function maxNumber(num4, num5, num6){
    if (num4 > num5 && num4 > num6){
        console.log(num4);
        document.write(num4);
    } else if(num5 > num4 && num5 > num6){
        console.log(num5);
        document.write(num5);
    } else if(num6 > num4 && num6 > num5){
        console.log(num6);
        document.write(num6);
    }
}
maxNumber(14, 27, 9);*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка повертає найбільше число з масиву

/*
let arrayMaxNumber = [25,15,33, 28, 2, 30];

function maxNumberOfArray(arrayMaxNumber){
  let maxNumber = arrayMaxNumber[0];
    for( let number of arrayMaxNumber){
        if(number > maxNumber){
            maxNumber = number;
            console.log(maxNumber);
            document.write(maxNumber);
        }
    }
    return maxNumber;
}
maxNumberOfArray(arrayMaxNumber);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка повертає найменьше число з масиву
/*

let arrayMinNumber = [25, 15, 33, 28, 2, 30];

function minNumberOfArray(arrayMinNumber) {
    let minNumber = arrayMinNumber[0];
    for (let number of arrayMinNumber) {
        if (number < minNumber) {
            minNumber = number;
            // console.log(minNumber);
            //document.write(minNumber);
        }
    }
    return minNumber;
}

//minNumberOfArray(arrayMinNumber);//Поясніть, будь ласка, чому, коли console.log(minNumber) і document.write(minNumber) прописую в функції і потім викликаю minNumberOfArray(arrayMinNumber); виводить 2 числа 15 і 2??? В попередній задачі вище таким чином працювало все?
console.log(minNumberOfArray(arrayMinNumber));//тут тільки таким чином вдалось вивести результат
document.write(minNumberOfArray(arrayMinNumber));*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

/*let arrayOfnums = [10, 20, 30];
function sumOfarrayOfnums(arrayOfnums){
    let sum = 0;
    for(num of arrayOfnums){
        sum = sum + num;
    }
    return sum;

}
console.log(sumOfarrayOfnums(arrayOfnums));*/

//Або ще такий варіант

/*
let arrayOfnums = [10, 20, 30];
function sumOfarrayOfnums(arrayOfnums){
    let sum = 0;
    for(i = 0; i<arrayOfnums.length; i++){
    sum = sum + arrayOfnums[i];
    }
    return sum;
}
console.log(sumOfarrayOfnums(arrayOfnums));*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

/*
let arrayOfnums = [10, 20, 30];
function averagenum(arrayOfnums){
    let sum = 0;
    let averagenumber = 0;// Спочатку, я тут прописувала замість цього виразу let  averagenumber = sum / arrayOfnums.length;, але в такому випадку результат був 0, не до кінця розумію, чому так?
    for( let num of arrayOfnums){
        sum = sum + num;
        averagenumber = sum / arrayOfnums.length;
    }
    return averagenumber;
}
console.log(averagenum(arrayOfnums));*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

/*function minMaxNumber(){
    console.log(arguments);
    let minNum = arguments[0];
    let maxNum = arguments[0];
    for( let argument of arguments){
        if(argument < minNum){
            minNum = argument;
        }
        if(argument > maxNum){
            maxNum = argument;
        }
    }
    //тут порядок має якесь значення?Бо як зверху було return , то console.log не показувались, як змінила на такий порядок, то все норм
    console.log(maxNum);
    return minNum;
}
document.write("minNumber ", minMaxNumber(10, 20, 80, 40, 5));*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка заповнює масив рандомними числами

/*function createRandomArray(size){
    let arrayRandom = [];
    for (let i = 0; i < size; i++) {
        arrayRandom[i] = Math.floor(Math.random()*100);
        arrayRandom.push(arrayRandom[i]);
    }
    return arrayRandom;
}
console.log(createRandomArray(5));*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

/*function createRandomArray2(size, limit){
    let arrayRandom2 = [];
    for (let i = 0; i < size; i++) {
        arrayRandom2[i] = Math.floor(Math.random() * (limit - 0));
        arrayRandom2.push(arrayRandom2[i]);
    }
    return arrayRandom2;
}
console.log(createRandomArray2(5, 10));*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arrayMain = [24,10,31];
function arrayReverse(arrayMain){
    let arrayNew = [];
    for( let i = arrayMain.length - 1; i >= 0; i--){
        arrayNew.push(arrayMain[i]);
    }
    return arrayNew;
}
console.log(arrayReverse(arrayMain));
