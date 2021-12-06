//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
let divWrap = document.createElement('div');
divWrap.style.margin = '10px';
divWrap.style.padding = '10px';
divWrap.id = 'wrapper';
divWrap.classList.add = 'wrapper';

let div1 = document.createElement('div');
div1.style.margin = '10px';
div1.style.padding = '10px';
div1.style.width = '200px';
div1.style.height = '200px';
div1.style.backgroundColor = 'yellow';
div1.id = 'div1';
div1.classList.add = 'div1 abc';

let p = document.createElement('p');
p.id = 'p';
p.classList.add = 'text abc';
p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, nostrum possimus? Labore quia tenetur voluptatibus.';

let div2 = document.createElement('div');
div2.style.margin = '10px';
div2.style.padding = '10px';
div2.style.width = '400px';
div2.style.height = '300px';
div2.style.backgroundColor = 'green';
div2.id = 'div2';
div2.classList.add = 'div1 abc def';

document.body.appendChild(divWrap);
divWrap.append(div1, p, div2);

document.body.onclick = function (e){
  // if (e.which == 1) { }// я хотіла перевірити таким чином, чи натиснули ліву клавішу, але мені чомусь which перекреслює і не можу зробити таку перевірку
  //уточніть чи правильно я розумію oncontextmenu це права клавіша миші, а onclick - це само собою розуміється, що ліва клавіша?

    console.log("Назва тегу: " + e.target.localName +",\nСписок класів: " + e.target.classList['add'] + ",\nCписок id: " + e.target.id + ",\nРозмір: " + e.target.clientHeight + "*" + e.target.clientWidth);
}

