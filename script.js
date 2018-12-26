/* eslint-disable no-undef */
// https://github.com/jasonsjones/doubly-linked-list

// takeaway IGNORE REQUIRE STUFF, JUST DO JAVASCRIPT STUFF (TESTS) AND VIDEOS, WHEN ADDING BACKEND IT SHOULD WORK
// todo add a testing library
/* NOTES: 1) Put dummy data into array
 *         so I can code unit test into it
 *         2) but array data into linkedlist
 *           code test to that
 *         3) Watch jest unit testing
 *         4) Watch express video then Mongo then from scratch */

// Gets both "rn1" and "C"
// console.log(document.getElementById("chord-0").innerText)

// Gets only "C"
// console.log(document.getElementById("chord-0").querySelector(".name").innerHTML)]

// let LinkedList = require('dbly-linked-list');
// const list = new LinkedList()
// console.log("list.isEmpty(): " + list.isEmpty())

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

// TODO: Use jest to test!
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