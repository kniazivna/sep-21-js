////  TODO HW
//   // Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
//   // Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
//   // Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//   // // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с //
//   Пообідати - 1с // // І так далі

//=================================================================================================================
//за допомогою промісів
/*
let energy = 0;

//1
function getUp(getUp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getUp) {
          energy += 100;
        console.log('Hello a new day 1');
        resolve(energy)
      } else {
        console.log('You are still asleep');
        reject('You are going to loose such a wonderful day !!!')
      }
    }, 3000)
  })
}

//2
function haveBreakfest(energy) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(energy, 'points 2');
      if (energy >= 50){
        energy += 100;
        console.log('I can have breakfast');
        resolve(energy);
      } else {
        console.log('You need a cup of coffee');
        reject('Coffee!!!!!');
      }
    }, 1000)
  })
}

//3
function haveCoffe(cupOfCoffee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cupOfCoffee){
        energy += 200;
      console.log('I am full of energy 3');
      resolve(energy);
    } else {
      console.log('You need one more cup of coffee');
      reject('Today I am weak');
    }
  }, 1000)
})
}

//4
function goToTheBusStation(goToTheBusStation) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (goToTheBusStation){
        energy -= 20;
        console.log('4');
        resolve(energy);
      } else {
        reject(energy);
      }
    }, 300)
  })
}

//5
function goWork(jobIsDone) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jobIsDone){
        energy -= 100;
        console.log('5');
        resolve(energy);
      } else {
        reject(energy);
      }
    }, 300)
  })
}

//6
function haveLunch(haveLunch) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (haveLunch){
        energy += 50;
        console.log('I can have lunch 6');
        resolve(energy);
      } else {
        console.log('You need lunch');
        reject('Lunch!!!!!');
      }
    }, 1000)
  })
}

//7
function wodkToDo(jobIsDone) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jobIsDone){
        energy -= 100;
        console.log('7');
        resolve(energy);
      } else {
        console.log('You have to work more');
        reject('You are lazy!!!!!');
      }
    }, 800)
  })
}

//8
function haveDrink(cupOfCoffee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cupOfCoffee){
        energy += 80;
        console.log('I have got a power )) 8');
        resolve(energy);
      } else {
        console.log('You need one more cup of coffee');
        reject('Today you are emty of energy');
      }
    }, 2000)
  })
}

//9
function goHome(atHome) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (atHome){
        energy -= 50;
        console.log('9');
        resolve(energy);
      } else {
        reject(energy);
      }
    }, 300)
  })
}

//10
function familyTime(apendTimeWithFamily) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (apendTimeWithFamily){
        energy += 80;
        console.log('10');
        resolve(energy);
      } else {
        energy -= 30;
        reject(energy);
      }
    }, 300)
  })
}

//11
function haveDinner(haveDinner) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (haveDinner){
        energy += 50;
        console.log('I have dinner 11');
        resolve(energy);
      } else {
        console.log('You need dinner');
        reject('Dinner!!!!!');
      }
    }, 2000)
  })
}

//12
function houseWorkToDo(houseworkIsDone) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (houseworkIsDone){
        energy -= 100;
        console.log('12');
        resolve(energy);
      } else {
        reject(energy);
      }
    }, 300)
  })
}
*/

//
// getUp(true)
//   .then(energyPoint => {
//     return haveBreakfest(energyPoint)
//   })
// .then(energyPoint => {
//     return haveCoffe(energyPoint)
//   })
// .then(energyPoint => {
//     return goToTheBusStation(energyPoint)
//   })
// .then(energyPoint => {
//     return goWork(energyPoint)
//   })
// .then(energyPoint => {
//     return haveLunch(energyPoint)
//   })
// .then(energyPoint => {
//     return wodkToDo(energyPoint)
//   })
// .then(energyPoint => {
//     return haveDrink(energyPoint)
//   })
// .then(energyPoint => {
//     return goHome(energyPoint)
//   })
// .then(energyPoint => {
//     return familyTime(energyPoint)
//   })
// .then(energyPoint => {
//     return haveDinner(energyPoint)
//   })
// .then(energyPoint => {
//     return houseWorkToDo(energyPoint)
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.error(e)
//   })
//   .finally(() => {
//     console.log('The end')
//   })

//===================================================================================================================
//async await

let energy = 0;

//1
function getUp(getUp) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getUp) {
        energy += 100;
        console.log('Hello a new day 1');
        resolve(energy)
      } else {
        console.log('You are still asleep');
        reject('You are going to loose such a wonderful day !!!')
      }
    }, 3000)
  })
}

//2
function haveBreakfest(energy) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(energy, 'points 2');
      if (energy >= 50){
        energy += 100;
        console.log('I can have breakfast');
        resolve(energy);
      } else {
        console.log('You need a cup of coffee');
        reject('Coffee!!!!!');
      }
    }, 1000)
  })
}

//3
function haveCoffe(cupOfCoffee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cupOfCoffee){
        energy += 200;
        console.log('I am full of energy 3');
        resolve(energy);
      } else {
        console.log('You need one more cup of coffee');
        reject('Today I am weak');
      }
    }, 1000)
  })
}

//4
function goToTheBusStation(goToTheBusStation) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (goToTheBusStation){
        energy -= 20;
        console.log('4');
        resolve(energy);
      } else {
        reject(energy);
      }
    }, 300)
  })
}

//5
function goWork(jobIsDone) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jobIsDone){
        energy -= 100;
        console.log('5');
        resolve(energy);
      } else {
        reject(energy);
      }
    }, 300)
  })
}

//6
function haveLunch(haveLunch) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (haveLunch){
        energy += 50;
        console.log('I can have lunch 6');
        resolve(energy);
      } else {
        console.log('You need lunch');
        reject('Lunch!!!!!');
      }
    }, 1000)
  })
}

//7
function wodkToDo(jobIsDone) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jobIsDone){
        energy -= 100;
        console.log('7');
        resolve(energy);
      } else {
        console.log('You have to work more');
        reject('You are lazy!!!!!');
      }
    }, 800)
  })
}

//8
function haveDrink(cupOfCoffee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cupOfCoffee){
        energy += 80;
        console.log('I have got a power )) 8');
        resolve(energy);
      } else {
        console.log('You need one more cup of coffee');
        reject('Today you are emty of energy');
      }
    }, 2000)
  })
}

//9
function goHome(atHome) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (atHome){
        energy -= 50;
        console.log('9');
        resolve(energy);
      } else {
        reject(energy);
      }
    }, 300)
  })
}

//10
function familyTime(apendTimeWithFamily) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (apendTimeWithFamily){
        energy += 80;
        console.log('10');
        resolve(energy);
      } else {
        energy -= 30;
        reject(energy);
      }
    }, 300)
  })
}

//11
function haveDinner(haveDinner) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (haveDinner){
        energy += 50;
        console.log('I have dinner 11');
        resolve(energy);
      } else {
        console.log('You need dinner');
        reject('Dinner!!!!!');
      }
    }, 2000)
  })
}

//12
function houseWorkToDo(houseworkIsDone) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (houseworkIsDone){
        energy -= 100;
        console.log('12');
        resolve(energy);
      } else {
        reject(energy);
      }
    }, 300)
  })
}


async function myDay() {
  try {
    const morning = await getUp(true);
    const breakfast = await haveBreakfest(energy);
    const coffee = await haveCoffe(energy);
    const bus = await goToTheBusStation(energy);
    const work = await goWork(energy);
    const lunch = await haveLunch(energy);
    const workDo = await wodkToDo(energy);
    const drink = await haveDrink(energy);
    const home = await goHome(energy);
    const family = await familyTime(energy);
    const dinner = await haveDinner(energy);
    const housework = await houseWorkToDo(energy);

    console.log(morning, 'morning');
    console.log(breakfast, 'breakfast');
    console.log(coffee, 'coffee');
    console.log(bus, 'bus');
    console.log(work, 'work');
    console.log(lunch, 'lunch');
    console.log(workDo, 'workDo');
    console.log(drink, 'drink');
    console.log(home, 'home');
    console.log(family, 'family');
    console.log(dinner, 'dinner');
    console.log(housework, 'housework');
  } catch (e) {
    console.error(e)
  }
}
myDay()