function findRandomNumber(...a) {
  let number = Math.floor(Math.random() * a.length)
  return a[number]
}

let letters = ['r', 'p', 's']
let userScor = 0
let compScor = 0

window.onkeypress = function (e) {
  let randomNumber = findRandomNumber('r', 'p', 's')

  console.log(`Computer choosed : ${randomNumber}`)

  if (letters.indexOf(e.key) !== -1) {
    console.log(`You choosed : ${e.key}`)
  } else {
    console.log(`You cann't : ${e.key}`)
  }

  if (randomNumber === 'r' && e.key === 'p') {
    userScor = userScor + 1
    compScor = compScor
    console.log(`user scor is: ${userScor}`)
    console.log(`comp scor is: ${compScor}`)
  } else if (randomNumber === 'r' && e.key === 's') {
    userScor = userScor
    compScor = compScor + 1
    console.log(`user scor is: ${userScor}`)
    console.log(`comp scor is: ${compScor}`)
  } else if (randomNumber === 'r' && e.key === 'r') {
    userScor = userScor
    compScor = compScor
    console.log(`user scor is: ${userScor}`)
    console.log(`comp scor is: ${compScor}`)
  }

  if (randomNumber === 's' && e.key === 'p') {
    userScor = userScor
    compScor = compScor + 1
    console.log(`user scor is: ${userScor}`)
    console.log(`comp scor is: ${compScor}`)
  } else if (randomNumber === 's' && e.key === 's') {
    userScor = userScor
    compScor = compScor
    console.log(`user scor is: ${userScor}`)
    console.log(`comp scor is: ${compScor}`)
  } else if (randomNumber === 's' && e.key === 'r') {
    userScor = userScor + 1
    compScor = compScor
    console.log(`user scor is: ${userScor}`)
    console.log(`comp scor is: ${compScor}`)
  }

  if (randomNumber === 'p' && e.key === 'p') {
    userScor = userScor
    compScor = compScor
    console.log(`user scor is: ${userScor}`)
    console.log(`comp scor is: ${compScor}`)
  } else if (randomNumber === 'p' && e.key === 's') {
    userScor = userScor + 1
    compScor = compScor
    console.log(`user scor is: ${userScor}`)
    console.log(`comp scor is: ${compScor}`)
  } else if (randomNumber === 'p' && e.key === 'r') {
    userScor = userScor
    compScor = compScor + 1
    console.log(`user scor is: ${userScor}`)
    console.log(`comp scor is: ${compScor}`)
  }
}
