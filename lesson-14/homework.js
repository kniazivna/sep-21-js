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
myDay()*/

//==================================================================================================================

//За допомогою callback functions

let energy = 0;

//1
function getUp(getUp, callback) {
    setTimeout(() => {
      if (getUp) {
        energy += 100;
        console.log('Hello a new day 1');
        callback(null, energy);
      } else {
        callback('You are still asleep', null);
      }
    }, 3000)
}

//2
function haveBreakfest(energy, callback) {
    setTimeout(() => {
      console.log(energy, 'points 2');
      if (energy >= 50){
        energy += 100;
        console.log('I can have breakfast');
        callback(null, energy);
      } else {
        callback('You need a cup of coffee', null);
      }
    }, 1000)
}

//3
function haveCoffe(cupOfCoffee, callback) {
    setTimeout(() => {
      if (cupOfCoffee){
        energy += 200;
        console.log('I am full of energy 3');
        callback(null, energy);
      } else {
        callback('You need one more cup of coffee', null);
      }
    }, 1000)
}

//4
function goToTheBusStation(goToTheBusStation, callback) {
    setTimeout(() => {
      if (goToTheBusStation){
        energy -= 20;
        console.log('4');
        callback(null, energy);
      } else {
        callback('I have been still waiting the bus', null);
      }
    }, 300)
}

//5
function goWork(jobIsDone, callback) {
    setTimeout(() => {
      if (jobIsDone){
        energy -= 100;
        console.log('5');
        callback(null, energy);
      } else {
        callback('The light is turn out', null);
      }
    }, 300)
}

//6
function haveLunch(haveLunch, callback) {
    setTimeout(() => {
      if (haveLunch){
        energy += 50;
        console.log('I can have lunch 6');
        callback(null, energy);
      } else {
        callback('You need lunch', null);

      }
    }, 1000)
}

//7
function wodkToDo(jobIsDone, callback) {
    setTimeout(() => {
      if (jobIsDone){
        energy -= 100;
        console.log('7');
        callback(null, energy);
      } else {
        callback('You have to work more', null);
      }
    }, 800)
}

//8
function haveDrink(cupOfCoffee, callback) {
    setTimeout(() => {
      if (cupOfCoffee){
        energy += 80;
        console.log('I have got a power )) 8');
        callback(null, energy);
      } else {
        callback('You need one more cup of coffee', null);
      }
    }, 2000)
}

//9
function goHome(atHome, callback) {
    setTimeout(() => {
      if (atHome){
        energy -= 50;
        console.log('9');
        callback(null, energy);
      } else {
        callback('I can not go home', null);
      }
    }, 300)
}

//10
function familyTime(apendTimeWithFamily, callback) {
    setTimeout(() => {
      if (apendTimeWithFamily){
        energy += 80;
        console.log('10');
        callback(null, energy);
      } else {
        energy -= 30;
        callback(energy, null);
      }
    }, 300)
}

//11
function haveDinner(haveDinner, callback) {
    setTimeout(() => {
      if (haveDinner){
        energy += 50;
        console.log('I have dinner 11');
        callback(null, energy);
      } else {
        callback('You need dinner', null);
      }
    }, 2000)
}

//12
function houseWorkToDo(houseworkIsDone, callback) {
    setTimeout(() => {
      if (houseworkIsDone){
        energy -= 100;
        console.log('12');
        callback(null, energy);
      } else {
        callback(energy, null);
      }
    }, 300)
}

getUp(true, (error1, energy) =>{
  if(error1){
    console.error(error1)
  }else{
    haveBreakfest(energy, (error2, energy) =>{
      if(error2){
        console.error(error2)
      }else{
        haveCoffe(true, (error3, energy) =>{
          if(error3){
            console.error(error3)
          }else{
            goToTheBusStation(true, (error4, energy) =>{
              if(error4){
                console.error(error4)
              }else{
                goWork(true, (error5, energy) =>{
                  if(error5){
                    console.error(error5)
                  }else{
                    haveLunch(true, (error6, energy) =>{
                      if(error6){
                        console.error(error6)
                      }else{
                        wodkToDo(true, (error7, energy) =>{
                          if(error7){
                            console.error(error7)
                          }else{
                            haveDrink(true, (error8, energy) =>{
                              if(error8){
                                console.error(error8)
                              }else{
                                goHome(true, (error9, energy) =>{
                                  if(error9){
                                    console.error(error9)
                                  }else{
                                    familyTime(true, (error10, energy) =>{
                                      if(error10){
                                        console.error(error10)
                                      }else{
                                        haveDinner(true, (error11, energy) =>{
                                          if(error11){
                                            console.error(error11)
                                          }else{
                                            houseWorkToDo(true, (error12, energy) =>{
                                              if(error12){
                                                console.error(error12)
                                              }else{
                                                console.log(energy);
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        } )
      }
    })
  }
})


