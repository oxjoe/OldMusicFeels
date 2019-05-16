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
// import $ from "jquery";
// https://www.npmjs.com/package/webpack-jquery-ui
require('webpack-jquery-ui')
require('webpack-jquery-ui/css') // ommit, if you don't want to load basic css theme

// #region of roman-numerals.js
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

// lookup qualities: http://openmusictheory.com/triads.html
const flat = '\u266D'
const natural = '\u266E'
const sharp = '\u266F'

const diminished = '\u00B0'
// #endregion

// #region of scales.js
const cMajorNames = [null, 'C', 'D', 'E', 'F', 'G', 'A', 'B']

// KEYS WITH SHARPS
const gMajorNames = [null, 'G', 'A', 'B', 'C', 'D', 'E', 'F' + sharp]
const d_major = {
  'key-name': 'd_major',
  'has-sharps': true,
  'key-signature': 2,
  'relative-minor': 'Bm'
}
const a_major = {
  'key-name': 'a_major',
  'has-sharps': true,
  'key-signature': 3,
  'relative-minor': 'F#m'
}
const e_major = {
  'key-name': 'e_major',
  'has-sharps': true,
  'key-signature': 4,
  'relative-minor': 'C#m'
}
const b_major = {
  'key-name': 'b_major',
  'has-sharps': true,
  'key-signature': 5,
  'relative-minor': 'G#m'
}
const f_sharp_major = {
  'key-name': 'f_sharp_major',
  'has-sharps': true,
  'key-signature': 6,
  'relative-minor': 'D#m',
  'equivalent': 'Gb'
}
const c_sharp_major = {
  'key-name': 'c_sharp_major',
  'has-sharps': true,
  'key-signature': 7,
  'relative-minor': 'A#m',
  'equivalent': 'Db'
}

// KEYS WITH FLATS
const c_flat_major = {
  'key-name': 'c_flat_major',
  'has-sharps': false,
  'key-signature': 7,
  'relative-minor': 'Abm',
  'equivalent': 'B'
}
const g_flat_major = {
  'key-name': 'g_flat_major',
  'has-sharps': false,
  'key-signature': 6,
  'relative-minor': 'Ebm',
  'equivalent': 'F#'
}
const d_flat_major = {
  'key-name': 'd_flat_major',
  'has-sharps': false,
  'key-signature': 5,
  'relative-minor': 'Bbm'
}
const a_flat_major = {
  'key-name': 'a_flat_major',
  'has-sharps': false,
  'key-signature': 4,
  'relative-minor': 'Fm'
}
const e_flat_major = {
  'key-name': 'e_flat_major',
  'has-sharps': false,
  'key-signature': 3,
  'relative-minor': 'Cm'
}
const b_flat_major = {
  'key-name': 'b_flat_major',
  'has-sharps': false,
  'key-signature': 2,
  'relative-minor': 'Gm'
}
// #endregion

// // #region JavaScript Event Keycodes
// const a = 65
// const b = 66
// const c = 67
// const d = 68
// const e = 69
// const f = 70
// const g = 71
// // #endregion

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

let fMajor = [[null, 'F', 'G', 'A', 'B', 'C', 'D', 'E'], 'F', 'G', 'A', 'B' + flat, 'C', 'D', 'E']
// fMajor[0] is without accidentals

let fMinor = [[null, 'F', 'G', 'A', 'B', 'C', 'D', 'E'], 'F', 'G', 'A' + flat, 'B' + flat, 'C', 'D' + flat, 'E' + flat]


// Option to allow follow casing (capitalization of fMinor follows the corresponding roman numeral). Currently it does not

console.log('fMajor: ' + fMajor);
console.log('fMinor: ' + fMinor);

let LinkedList = require('dbly-linked-list')
const list = new LinkedList()
// TODO: pre-create all the scale arrays above
let currentKey = document.getElementById('current-key').value
let currentKeyArray
let currentKeyArrayClean

function setCurrentArrays(arr) {
  currentKeyArray = arr
  currentKeyArrayClean = arr[0]
}
// Constraints:
// MUST STAY WITHIN THE KEY (EG If i stype with capitazlation then...)

// Set my current key to be whatever the input box value is.
if (currentKey === 'C' || currentKey === 'CM') {
  setCurrentArrays(cMajor)
} else if (currentKey === 'c' || currentKey === 'Cm') {
  setCurrentArrays(cMinor)
} else if (currentKey === 'D' || currentKey === 'DM') {
  setCurrentArrays(dMajor)
} else if (currentKey === 'd' || currentKey === 'Dm') {
  setCurrentArrays(dMinor)
} else if (currentKey === 'F' || currentKey === 'FM') {
  setCurrentArrays(fMajor)
} else if (currentKey === 'f' || currentKey === 'Fm') {
  setCurrentArrays(fMinor)
} else {
  console.error('Not a valid key/key doesn\'t exist');
}

console.log('currentKeyArray :', currentKeyArray);
console.log('currentKeyArrayClean :', currentKeyArrayClean);
/* const inputField = document.getElementById('current-key');
// https://www.w3schools.com/jsref/event_onfocus.asp
inputField.onfocus = () => {
  inputField.setAttribute('selected', 'true')
} */

function createNode(num) {
  return new Chord(majorPattern[num], currentKeyArray[num], '')
}

$(document).keyup(function (e) {
  let keyPress = e.key.toUpperCase()
  console.log('keyPress :', keyPress);
  if (keyPress === currentKeyArrayClean[1]) {
    list.insert(createNode(1))
  } else if (keyPress === currentKeyArrayClean[2]) {
    list.insert(createNode(2))
  } else if (keyPress === currentKeyArrayClean[3]) {
    list.insert(createNode(3))
  } else if (keyPress === currentKeyArrayClean[4]) {
    list.insert(createNode(4))
  } else if (keyPress === currentKeyArrayClean[5]) {
    list.insert(createNode(5))
  } else if (keyPress === currentKeyArrayClean[6]) {
    list.insert(createNode(6))
  } else if (keyPress === currentKeyArrayClean[7]) {
    list.insert(createNode(7))
  } else {
    console.error('Must stay within key');
  }
  console.log(list.size)
  console.log(list.getTailNode())
});

/* PLAN:
1) If I type a letter, then I create a node.
2) Remember to use Angular to get the 'dynamic' html
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
