//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

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
            let commentButton = document.createElement('button');
            commentButton.className = 'commentButton';
            commentButton.innerText = 'Open comments';
            commentButton.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let postComments = document.createElement('div');
                                postComments.className = 'postComments';
                                postComments.innerHTML = `<h2>postId: ${comment.postId}</h2><h3>id: ${comment.id}</h3>
<h5>name: ${comment.name}</h5><h6>email: ${comment.email}</h6><p>body: ${comment.body}</p>`;
                                divPost.appendChild(postComments);
                            }

                        }
                    })
             }
            wrap.appendChild(divPost);
            divPost.append(userId, id, title, body, commentButton);
        }
    });
document.body.appendChild(wrap);

