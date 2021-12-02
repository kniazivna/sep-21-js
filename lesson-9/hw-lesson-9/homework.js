//Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.backgroundColor = "purple";
div.style.color = "pink";
div.style.fontSize = "20px";
div.innerText = "lesson - 9"
document.body.appendChild(div);
let divClone = div.cloneNode(true);
document.body.appendChild(divClone);

//=====================================================================================================================

//- Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let menu = ['Main', 'Products', 'About us', 'Contacts'];
let liContainer = document.getElementsByClassName('menu')[0];
for (const item of menu) {
    let liElement = document.createElement('li');
    liElement.innerText = `${item}`;
   // let liContainer = document.getElementsByClassName('menu')[0];//уточніть, будь ласка, цей рядок тут краще прописувати, чи вище перед циклом?
    liContainer.appendChild(liElement);
}

//=====================================================================================================================

//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (let course of coursesAndDurationArray) {
    let block = document.createElement('div');
    block.innerText = `${course.title} - ${course.monthDuration}`;
    document.body.appendChild(block);
}

//=====================================================================================================================

//- Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.


for (let course of coursesAndDurationArray) {
    let divBlock = document.createElement('div');
    divBlock.classList.add('item');
    let title = document.createElement('h1');
    title.classList.add('heading');
    title.innerText = `${course.title}`
    let description = document.createElement('p');
    description.classList.add('description');
    description.innerText = `${course.monthDuration}`
    document.body.appendChild(divBlock);
    divBlock.appendChild(title);
    divBlock.appendChild(description);
}