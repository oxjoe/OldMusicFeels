// https://github.com/jasonsjones/doubly-linked-list

// takeaway IGNORE REQUIRE STUFF, JUST DO JAVASCRIPT STUFF (TESTS) AND VIDEOS, WHEN ADDING BACKEND IT SHOULD WORK
//todo add a testing library
/*NOTES: 1) Put dummy data into array
 *         so I can code unit test into it
 *         2) but array data into linkedlist
 *           code test to that
 *         3) Watch jest unit testing
 *         4) Watch express video then Mongo then from scratch */

// TODO:FIRST imagine what it would be like if i scrapped through list of chords
// Gets both "rn1" and "C"
// console.log(document.getElementById("chord-0").innerText)

// Gets only "C"
//console.log(document.getElementById("chord-0").querySelector(".name").innerHTML)]

//beefy script.js --live

// let LinkedList = require('dbly-linked-list');
// const list = new LinkedList()
// console.log("list.isEmpty(): " + list.isEmpty())

const arr = ["C", "Em", "Fadd9"]

document.getElementById("chord-0").querySelector(".name").innerHTML = arr[0]
document.getElementById("chord-1").querySelector(".name").innerHTML = arr[1]
document.getElementById("chord-2").querySelector(".name").innerHTML = arr[2]

// --> true

const map = new Map()

const sharpsArray = ["F#", "C#", "G#", "D#", "A#", "E#", "B#"]
const flatsArray = ["Bb", "Eb", "Ab", "Db", "Gb", "Cb", "Fb"]
console.log(b_major["key-name"])

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