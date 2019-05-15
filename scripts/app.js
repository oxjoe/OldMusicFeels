/* eslint-disable no-multiple-empty-lines */
/* eslint-disable camelcase */
import '../views/index.css'
// import $ from "jquery";
// https://www.npmjs.com/package/webpack-jquery-ui
require('webpack-jquery-ui')
require('webpack-jquery-ui/css') // ommit, if you don't want to load basic css theme
// #region of scales.js
const cMajorArray = [null, 'C', 'D', 'E', 'F', 'G', 'A', 'B']

// KEYS WITH SHARPS
const g_major = {
  'key-name': 'g_major',
  'has-sharps': true,
  'key-signature': 1,
  'relative-minor': 'Em'
}
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
const f_major = {
  'key-name': 'f_major',
  'has-sharps': false,
  'key-signature': 1,
  'relative-minor': 'Dm'
}

// #endregion

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
const natural = '\u266E'
const sharp = '\u266F'
const flat = '\u266D'

const diminished = '\u00B0'
// #endregion


// PLAN: DO logic first. Then Angular it?

// JavaScript Event Keycodes
const a = 65
const b = 66
const c = 67
const d = 68
const e = 69
const f = 70
const g = 71

let LinkedList = require('dbly-linked-list')
const list = new LinkedList()
// If current key is in C then...
// pre-create all the scale arrays above
let currentKey = document.getElementById('current-key').value



$(document).keydown(function (e) {
  if (e.keyCode == c) {
    // create node function
  } else if (e.keyCode == d) {
  }
});



/* PLAN:
Make input + buttom to submit a note name.
U types in C
C pops up with I above its head
U types in G
G pops up with V above its head
  G cannot be on top of C Items cannot stack
If U clicks and drag G to after C, then make C arrow appear with discription.
If U clicks and drag G to before C, then make G arrow appear with discription. */


/* PLAN:
Make a new branch (in case I revert back to jquery)
Work with that branch for Java Spring and Angular
  Do Backend First
    Have some list of common chord movements OR song chords that will be stored in Database and can be added/removed
 */
// assume noteNameArray[0] is typed in first input
// then [1] is second input
const noteNameArray = ['C', 'G', 'Dadd9']
const noteQualityArray = [rnONE, rnFIVE, rnTWO]

// Adds each note name to the array
for (let index = 0; index < noteNameArray.length; index++) {
  list.insert({
    'noteName': noteNameArray[index]
  })
}
console.log(list.getHeadNode().getData())
// test: {noteName: "A"}
console.log(list.getTailNode().getData())
// test: {noteName: "Dadd9"}


$(document).ready(function () {
  $('.chords-container #chord-0 .name').html(noteNameArray[0])
  $('.chords-container #chord-1 .name').html(noteNameArray[1])
  $('.chords-container #chord-2 .name').html(noteNameArray[2])

  $('.chords-container #chord-0 .roman-num').html(noteQualityArray[0])
  $('.chords-container #chord-1 .roman-num').html(noteQualityArray[1])
  $('.chords-container #chord-2 .roman-num').html(noteQualityArray[2])

  // $('.node').remove()
  $('.description-container').remove()
})

