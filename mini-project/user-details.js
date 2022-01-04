//На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

// let jsonUseObject = url.searchParams.get('data');
// console.log(JSON.parse(jsonUseObject));
// document.write(jsonUseObject);


//console.log(location.href);
let url = new URL(location.href);
//console.log(url.search);
let idOfUser = url.searchParams.get('id');
//console.log(idOfUser);

let userDetailsContainer = document.getElementsByClassName('usersDetails')[0];

fetch('https://jsonplaceholder.typicode.com/users/' + idOfUser)
    .then(response => response.json())
    .then(user => {
        console.log(user);
        let divUser = document.createElement('div');
        divUser.className = 'divUser';

        let idBlock = document.createElement('p');
        idBlock.className = 'idBlock';
        idBlock.innerText = 'id: ' + user.id;

        let nameBlock = document.createElement('p');
        nameBlock.className = 'nameBlock';
        nameBlock.innerText = 'name: ' + user.name;

        let usernameBlock = document.createElement('p');
        usernameBlock.className = 'usernameBlock';
        usernameBlock.innerText = 'username: ' + user.username;

        let emailBlock = document.createElement('p');
        emailBlock.className = 'emailBlock';
        emailBlock.innerText = 'email: ' + user.email;

        let addressBlock = document.createElement('p');
        addressBlock.className = 'addressBlock';
        addressBlock.innerText = `address: \n street: ${user.address.street}\n suite: ${user.address.suite}
            city: ${user.address.city}\n zipcode: ${user.address.zipcode} \n geo:
            lat: ${user.address.geo.lat}\nlng ${user.address.geo.lng}`;

        let phoneBlock = document.createElement('p');
        phoneBlock.className = 'phoneBlock';
        phoneBlock.innerText = 'phone: ' + user.phone;

        let websiteBlock = document.createElement('p');
        websiteBlock.className = 'websiteBlock';
        websiteBlock.innerText = 'website: ' + user.website;

        let companyBlock = document.createElement('p');
        companyBlock.className = 'companyBlock';
        companyBlock.innerText = `company: \n name: ${user.company.name}\n catchPhrase: ${user.company.catchPhrase}
            bs: ${user.company.bs}`;

        let postOfCurrentUserButton = document.createElement('button');
        postOfCurrentUserButton.className = 'postOfCurrentUserButton';
        postOfCurrentUserButton.innerText = 'Post of current user'
        postOfCurrentUserButton.onclick = () => {
            // let usersDetails = document.getElementsByClassName('usersDetails')[0];
            //  usersDetails.innerHTML = '';

            let postsDiv = document.createElement('div');
            postsDiv.className = 'postsDiv';

            //fetch('https://jsonplaceholder.typicode.com/users/' + idOfUser + '/posts')
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(response => response.json())
                .then(postsArray => {
                    for (const post of postsArray) {
                        // console.log(post);


                        let postDiv = document.createElement('div');
                        postDiv.className = 'postDiv';

                        let postBlock = document.createElement('p');
                        postBlock.className = 'postBlock';
                        postBlock.innerText = `title: ${post.title}`

                        let postDetailsButton = document.createElement('button');
                        postDetailsButton.className = 'postDetailsButton';
                        postDetailsButton.innerText = 'Post details'
                        postDetailsButton.onclick = function () {
                            location.href = 'post-details.html?postId=' + post.id;

                        }


                        postsDiv.append(postDiv);
                        postDiv.append(postBlock, postDetailsButton);
                    }
                    userDetailsContainer.append(postsDiv);
                    postOfCurrentUserButton.disabled = true;
                });
        }
        userDetailsContainer.appendChild(divUser);
        divUser.append(idBlock, nameBlock, usernameBlock, emailBlock, addressBlock, phoneBlock, websiteBlock,
            companyBlock, postOfCurrentUserButton);
    });