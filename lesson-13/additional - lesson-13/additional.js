//- Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар


let productForm = document.createElement("form");
productForm.name = 'productForm';

let nameInput = document.createElement("input");
nameInput.value = 'Enter name of product';
nameInput.onfocus = () => nameInput.value = '';

let valueInput = document.createElement("input");
valueInput.value = 'Enter value of product';
valueInput.onfocus = () => valueInput.value = '';

let priceInput = document.createElement("input");
priceInput.value = 'Enter price of product';
priceInput.onfocus = () => priceInput.value = '';

let imgInput = document.createElement("input");
imgInput.value = 'Enter photo of product';
imgInput.onfocus = () => imgInput.value = '';

let buttonSave = document.createElement('button');
buttonSave.innerText = 'Add to product list';
buttonSave.addEventListener('click', () => {// не до кінця зрозуміла з умови чи потрібен тут e.preventDefault();
   // e.preventDefault();

    let product ={
        name: nameInput.value,
        value: valueInput.value,
        price: priceInput.value,
        photo: imgInput.value,
    }

    let productsList = JSON.parse(localStorage.getItem('productsList')) || [];
    productsList.push(product);
    localStorage.setItem('productsList', JSON.stringify(productsList));

})




document.body.appendChild(productForm);
productForm.append(nameInput, valueInput, priceInput, imgInput, buttonSave);