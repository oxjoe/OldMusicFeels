/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable camelcase */
/* eslint-disable no-multiple-empty-lines */
import '../views/index.css';
// import $ from "jquery";
// https://www.npmjs.com/package/webpack-jquery-ui
require('webpack-jquery-ui');
require('webpack-jquery-ui/css');  //ommit, if you don't want to load basic css theme
// #region of scales.js
const c_major = {
  'key-name': 'c_major',
  'has-sharps': null,
  'key-signature': 0,
  'relative-minor': 'Am'
}

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
const rn_ONE = '\u2160'
const rn_TWO = '\u2161'
const rn_THREE = '\u2162'
const rn_FOUR = '\u2163'
const rn_FIVE = '\u2164'
const rn_SIX = '\u2165'
const rn_SEVEN = '\u2166'

const rn_one = '\u2170'
const rn_two = '\u2171'
const rn_three = '\u2172'
const rn_four = '\u2173'
const rn_five = '\u2174'
const rn_six = '\u2175'
const rn_seven = '\u2176'

// lookup qualities: http://openmusictheory.com/triads.html
const natural = '\u266E'
const sharp = '\u266F'
const flat = '\u266D'

const diminished = '\u00B0'
// #endregion

let LinkedList = require('dbly-linked-list')
const list = new LinkedList()

// 1) Scrape through and get chord names
const noteNameArray = ['A', 'C#', 'Dadd9']
document.getElementById('chord-0').querySelector('.name').innerHTML = noteNameArray[0]
document.getElementById('chord-1').querySelector('.name').innerHTML = noteNameArray[1]
document.getElementById('chord-2').querySelector('.name').innerHTML = noteNameArray[2]

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



console.log('list.isEmpty(): ' + list.isEmpty())

// 3) Add the roman numeral
const noteQualityArray = [rn_ONE, rn_three, rn_four]

// document.getElementById('chord-2').querySelector('.roman-num').innerHTML = noteQualityArray[2]

document.getElementById('current-key').value = 'Am'

$(document).ready(function () {
  $(".chords-container #chord-0 .roman-num").html(noteQualityArray[0])
  $(".chords-container #chord-1 .roman-num").html(noteQualityArray[1])
  $(".chords-container #chord-2 .roman-num").html(noteQualityArray[2])


  $('#chord-0').remove
});