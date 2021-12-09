
let users = JSON.parse(localStorage.getItem('ListOfFavourites'));

for(user of users){
    let block = document.createElement('div');
    block.innerText = `Name: ${user.name} Age: ${user.age} Status: ${user.status}`;
    block.style.border = '2px solid yellow';
    document.body.appendChild(block);
}




