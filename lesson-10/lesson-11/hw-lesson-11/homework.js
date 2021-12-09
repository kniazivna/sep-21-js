//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
let form = document.createElement("form");
form.id = "user";
form.action = "";
let nameInput = document.createElement("input");
nameInput.name = 'userName';
nameInput.value = 'Enter your name';
nameInput.onfocus = () => nameInput.value = '';
let ageInput = document.createElement("input");
ageInput.name = 'userAge';
ageInput.value = 'Enter your age';
ageInput.onfocus = () => ageInput.value = '';
let button = document.createElement("button");
button.innerText = 'Submit'
document.body.appendChild(form);
form.append(nameInput, ageInput, button)

document.forms.user.onsubmit = function (e){
    e.preventDefault();
}
let name = document.forms.user.userName;
let age = document.forms.user.userAge;

button.onclick = function (){
    let user = {
        name: nameInput.value,
        age: ageInput.value,
    };
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
}
//уточніть чи це нормально, що у localStorage кожен раз інформація перезаписується, тобто виходить так, що мій user
//щоразу перевизначаєть, і зберігаються дані лише по одному user?

//=====================================================================================================================

// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let fm = document.createElement("form");
fm.id = "car";
fm.action = "";
let modelInput = document.createElement("input");
modelInput.name = 'carModel';
modelInput.value = 'Enter your car model';
modelInput.onfocus = () => modelInput.value = '';
let typeInput = document.createElement("input");
typeInput.name = 'carType';
typeInput.value = 'Enter your car type';
typeInput.onfocus = () => typeInput.value = '';
let volumeInput = document.createElement("input");
volumeInput.name = 'carVolume';
volumeInput.value = 'Enter your car volume';
volumeInput.onfocus = () => volumeInput.value = '';
let btn = document.createElement("button");
btn.innerText = 'Submit'
document.body.appendChild(fm);
fm.append(modelInput, typeInput, volumeInput, btn);

document.forms.car.onsubmit = function (e) {
    e.preventDefault();
}

let model = document.forms.car.carModel;
let type = document.forms.car.carType;
let volume = document.forms.car.carVolume;

btn.onclick = function () {
    let car = [
        {model: modelInput.value},
        {type: typeInput.value},
        {volume: volumeInput.value}
    ];
    console.log(car);
    localStorage.setItem('car', JSON.stringify(car));
}

