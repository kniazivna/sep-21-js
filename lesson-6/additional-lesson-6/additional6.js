//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) =>{
    let newString = [];
    while(str.length){
        newString.push(str.slice(0,n));
        str = str.slice(n);
    }
    console.log(newString);
    return newString;
        }
cutString('наслаждение', 3);

let cutString = (str, n) =>{
    let newString = [];
    for(i = 0; i < str.length; i++){
        newString.push(str.slice(0,n));
        str = str.slice(n);
    }
    console.log(newString);
    return newString;
}
cutString('наслаждение', 3);
