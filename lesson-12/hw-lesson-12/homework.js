//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let wrap = document.createElement('div');
wrap.className = 'wrapper';
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(postsArray => {
        console.log(postsArray);
        for (const post of postsArray) {
            let divPost = document.createElement('div');
            divPost.className = 'post';
            console.log(post);
            let userId = document.createElement('h2');
            userId.className = 'id';
            userId.innerText = `userId: ${post.userId}`;
            let id = document.createElement('h3');
            id.className = 'id';
            id.innerText = `id: ${post.id}`;
            let title = document.createElement('p');
            title.className = 'title';
            title.innerText = `title: ${post.title}`;
            let body = document.createElement('p');
            body.className = 'body';
            body.innerText = `body: ${post.body}`;

            wrap.appendChild(divPost);
            divPost.append(userId, id, title, body);

       }
    });
document.body.appendChild(wrap);

//====================================================================================================================

//2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let wrap2 = document.createElement('div');
wrap2.className = 'wrapper2';
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(commentsArray => {
        console.log(commentsArray);
        for (const comment of commentsArray) {
            let divComment = document.createElement('div');
            divComment.className = 'comment';
            //console.log(comment);
            let postId = document.createElement('h2');
            postId.className = 'postId';
            postId.innerText = `postId: ${comment.postId}`;
            let id2 = document.createElement('h3');
            id2.className = 'id2';
            id2.innerText = `id: ${comment.id}`;
            let name = document.createElement('h5');
            name.className = 'name';
            name.innerText = `name: ${comment.name}`;
            let email = document.createElement('h6');
            email.className = 'email';
            email.innerText = `email: ${comment.email}`;
            let body2 = document.createElement('p');
            body2.className = 'body2';
            body2.innerText = `body: ${comment.body}`;

            wrap2.appendChild(divComment);
            divComment.append(postId, id2, name,email, body2);

       }
    });
document.body.appendChild(wrap2);
