// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
import uuidv4 from 'uuid/v4'
import validate from 'validator'
import Hangman from "./hangman.js"
import getPuzzle from "./requests.js"
console.log(validate.isEmail('footgmail.com'))

// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let  game1 


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render=()=>{
    puzzleEl.innerHTML=""
    guessesEl.textContent = game1.statusMessage
    game1.puzzle.split('').forEach((letter)=>{
        const letterEl=document.createElement('span')
        letterEl.textContent=letter
        puzzleEl.appendChild(letterEl)
    })
}





const startgame=async()=>{
    const puzzle=await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}


document.querySelector('#reset').addEventListener('click', startgame)
startgame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCountry('IN').then((country) => {
//     console.log(country.name.common)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getlocation().then((data)=>{
//     console.log(`you live in ${data.city} in ${data.region} in ${data.country}`)
//     return data.country
// }).catch((erro)=>{
//     console.log(`an error occured ${erro}`)
// }).then((countrycode)=>{
//         getCountry(countrycode).then((country) => {
//         console.log(country.name.common)
//     }).catch((err) => {
//         console.log(`Error: ${err}`)
//     })
// })

// getcurrentcountry().then((country)=>{
//     console.log(country.name.common)
// }).catch((errot)=>{
//     console.log("error")
// })