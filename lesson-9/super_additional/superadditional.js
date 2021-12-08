//
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
/*let address = [];
for(let user of users){
for(const item in user){
    if(typeof user[item] === 'object'){
        address.push(user[item]);
    }
}
   }
console.log(address);*/

//=====================================================================================================================

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

/*for(let user of users){
    let div = document.createElement('div');
    div.innerText = user;
    document.body.appendChild(div);
}*/

//====================================================================================================================

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

/*for(let user of users){
    let divUser = document.createElement('div');
    for(let item in user){
        let divItem = document.createElement('div');
        if(typeof user[item] !== 'object'){
            divItem.innerText = item + ':' + ' ' + user[item];
        } else divItem.innerText = item;

        divUser.appendChild(divItem);
    }
    document.body.appendChild(divUser);
}*/

//=====================================================================================================================

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

/*for(let user of users){
    let divUser = document.createElement('div');
    for(let item in user){
        let divItem = document.createElement('div');
        if( typeof user[item] !== "object"){
            //let divItem = document.createElement('div');
            divItem.innerText = item + ':'+' ' + user[item];
        } else {
            divItem.innerText = item;
            for(element in user[item]){
                let divAddress = document.createElement('div');
                divAddress.innerText = element + ':' + ' '+ user[item][element];
                divItem.appendChild(divAddress);
            }
        }
        divUser.appendChild(divItem);
    }
    document.body.appendChild(divUser);
}*/

//====================================================================================================================

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

//писала цей скрипт використовуючи rules.html, а не масив,який знизу!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let ul = document.getElementById('content');
let ulElement = document.createElement('ul');
ul.appendChild(ulElement);
let title = document.getElementsByTagName('h2');
for(let item of title){
    console.log(item);
    let li = document.createElement('li');
  li.innerText = item.innerText;
    ulElement.appendChild(li);
}



// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

/*
let divWrap = document.createElement('div');
divWrap.id = 'wrap2';//тут спеціально до id додала 2, щоб не повторювався
for(i = 0; i < rules.length; i++) {
    let div = document.createElement('div');
    div.classList.add('rules', `rule${i + 1}`);
    divWrap.appendChild(div);
    let h2 = document.createElement('h2');
    h2.innerText = rules[i].title;
    div.appendChild(h2);
    let p = document.createElement('p');
    p.innerText = rules[i].body;
    div.appendChild(p);
}
document.body.appendChild(divWrap);*/
