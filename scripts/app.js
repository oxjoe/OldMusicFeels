/* eslint-disable key-spacing */
/* eslint-disable quotes */
/* eslint-disable object-curly-spacing */
/* eslint-disable comma-spacing */
/* eslint-disable standard/array-bracket-even-spacing */
/* eslint-disable eol-last */
/* eslint-disable func-call-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable spaced-comment */
/* eslint-disable keyword-spacing */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable camelcase */
'use strict'
import '../views/index.css'
import { currentKeyArray, currentKeyArrayClean, flat, natural, sharp, diminished } from './setup.js'
// import $ from "jquery";
// https://www.npmjs.com/package/webpack-jquery-ui
require('webpack-jquery-ui')
require('webpack-jquery-ui/css') // ommit, if you don't want to load basic css theme

// #region | Roman Numeral Unicode Declarations
const rnONE = '\u2160'
const rnTWO = '\u2161'
const rnTHREE = '\u2162'
const rnFOUR = '\u2163'
const rnFIVE = '\u2164'
const rnSIX = '\u2165'
const rnSEVEN = '\u2166'

const rnOne = '\u2170'
const rnTwo = '\u2171'
const rnThree = '\u2172'
const rnFour = '\u2173'
const rnFive = '\u2174'
const rnSix = '\u2175'
const rnSeven = '\u2176'
// #endregion

class Chord {
  constructor(number, name, note) {
    this.number = number
    this.name = name
    this.note = note
  }
  // get number() {
  //   return this.number
  // }

  // set number(value) {
  //   this.number = value
  // }

  // get name() {
  //   return this.name
  // }

  // set name(value) {
  //   this.name = value
  // }
  // get note() {
  //   return this.note
  // }

  // set note(value) {
  //   this.note = value
  // }
}

const majorPattern = [null, rnONE, rnTwo, rnThree, rnFOUR, rnFIVE, rnSix, rnSeven + diminished]
const minorPattern = [null, rnOne, rnTwo + diminished, rnTHREE, rnFour, rnFIVE, rnSIX, rnSeven + diminished]
console.log('majorPattern: ' + majorPattern);
console.log('minorPattern: ' + minorPattern);

// Option to allow follow casing (capitalization of fMinor follows the corresponding roman numeral). Currently it does not



let LinkedList = require('dbly-linked-list')
const list = new LinkedList()
// TODO: pre-create all the scale arrays above


console.log('currentKeyArray :', currentKeyArray);
console.log('currentKeyArrayClean :', currentKeyArrayClean);
/* const inputField = document.getElementById('current-key');
// https://www.w3schools.com/jsref/event_onfocus.asp
inputField.onfocus = () => {
  inputField.setAttribute('selected', 'true')
} */

// I would only get one tuple at a time
let exampleTuple = '{ "id": 1, "numbers": "1,5", "names": "C,G", "notes": "Feels strong moving from the root to the fifth" }'
let jsonObj = JSON.parse(exampleTuple)

console.log('jsonObj :', jsonObj);
// i = number of key presses
// not sure if necessary
let i = 0

function createNode(num) {
  i++
  console.log('i :', i);
  console.log('list.getSize() :', list.getSize());
  console.log('list.getTailNode() :', list.getTailNode())
  console.log('* Inserted new Chord *')
  return new Chord(majorPattern[num], currentKeyArray[num], '')
}

// The letter 'l', stands for last. So two l's ('ll') means last last.
let lChord;
let lChordName;
let lChordNote;
let lChordNumber;

let llChord;
let llChordName;
let llChordNote;
let llChordNumber;



// Function that will serach for a note/relationship between two chords numbers and append them
function searchForRelationship(chordx, chordy) {
  // Combine the rn from llchord and lchord to form a 'rn, rn' that will match one of the numbers in the tuple column
  let combinedNumber = llChord.number + ',' + lChord.number
  console.log('combinedNumber :', combinedNumber);
  // TODO: Now I have my combinedNumber and I have to compare it with each numbers column in the database table.
  // TODO: I also have to write something to parse PostGreSQL (look at my sql for the variable/function assignment)

}
// I only put in data after the first node has been put in
// i    would go somewhere in here if it was needed
function putInData() {
  // Check if last last node exists
  if (list.getTailNode().hasPrev()) {
    llChord = list.getTailNode().prev.getData()
    lChord = list.getTailNode().getData();
    console.log('llChord: ', llChord);
    console.log('lChord: ', lChord);
    searchForRelationship(llChord, lChord)
  } else {
    console.error('No prior node exists');
  }

  // lastChordNumber = lastChord.number
  // lastChordName = lastChord.name
  // lastChordNote = lastChord.note
}

$(document).keyup(function (e) {
  let keyPress = e.key.toUpperCase()
  console.log('keyPress :', keyPress);
  if (keyPress === currentKeyArrayClean[1]) {
    list.insert(createNode(1))
    putInData();
  } else if (keyPress === currentKeyArrayClean[2]) {
    list.insert(createNode(2))
    putInData();
  } else if (keyPress === currentKeyArrayClean[3]) {
    list.insert(createNode(3))
    putInData();
  } else if (keyPress === currentKeyArrayClean[4]) {
    list.insert(createNode(4))
    putInData();
  } else if (keyPress === currentKeyArrayClean[5]) {
    list.insert(createNode(5))
    putInData();
  } else if (keyPress === currentKeyArrayClean[6]) {
    list.insert(createNode(6))
    putInData();
  } else if (keyPress === currentKeyArrayClean[7]) {
    list.insert(createNode(7))
    putInData();
  } else {
    console.error('Must stay within key');
  }
});


/* PLAN:
1) If I type a letter, then I create a node.
2) Remember to use Angular to get the 'dynamic' html\
?) 5/17 - Now i need to figure out how to add data from the server to the corresponding node

Also if I type in G then it shows 'ii' and 'G'. It should show Gm

?) Now I need to render the Node/DOM with Angular














 */


/*

 */


// const noteNameArray = ['F', 'C', 'G']
// const noteQualityArray = [rnONE, rnFIVE, rnTWO]

// // Adds each note name to the array
// for (let index = 0; index < noteNameArray.length; index++) {
//   list.insert({
//     'noteName': noteNameArray[index]
//   })
// }

// console.log(list.getTailNode().getData())
// test: {noteName: "Dadd9"}


// $(document).ready(function () {
//   $('.chords-container #chord-0 .name').html(LL[0])
//   $('.chords-container #chord-1 .name').html(noteNameArray[1])
//   $('.chords-container #chord-2 .name').html(noteNameArray[2])

//   $('.chords-container #chord-0 .roman-num').html(noteQualityArray[0])
//   $('.chords-container #chord-1 .roman-num').html(noteQualityArray[1])
//   $('.chords-container #chord-2 .roman-num').html(noteQualityArray[2])

//   // $('.node').remove()
//   $('.description-container').remove()
// })
