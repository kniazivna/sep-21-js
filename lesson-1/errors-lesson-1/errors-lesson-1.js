// Ваше завдання, зробити так, щоб файл відкривався без помилок .

let a = 100;
let b = 500;
let c = "hello";
let d = "okten";
const x = 'constant value';
{
    console.log(a);
  //  x = 'new value';  цей рядок невірний, бо const не можна змінювати значення, і якщо я правильно розумію, тоді звідси випливає, що let y = 'constant value';
}
//let b = 'new value';

//let y = 'new value';//в попередньому коментарі пояснила, чому я думаю, що має бути так)))
let y = 'constant value';

let result = 100 + y;

//console(result);синтаксично неправильно написана команда
console.log(result);