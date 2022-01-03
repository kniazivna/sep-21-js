//В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули


let usersContainerDiv = document.getElementsByClassName("usersContainer")[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersArray => {

        for (const user of usersArray) {

            let divUser = document.createElement('div');
            divUser.className = 'user';

            let idBlock = document.createElement('p');
            idBlock.className = 'id';
            idBlock.innerText = `id: ${user.id}`;

            let nameBlock = document.createElement('p');
            nameBlock.className = 'name';
            nameBlock.innerText = `name: ${user.name}`;

            let userDetailsButton = document.createElement('button');
            userDetailsButton.className = 'userDetailsButton';
            userDetailsButton.innerText = 'User details'
            userDetailsButton.onclick = function () {
                //location.href = 'user-details.html?data=' + JSON.stringify(user);
                location.href = 'user-details.html?id=' + user.id;

            }


            usersContainerDiv.appendChild(divUser);
            divUser.append(idBlock, nameBlock, userDetailsButton);


        }
    });