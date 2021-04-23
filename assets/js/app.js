// function findRandomNumber(...a) {
//   let number = Math.floor(Math.random() * a.length)
//   return a[number]
// }

// let letters = ['r', 'p', 's']
// let userScor = 0
// let compScor = 0

// window.onkeypress = function (e) {
//   let randomNumber = findRandomNumber('r', 'p', 's')

//   console.log(`Computer choosed : ${randomNumber}`)

//   if (letters.indexOf(e.key) !== -1) {
//     console.log(`You choosed : ${e.key}`)
//   } else {
//     console.log(`You cann't : ${e.key}`)
//   }

//   if (randomNumber === 'r' && e.key === 'p') {
//     userScor = userScor + 1
//     compScor = compScor
//     console.log(`user scor is: ${userScor}`)
//     console.log(`comp scor is: ${compScor}`)
//   } else if (randomNumber === 'r' && e.key === 's') {
//     userScor = userScor
//     compScor = compScor + 1
//     console.log(`user scor is: ${userScor}`)
//     console.log(`comp scor is: ${compScor}`)
//   } else if (randomNumber === 'r' && e.key === 'r') {
//     userScor = userScor
//     compScor = compScor
//     console.log(`user scor is: ${userScor}`)
//     console.log(`comp scor is: ${compScor}`)
//   }

//   if (randomNumber === 's' && e.key === 'p') {
//     userScor = userScor
//     compScor = compScor + 1
//     console.log(`user scor is: ${userScor}`)
//     console.log(`comp scor is: ${compScor}`)
//   } else if (randomNumber === 's' && e.key === 's') {
//     userScor = userScor
//     compScor = compScor
//     console.log(`user scor is: ${userScor}`)
//     console.log(`comp scor is: ${compScor}`)
//   } else if (randomNumber === 's' && e.key === 'r') {
//     userScor = userScor + 1
//     compScor = compScor
//     console.log(`user scor is: ${userScor}`)
//     console.log(`comp scor is: ${compScor}`)
//   }

//   if (randomNumber === 'p' && e.key === 'p') {
//     userScor = userScor
//     compScor = compScor
//     console.log(`user scor is: ${userScor}`)
//     console.log(`comp scor is: ${compScor}`)
//   } else if (randomNumber === 'p' && e.key === 's') {
//     userScor = userScor + 1
//     compScor = compScor
//     console.log(`user scor is: ${userScor}`)
//     console.log(`comp scor is: ${compScor}`)
//   } else if (randomNumber === 'p' && e.key === 'r') {
//     userScor = userScor
//     compScor = compScor + 1
//     console.log(`user scor is: ${userScor}`)
//     console.log(`comp scor is: ${compScor}`)
//   }
// }

function findRandomNumber(...a) {
  let number = Math.floor(Math.random() * a.length)
  return a[number]
}

// Selecting user inputs
const userStuffs = document.querySelectorAll('.user-stuffs div')
const userScores = document.querySelector('#user-score')
const compScores = document.querySelector('#comp-score')

console.log(userScores)
let userScore = 0
let compScore = 0
userScores.innerHTML = userScore
compScores.innerHTML = compScore

for (let i = 0; i < userStuffs.length; i++) {
  userStuffs[i].addEventListener('click', function (e) {
    let randomNumber = findRandomNumber('rock', 'paper', 'scissors')
    console.log(randomNumber)
    const classOfDiv = e.currentTarget.classList
    console.log(classOfDiv.value)

    if (randomNumber === 'rock' && classOfDiv.value === 'rock') {
      console.log(userScore)
      alert(`User'choice : ${classOfDiv.value}
Computer's choice : ${randomNumber}`)
    } else if (randomNumber === 'rock' && classOfDiv.value === 'paper') {
      userScore++
      userScores.innerHTML = userScore
      console.log(userScore)
      alert(`User'choice : ${classOfDiv.value}
Computer's choice : ${randomNumber}`)
    } else if (randomNumber === 'rock' && classOfDiv.value === 'scissors') {
      compScore++
      compScores.innerHTML = compScore
      console.log(userScore)
      alert(`User'choice : ${classOfDiv.value}
Computer's choice : ${randomNumber}`)
    }

    if (randomNumber === 'paper' && classOfDiv.value === 'paper') {
      console.log(userScore)
      alert(`User'choice : ${classOfDiv.value}
Computer's choice : ${randomNumber}`)
    } else if (randomNumber === 'paper' && classOfDiv.value === 'rock') {
      compScore++
      compScores.innerHTML = compScore
      console.log(userScore)
      alert(`User'choice : ${classOfDiv.value}
Computer's choice : ${randomNumber}`)
    } else if (randomNumber === 'paper' && classOfDiv.value === 'scissors') {
      userScore++
      userScores.innerHTML = userScore
      console.log(userScore)
      alert(`User'choice : ${classOfDiv.value}
Computer's choice : ${randomNumber}`)
    }

    if (randomNumber === 'scissors' && classOfDiv.value === 'scissors') {
      console.log(userScore)
      alert(`User'choice : ${classOfDiv.value}
Computer's choice : ${randomNumber}`)
    } else if (randomNumber === 'scissors' && classOfDiv.value === 'rock') {
      userScore++
      userScores.innerHTML = userScore
      console.log(userScore)
      alert(`User'choice : ${classOfDiv.value}
Computer's choice : ${randomNumber}`)
    } else if (randomNumber === 'scissors' && classOfDiv.value === 'paper') {
      compScore++
      compScores.innerHTML = compScore
      console.log(userScore)
      alert(`User'choice : ${classOfDiv.value}
Computer's choice : ${randomNumber}`)
    }
  })
}
