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
console.log(productsList);


const show = ()=>{
    wrapper.innerHTML='';
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
        buttonDelete.onclick = function () {
            /////подумати як зробити??????бо всі мають ключ name!!!!!!!!!!
            let index = productsList.findIndex(value1 => value1.id === product.id);
            productsList.splice(index,1)

            localStorage.setItem('productsList', JSON.stringify(productsList));
            show();

        }


        wrapper.appendChild(productCard);
        productCard.append(name, value, price, photo, buttonDelete);
    }
}
show();
document.body.appendChild(container);
container.appendChild(wrapper);
container.appendChild(buttonDeleteAll);

