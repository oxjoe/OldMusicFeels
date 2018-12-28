/* eslint-disable no-undef */
// https://github.com/jasonsjones/doubly-linked-list

/* TODO: Finish express tutorial; then render */

/*PLAN: After I scrap through and get chord names, I display all the chord names, chord qulaities, arrows, circles, etc.... ON THE CLIENT SIDE. Then I access database for the descriptions, and would access database and send to client JSON data (access using XHR calls, Ajax to update parts of page) OR I could store descriptions in localStorage till its full OR put the more obscure descriptions onto a database*/

// recommends react: https://stackoverflow.com/questions/39304549/why-would-i-need-template-engines-like-jade-or-ejs-on-the-backend
// NOTES: I could render the inital page on the server side (header and footer would be same) just ONCE, then if changes happen client takes over for better SEO!

// NOTES: I might need to convert to jQuery since I will do lots of dom manipulation???

// NOTES: I think I have to use Browerify/Webpac/etc... to use npm linked list code
// NOTES: Webpack was in Udemy

/* PLAN: Write tests! */
// Gets both "rn1" and "C"
// console.log(document.getElementById("chord-0").innerText)

// Gets only "C"
// console.log(document.getElementById("chord-0").querySelector(".name").innerHTML)]



// 1) Scrape through and get chord names
const noteNameArray = ['A', 'C#', 'Dadd9']
document.getElementById('chord-0').querySelector('.name').innerHTML = noteNameArray[0]
document.getElementById('chord-1').querySelector('.name').innerHTML = noteNameArray[1]
document.getElementById('chord-2').querySelector('.name').innerHTML = noteNameArray[2]

// 2) Current key would be first chord
document.getElementById('current-key').value = a_major['key-name']

// 3) Add the roman numeral
const noteQualityArray = [rn_ONE, rn_three, rn_four]

document.getElementById('chord-0').querySelector('.roman-num').innerHTML = noteQualityArray[0]
document.getElementById('chord-1').querySelector('.roman-num').innerHTML = noteQualityArray[1]
document.getElementById('chord-2').querySelector('.roman-num').innerHTML = noteQualityArray[2]

const orderOfSharpsArray = ['F#', 'C#', 'G#', 'D#', 'A#', 'E#', 'B#']
const orderOfFlatsArray = ['Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb', 'Fb']
console.log(a_major);

// Definition of whole and half step
const w = 2
const h = 1

let KEY = 'A'
// For right now, I'll duplicate and figure out mod later
const keyOfSharps = ['C', 'C#', 'D', 'D#', 'E', 'E#', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'B#', 'C', 'C#', 'D', 'D#', 'E', 'E#', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'B#']

let startIndex = keyOfSharps.findIndex(function (element) {
  return element === KEY
})
console.log(startIndex)

let currentLocation = startIndex

// Result is wrong
console.log("A major test start:");
console.log(keyOfSharps[currentLocation])
console.log(keyOfSharps[currentLocation += w])
console.log(keyOfSharps[currentLocation += w])
console.log(keyOfSharps[currentLocation += h])
console.log(keyOfSharps[currentLocation += w])
console.log(keyOfSharps[currentLocation += w])
console.log(keyOfSharps[currentLocation += w])
console.log(keyOfSharps[currentLocation += h])




// console.log(b_major['key-name'])

// PLAN: now i need to iterate through each .roman-num and add the quality of major or minor

// C corresponds to 0, B corresponds to 11 and next C is 12
// let noteNamesAndValues = [
//   "B#/C",
//   "C#/Db",
//   "D",
//   "D#/Eb",
//   "E/Fb",
//   "E#/F",
//   "F#/Gb",
//   "G",
//   "G#/Ab",
//   "A",
//   "A#/Bb",
//   "B/Cb"
// ];