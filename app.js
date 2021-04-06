function findRandomNumber(...a) {
  let number = Math.floor(Math.random() * a.length)
  return a[number]
}

let randomNumber = findRandomNumber('R', 'P', 'C')

console.log(randomNumber)
