//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

/*let div = document.createElement('div');
div.classList.add('box');
let form1 = document.createElement('form');
form1.id = 'form1';

let input1 = document.createElement('input');
input1.setAttribute('name', 'username');
input1.setAttribute('value', 'Enter your name');
input1.onfocus = () => input1.value = '';

let input2 = document.createElement('input');
input2.setAttribute('name', 'age');
input2.setAttribute('value', 'Enter your age');
input2.onfocus = () => input2.value = '';

let form2 = document.createElement('form');
form2.id = 'form2';

let input11 = document.createElement('input');
input11.setAttribute('name', 'phone');
input11.setAttribute('value', 'Enter your phone');
input11.onfocus = () => input11.value = '';

let input22 = document.createElement('input');
input22.setAttribute('name', 'email');
input22.setAttribute('value', 'Enter your email');
input22.onfocus = () => input22.value = '';

let button = document.createElement('button');
button.innerText = 'Submit';
button.onclick = () => console.log(`"Name: " ${input1.value}\n"Age: " ${input1.value}\n"Phone: " ${input1.value}\n"Email: " ${input1.value}`);


document.body.appendChild(div);
div.appendChild(form1);
form1.appendChild(input1);
form1.appendChild(input2);
div.appendChild(form2);
form2.appendChild(input11);
form2.appendChild(input22);
div.appendChild(button);*/

//=====================================================================================================================

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let inputRows = document.createElement('input');
// inputRows.setAttribute('name', 'rows');
// inputRows.setAttribute('value', 'Введіть кількість рядків таблиці');
// inputRows.onfocus = () => inputRows.value = '';
//
// let inputCol = document.createElement('input');
// inputCol.setAttribute('name', 'rows');
// inputCol.setAttribute('value', 'Введіть кількість стовпців таблиці');
// inputCol.onfocus = () => inputCol.value = '';
//
// let inputText = document.createElement('input');
// inputText.setAttribute('name', 'text');
// inputText.setAttribute('value', 'Введіть текст');
// inputText.onfocus = () => inputText.value = '';
//
// let tableButton = document.createElement('button');
// tableButton.innerText = "Створити таблицю";
//
// document.body.append(inputRows, inputCol, inputText, tableButton);
//
//
// tableButton.onclick = function () {
//     let tr = inputRows.value;
//     let td = inputCol.value;
//     let text = inputText.value;
//
//         let table = document.createElement('table');
//         table.style.border = '2px solid yellow';
//         document.body.appendChild(table);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid silver';
//                 td.innerText = `${text}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
// }

//====================================================================================================================

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
//
// let words = ['злюка', 'бурчун', 'зануда'];
// let textInput = document.createElement("input");
// textInput.setAttribute('value', 'Enter word');
// textInput.setAttribute('type', 'text');
// textInput.onfocus = () => textInput.value = '';
// let button = document.createElement("button");
// button.innerText = 'Check the word';
// document.body.append(textInput, button);
//
//
// button.onclick = function () {
//     let chekWord = textInput.value;
//     for (let word of words) {
//         if (word === chekWord) {
//             alert('You are very rude');
//             textInput.value = '';
//             return;
//         }
//     }
//     if (chekWord) {
//         alert('You are polite');
//         textInput.value = '';
//     }
// };

//=====================================================================================================================

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

let words2 = ['злюка', 'бурчун', 'зануда'];
let textInput2 = document.createElement("input");
textInput2.setAttribute('value', 'Enter sentense');
textInput2.setAttribute('type', 'text');
textInput2.onfocus = () => textInput2.value = '';
let button2 = document.createElement("button");
button2.innerText = 'Check the word';
document.body.append(textInput2, button2)

button2.onclick = function () {
    let sentense = textInput2.value;
    let sentenseArray = sentense.split(' ');
    console.log(sentenseArray);
    for (let w of sentenseArray) {
        for (let word of words2) {
            if (w === word) {
                alert('You are very rude');
                sentense = '';
                return;
            }
        }
    }
    if(sentense){
        alert('You are polite');
        textInput2.value = '';
    }

}
