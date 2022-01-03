//На странице post-details.html:
//7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
//8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

console.log(location.href);
let url = new URL(location.href);
console.log(url.search);
let idOfpost = url.searchParams.get('postId');
console.log(idOfpost);

let postDetailsContainer = document.getElementsByClassName('postDetails')[0];

fetch(`https://jsonplaceholder.typicode.com/posts/` + idOfpost)
    .then(response => response.json())
    .then(post => {
       // console.log(post);
        let divPost = document.createElement('div');
        divPost.className = 'divPost';

        let userIdBlock = document.createElement('p');
        userIdBlock.className = 'userIdBlock';
        userIdBlock.innerText = 'userId: ' + post.userId;

        let postIdBlock = document.createElement('p');
        postIdBlock.className = 'postIdBlock';
        postIdBlock.innerText = 'id: ' + post.id;

        let postTitleBlock = document.createElement('p');
        postTitleBlock.className = 'postTitleBlock';
        postTitleBlock.innerText = 'title: ' + post.title;

        let postBodyBlock = document.createElement('p');
        postBodyBlock.className = 'postBodyBlock';
        postBodyBlock.innerText = 'body: ' + post.body;

        let allCommentsDiv = document.getElementsByClassName("allComments")[0];


        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(response => response.json())
            .then(commentsArray => {
                for (const comment of commentsArray) {
                    //console.log(comment);
                     let commentBlock = document.createElement('div');
                    commentBlock.className = 'commentBlock';

                    let commentPostIdBlock = document.createElement('p');
                    commentPostIdBlock.className = 'commentPostIdBlock';
                    commentPostIdBlock.innerText = `postId: ${comment.postId}`

                    let commentIdBlock = document.createElement('p');
                    commentIdBlock.className = 'commentIdBlock';
                    commentIdBlock.innerText = `id: ${comment.id}`

                    let commentNameBlock = document.createElement('p');
                    commentNameBlock.className = 'commentNameBlock';
                    commentNameBlock.innerText = `name: ${comment.name}`

                    let commentEmailBlock = document.createElement('p');
                    commentEmailBlock.className = 'commentEmailBlock';
                    commentEmailBlock.innerText = `email: ${comment.email}`

                    let commentBodyBlock = document.createElement('p');
                    commentBodyBlock.className = 'commentBodyBlock';
                    commentBodyBlock.innerText = `body: ${comment.body}`
                    allCommentsDiv.append(commentBlock);
                    commentBlock.append(commentPostIdBlock, commentIdBlock, commentNameBlock, commentEmailBlock, commentBodyBlock);
                }
            });


        postDetailsContainer.appendChild(divPost);
        divPost.append(userIdBlock, postIdBlock, postTitleBlock, postBodyBlock);
    });



