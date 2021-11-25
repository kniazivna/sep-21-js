//- Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
/*
let validator = (name, symbol) => {
    let arrayOfNames = [];
    let a = name.split(symbol);
    a.forEach((item) => {
            if (item) {
                arrayOfNames.push(item);
            }
        }
    )


    return arrayOfNames.join(" ");
}
console.log(validator('Harry..Potter', "."));*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

/*
let createRandomNumbersArray = (length) => {
    let arrayOfNumbers = [];
    for(let i = 0; i < length; i++){
        createRandomNumbersArray[i] = Math.floor(Math.random()*100);
        arrayOfNumbers.push(createRandomNumbersArray[i]);
    }
    return arrayOfNumbers;
}

//для 24  і 25 рядків завжди будуть генеруватись різні масиви?навіть при однаковій довжині? Чи то я щось тут не так зробила?
console.log(createRandomNumbersArray(10));
document.write(`<div>${createRandomNumbersArray(50)}</div>`);*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

/*
let createRandomNumbersArray = (length) => {
    let arrayOfNumbers = [];
    for(let i = 0; i < length; i++){
        arrayOfNumbers.push( Math.floor(Math.random()*100));
    }
    return arrayOfNumbers.sort((a, b) => b - a);
}
console.log(createRandomNumbersArray(10));
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

/*let createRandomNumbersArray = (length) => {
    let arrayOfNumbers = [];
    for(let i = 0; i < length; i++){
        arrayOfNumbers.push( Math.floor(Math.random()*100));
    }
    return arrayOfNumbers.filter((value) => value % 2 ===0);
}
console.log(createRandomNumbersArray(10));*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

//Уточніть, чи правильно розумію завдання

/*let createRandomNumbersArray = (length) => {
    let arrayOfNumbers = [];
    for(let i = 0; i < length; i++){
        arrayOfNumbers.push( Math.floor(Math.random()*100));
    }
    return arrayOfNumbers.map((value) => value + "");
}
console.log(createRandomNumbersArray(10));*/

/*let arr = [10, 20, 30];
let createStringArray = arr.map((number) => number + "");
console.log(createStringArray);*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

/*let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
       return arr.sort((a, b) => b - a);
    }
}

console.log(sortNums([1, 5, 3, 2, 4], "descending"));*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- є масив
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];*/
//  -- відсортувати його за спаданням за monthDuration

/*let CreateMonthDuration = coursesAndDurationArray.sort((a, b) =>
    b.monthDuration - a.monthDuration);
console.log(CreateMonthDuration);*/
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
/*
console.log(coursesAndDurationArray.filter((value) => value.monthDuration > 5));*/



