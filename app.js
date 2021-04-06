function findRandomNumber(...a) {
  let number = Math.floor(Math.random() * a.length)
  return a[number]
}

let randomNumber = findRandomNumber('R', 'P', 'C')

console.log(randomNumber)

let word = 'salam'
window.onkeypress = function (e) {
  if (word.includes(e.key)) {
    console.log(`You choosed right letter: ${e.key}`)
  } else {
    console.log(`You didn't choose right letter: ${e.key}`)
  }
}
