//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CreateCar (model, producer, year, maxspeed, engineCapacity){
    this.model = model,
    this.producer = producer,
    this.year = year,
    this.maxspeed = maxspeed,
    this.engineCapacity =engineCapacity,
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    };
    this.info = function () {
        for (let key in this){
            if(typeof this[key] !== "function"){
                console.log(`${key} - ${this[key]}`);
            }
        }
    };
    this.increaseMaxSpeed = function(newSpeed){
        this.maxspeed =  this.maxspeed + newSpeed;
    };
    this.changeYear = function (newValue){
        this.year = newValue;
    };
    this.addDriver = function (driver) {this.driver = driver};


}

let car = new CreateCar('Octavia', 'Skoda', 2008, 180, 1.8 );
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.drive();
car.changeYear(2015);
car.info();
car.addDriver("olena");
car.info();


//====================================================================================================================
//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CreateCar2{
    constructor(model, producer, year, maxspeed, engineCapacity) {
        this.model = model,
            this.producer = producer,
            this.year = year,
            this.maxspeed = maxspeed,
            this.engineCapacity =engineCapacity,
            this.drive = function (){
                console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
            };
        this.info = function () {
            for (let key in this){
                if(typeof this[key] !== "function"){
                    console.log(`${key} - ${this[key]}`);
                }
            }
        };
        this.increaseMaxSpeed = function(newSpeed){
            this.maxspeed =  this.maxspeed + newSpeed;
        };
        this.changeYear = function (newValue){
            this.year = newValue;
        };
        this.addDriver = function (driver) {this.driver = driver};
    }
}

let car2 = new CreateCar2('Fabia', 'Skoda', 2010, 160, 1.6 );
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(50);
car2.drive();
car2.changeYear(2017);
car2.info();
car2.addDriver("petro");
car2.info();

//====================================================================================================================

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popeliushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
};
let Popeliushky = [
new Popeliushka("olena", 33, 38),
new Popeliushka("oksana", 31, 37),
new Popeliushka("oleksandra", 25, 35),
new Popeliushka("maria", 27, 39),
new Popeliushka("tania", 24, 36),
new Popeliushka("marta", 21, 40),
new Popeliushka("katia", 26, 41),
new Popeliushka("olena", 24, 334),
new Popeliushka("olia", 33, 42),
new Popeliushka("natalia", 33, 50)
];

console.log(Popeliushky);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
};

let prince = new Prince("marko", 28, 37);
console.log(prince);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let popeliuskaWithPrince = (Popeliushky, prince) =>{
    for( let popeliushka of Popeliushky){
        if(popeliushka.size === prince.size){
            return `Попелюшка ${popeliushka.name} має бути з принцом!!!`
        }
    }
};

console.log(popeliuskaWithPrince(Popeliushky, prince));

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let popeliushka2  = Popeliushky.find((popeliushka) => popeliushka.size === prince.size);
console.log(popeliushka2);

