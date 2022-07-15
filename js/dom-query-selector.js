// Only first p tag
const p = document.querySelector('p')
console.log(p)

// Get selector by class ".error"
const pError = document.querySelector('.error')
console.log(pError)


// Get specific tag with specific class
const pDiv = document.querySelector('div.error')
console.log(pDiv)

// Unique css selector trick by right clicking on h1 in console
const h1 = document.querySelector('body > h1')
console.log(h1)

// Get all specific selectors....Also use index [] to grab specific ones on console...Also use for each to show all of them noy not node list
const paras = document.querySelectorAll('p')
paras.forEach(para => {
    console.log(para)
});
console.log(paras[2])

// Only all class .errors
const errors = document.querySelectorAll('.errors')

console.log(errors)

