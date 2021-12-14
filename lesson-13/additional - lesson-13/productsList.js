let container = document.createElement('div');
container.classList.add('container');
let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
let buttonDeleteAll = document.createElement('button');
buttonDeleteAll.innerText = "Delete All";
buttonDeleteAll.classList.add('buttonDeleteAll');
buttonDeleteAll.onclick = function (){
    localStorage.clear();
}


let productsList = JSON.parse(localStorage.getItem('productsList'));

for(let product of productsList) {
    let productCard = document.createElement('div');
    productCard.classList.add('productCard');
    let name = document.createElement('h1');
    name.innerText = `${product.name}`;
    let value = document.createElement('h2');
    value.innerText = `${product.value}`
    let price = document.createElement('h3');
    price.innerText = `${product.price}`
    let photo = document.createElement('img');
    photo.src = `${product.photo}`

    let buttonDelete = document.createElement('button');
    buttonDelete.classList.add('buttonDelete');
    buttonDelete.innerText = 'Delete from list';
//     buttonDelete.onclick = function () {
//     localStorage.removeItem('name');     /////подумати як зробити?????? тут неправильно(бо всі мають ключ name)
// }


    wrapper.appendChild(productCard);
    productCard.append(name, value, price, photo, buttonDelete);
}
document.body.appendChild(container);
container.appendChild(wrapper);
container.appendChild(buttonDeleteAll);



