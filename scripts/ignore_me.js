/* eslint-disable camelcase */
/* eslint-disable no-undef */
// https://github.com/jasonsjones/doubly-linked-list
// PLAN: WRONG THING TO CHANGE
/* TODO:
1) Webpack tutorial so I can use require!
2) Put in nodes as linked-list
0) On MongoDB express tutorial part; then MonogoDB tutorial
0) Use JEST for testing */

// Move my main scripts to app.js, and eventually divide up files and figure out webpacking them
// NOTES: npm run start -> to run webpack

/* TBA: After I scrap through and get chord names, I display all the chord names, chord qulaities, arrows, circles, etc.... ON THE CLIENT SIDE. Then I access database for the descriptions, and would access database and send to client JSON data (access using XHR calls, Ajax to update parts of page) OR I could store descriptions in localStorage till its full OR put the more obscure descriptions onto a database */

// NOTES: I might need to convert to jQuery since I will do lots of dom manipulation???

const orderOfSharpsArray = ['F#', 'C#', 'G#', 'D#', 'A#', 'E#', 'B#']
const orderOfFlatsArray = ['Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb', 'Fb']
console.log(a_major)

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
console.log('A major test start:')
console.log(keyOfSharps[currentLocation])
console.log(keyOfSharps[currentLocation += w])
console.log(keyOfSharps[currentLocation += w])
console.log(keyOfSharps[currentLocation += h])
console.log(keyOfSharps[currentLocation += w])
console.log(keyOfSharps[currentLocation += w])
console.log(keyOfSharps[currentLocation += w])
console.log(keyOfSharps[currentLocation += h])

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
