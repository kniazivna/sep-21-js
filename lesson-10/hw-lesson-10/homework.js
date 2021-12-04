//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let text = document.getElementById('text');
let button = document.getElementsByTagName('button')[0];
button.onclick = function (){
    text.style.display = 'none';
};

//=====================================================================================================================

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let hideButton = document.getElementById('hideButton');
hideButton.onclick = function (){
    hideButton.style.display = 'none';
}

//=====================================================================================================================

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.getElementById('age').onclick = function () {
    let enterYourAge = document.getElementById('enterYourAge').value;
    if (enterYourAge < 18) {
        document.write('You are younger than 18');
    }  else{
        document.write('You are elder than 18');
    }
}

//====================================================================================================================

// - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementById('menu');
let menuList = document.getElementById('menuList');
menu.onclick = function (){
    menuList.classList.toggle("hide");
}

//====================================================================================================================

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let commentsArray = [
    {userName : '1', userText:'lorem ipsum dolo sit ameti'},
    {userName : '2', userText:'lorem ipsum dolo sit ameti'},
    {userName : '3', userText:'lorem ipsum dolo sit ameti'},
    {userName : '4', userText:'lorem ipsum dolo sit ameti'},
    {userName : '5', userText:'lorem ipsum dolo sit ameti'},
    {userName : '6', userText:'lorem ipsum dolo sit ameti'},
    {userName : '7', userText:'lorem ipsum dolo sit ameti'},
    {userName : '8', userText:'lorem ipsum dolo sit ameti'},
    {userName : '9', userText:'lorem ipsum dolo sit ameti'},
    {userName : '10', userText:'lorem ipsum dolo sit ameti'}
];

let comments = document.createElement('div');
for(let comment of commentsArray){
    let comm = document.createElement('div');
    let user = document.createElement('h4');
    user.innerText = comment.userName;
    let text = document.createElement('p');
    text.innerText = comment.userText;
    let button = document.createElement('button');
    button.innerText = 'Hide comment';
    button.style.cursor = 'pointer';
    button.onclick = () => text.classList.toggle('hideComment');
        //toggle думаю тут краще використати, а можна ще так
        //text.classList.add('hideComment');


    comments.appendChild(comm);
    comm.appendChild(user);
    comm.appendChild(text);
    comm.appendChild(button);
}
document.body.appendChild(comments);