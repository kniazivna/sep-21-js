const key = 'listOfFavourites';
let users = JSON.parse(localStorage.getItem(key));

for(user of users){
    let block = document.createElement('div');
    block.innerText = `Name: ${user.name} Age: ${user.age} Status: ${user.status}`;
    block.style.border = '2px solid green';
    document.body.appendChild(block);
}




