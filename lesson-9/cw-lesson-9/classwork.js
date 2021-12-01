//- є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
for (simpson of simpsons) {
    let divElement = document.createElement('div');
    divElement.classList.add('member');
    divElement.innerText = `${simpson.name} - ${simpson.surname} - ${simpson.age} - ${simpson.info}`
    document.body.appendChild(divElement);
}

//=====================================================================================================================
//- взяти попередній масив з сімпсонами.
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу
// створити окремий блок, та помістити його у div.member

for (simpson of simpsons) {
    let divElement = document.createElement('div');
    divElement.classList.add('member');
    let name = document.createElement('h3');
    name.innerText = `${simpson.name}`;
    let surname = document.createElement('h3');
    surname.innerText = `${simpson.surname}`;
    let age = document.createElement('h4');
    age.innerText = `${simpson.age}`;
    let info = document.createElement('p');
    info.innerText = `${simpson.info}`;
    let photo = document.createElement('img');
    photo.src = simpson.photo;
    document.body.appendChild(divElement);
    divElement.appendChild(name);
    divElement.appendChild(surname);
    divElement.appendChild(age);
    divElement.appendChild(info);
    divElement.appendChild(photo);
}

//=====================================================================================================================

//- Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

for (let course of coursesArray) {
    let divBlock = document.createElement('div');
    divBlock.style.border = "2px solid red";
    divBlock.style.margin = "2px";
    let title = document.createElement('h3');
    title.style.border = "1px solid blue";
    title.style.margin = "2px";
    title.style.padding = "10px";
    title.innerText = `${course.title}`;
    let monthDuration = document.createElement('span');
    monthDuration.style.display = 'inline-block';
    monthDuration.style.border = "1px solid blue";
    monthDuration.style.margin = "2px";
    monthDuration.style.padding = "10px";
    monthDuration.style.width = "25%";
    monthDuration.innerText = `${course.monthDuration}`;
    let hourDuration = document.createElement('span');
    hourDuration.style.display = 'inline-block';
    hourDuration.style.border = "1px solid blue";
    hourDuration.style.margin = "2px";
    hourDuration.style.padding = "10px";
    hourDuration.style.width = "69%";
    hourDuration.innerText = `${course.hourDuration}`;
    let ulBlock = document.createElement('ul');
    ulBlock.style.border = "1px solid blue";
    ulBlock.style.margin = "2px";
    ulBlock.style.padding = "10px";
    let liArray = course.modules;
    for (let li of liArray) {
        let liBlock = document.createElement('li');
        liBlock.style.border = "1px solid blue";
        liBlock.style.margin = "2px";
        liBlock.style.padding = "10px";
        liBlock.style.listStyle = "none";
        liBlock.textContent = `${li}`
        ulBlock.appendChild(liBlock);
    }
    document.body.appendChild(divBlock);
    divBlock.appendChild(title);
    divBlock.appendChild(monthDuration);
    divBlock.appendChild(hourDuration);
    divBlock.appendChild(ulBlock);
}



