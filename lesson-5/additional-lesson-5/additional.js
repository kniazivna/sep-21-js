//- Дано натуральное число n. Выведите все числа от 1 до n.

/*let naturNumFn = (n) => {// я не врахувала, якщо n = 0, бо 0 не натуральне число. Тому не знаю чи правильне вирішення, бо відповідно при n=0, і масиву як такого нема
    let newArr = [];
    let x = 1;
    for (let i = 0; i < n; i++) {
        if(n <= 1){
            newArr.push(x);
        } else{
            newArr.push(x);
            x = x+1;
        }
    }
    return newArr;
}
console.log(naturNumFn(8));*/

//або такий варіант

/*let naturNumFn = (n) => {
    for (let i = 1; i <=n; i++) {
        console.log(i);
    }
}
naturNumFn(10);*/

//Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
/*let randomNumFn = (a,b) => {
    if(a < b) {
      for(let i = a; i <= b; i++){
      console.log(i);
      }
    } else if(a > b){
        for(let i = a; i <= b; i--){
            console.log(i);
        }
    }else console.log("Ви ввели два однакових числа")

}
randomNumFn(10,10 );*/

//-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

/*
let arrAndNumb = (arr, i) =>{
    for(let j = 0; j < arr.length; j++){
        if(j === i){
            let x = arr[j+1];
           arr[j+1] = arr[j];
            arr[j] = x;

        }
    }
    console.log(arr);
}
arrAndNumb([9, 8, 0, 4], 2);
*/


//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

/*
let removeFn = (arr) => {
    let theroArr = [];
    let numsArr = [];
    let newRemoveFn = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            theroArr.push(arr[i]);
        } else numsArr.push(arr[i]);

    }

    return newRemoveFn.concat(numsArr, theroArr);
}
console.log(removeFn([1, 0, 6, 0, 3]));*/
