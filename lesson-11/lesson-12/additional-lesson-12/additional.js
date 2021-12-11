//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let wrap = document.createElement('div');
wrap.className = 'wrap';
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersArray => {

        for (const user of usersArray) {
            let divUser = document.createElement('div');
            divUser.className = 'divUser';
            let id = document.createElement('h4');
            id.className = 'id';
            id.innerText = `id: ${user.id}`;
            let name = document.createElement('h5');
            name.className = 'name';
            name.innerText = `name: ${user.name}`;
            let username = document.createElement('h5');
            username.className = 'username';
            username.innerText = `username: ${user.username}`;
            let email = document.createElement('p');
            email.className = 'email';
            email.innerText = `email: ${user.email}`;
            let address = document.createElement('p');
            address.className = 'address';
            address.innerText = `address: \n street: ${user.address.street}\n suite: ${user.address.suite}
            \n city: ${user.address.city}\n zipcode: ${user.address.zipcode} \n geo:
            \nlat: ${user.address.geo.lat}\nlng ${user.address.geo.lng}`;
            let phone = document.createElement('p');
            phone.className = 'phone';
            phone.innerText = `phone: ${user.phone}`;
            let website = document.createElement('p');
            website.className = 'website';
            website.innerText = `website: ${user.website}`;
            let company = document.createElement('p');
            company.className = 'company';
            company.innerText = `company: \n name: ${user.company.name}\n catchPhrase: ${user.company.catchPhrase}
            \n bs: ${user.company.bs}`;
            let userButton = document.createElement('button');
            userButton.className = 'userButton';
            userButton.innerText = `Open posts`;
            userButton.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then(response => response.json())
                    .then(posts => {
                        for (const post of posts) {
                            if (user.id === post.userId) {
                                let divPost = document.createElement('div');
                                divPost.className = 'divPost';
                                divPost.innerHTML = `<h2>userId: ${post.userId}</h2><h3>id: ${post.id}</h3>
<p>title: ${post.title}</p><p>body: ${post.body}</p>`;
                                let postButton = document.createElement('button');
                                postButton.className = 'postButton';
                                postButton.innerText = "Open comments";
                                postButton.onclick = () => {
                                    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                                        .then(response => response.json())
                                        .then(comments => {
                                            for (const comment of comments) {
                                                if (post.id === comment.postId) {
                                                    let divComment = document.createElement('div');
                                                    divComment.className = 'divComment';
                                                    divComment.innerHTML = `<h2>postId: ${comment.postId}</h2><h3>id: ${comment.id}</h3>
<h5>name: ${comment.name}</h5><h6>email: ${comment.email}</h6><p>body: ${comment.body}</p>`;
                                                    divPost.appendChild(divComment);
                                                }

                                            }
                                        })
                                }













                                divUser.appendChild(divPost);
                                divPost.appendChild(postButton);
                            }

                        }
                    })
            }



            wrap.appendChild(divUser);
            divUser.append(id, name, username, email, address, phone, website, company, userButton);

        }
    });
document.body.appendChild(wrap);