//- Є масив :
//
let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];
//
// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.

for (let user of usersList) {
    let userBlok = document.createElement('div');
    userBlok.style.border = "2px solid red";
    userBlok.style.margin = "2px";
    userBlok.style.padding = "10px";
    let id = document.createElement('div');
    id.style.border = "1px solid blue";
    id.style.margin = "2px";
    id.style.padding = "10px";
    id.innerText = `${user.id}`;
    let name = document.createElement('div');
    name.style.border = "1px solid blue";
    name.style.margin = "2px";
    name.style.padding = "10px";
    name.innerText = `${user.name}`;
    let username = document.createElement('div');
    username.style.border = "1px solid blue";
    username.style.margin = "2px";
    username.style.padding = "10px";
    username.innerText = `${user.username}`;
    let email = document.createElement('div');
    email.style.border = "1px solid blue";
    email.style.margin = "2px";
    email.style.padding = "10px";
    email.innerText = `${user.email}`;
    let address = document.createElement('ul');
    address.style.border = "1px solid green";
    address.style.margin = "2px";
    address.style.padding = "10px";
    for (let add in user.address) {
        let addBlock = document.createElement('li');
        addBlock.style.border = "1px solid silver";
        addBlock.style.margin = "2px";
        addBlock.style.padding = "10px";
        addBlock.style.listStyle = "none";
        if (typeof user.address[add] !== 'object') {
            addBlock.innerText = user.address[add];
        }else{
            let adBlock = document.createElement('ul');
            adBlock.style.border = "1px solid green";
            adBlock.style.margin = "2px";
            adBlock.style.padding = "10px";
            addBlock.appendChild(adBlock);
           for(let g in user.address[add]){
               let gBlock = document.createElement('li');
               gBlock.style.border = "1px solid silver";
               gBlock.style.margin = "2px";
               gBlock.style.padding = "10px";
               gBlock.style.listStyle = "none";
               gBlock.innerText = user.address[add][g];
               adBlock.appendChild(gBlock);
           }

        }
        address.appendChild(addBlock);
    }
    let phone = document.createElement('div');
    phone.style.border = "1px solid blue";
    phone.style.margin = "2px";
    phone.style.padding = "10px";
    phone.innerText = `${user.phone}`;
    let website = document.createElement('div');
    website.style.border = "1px solid blue";
    website.style.margin = "2px";
    website.style.padding = "10px";
    website.innerText = `${user.website}`;
    let company = document.createElement('ul');
    company.style.border = "1px solid green";
    company.style.margin = "2px";
    company.style.padding = "10px";
    for (let com in user.company) {
        let comBlock = document.createElement('li');
        comBlock.style.border = "1px solid silver";
        comBlock.style.margin = "2px";
        comBlock.style.padding = "10px";
        comBlock.style.listStyle = "none";
        comBlock.innerText = user.company[com];
        company.appendChild(comBlock);
    }


    document.body.appendChild(userBlok);
    userBlok.appendChild(id);
    userBlok.appendChild(name);
    userBlok.appendChild(username);
    userBlok.appendChild(email);
    userBlok.appendChild(address);
    userBlok.appendChild(phone);
    userBlok.appendChild(website);
    userBlok.appendChild(company);
}