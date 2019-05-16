// Note Quality Unicode lookup qualities: http://openmusictheory.com/triads.html
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
export { currentKeyArray, currentKeyArrayClean, flat, natural, sharp, diminished }

const flat = '\u266D'
const natural = '\u266E'
const sharp = '\u266F'
const diminished = '\u00B0'

const cMajor = [null, 'C', 'D', 'E', 'F', 'G', 'A', 'B']
const cMinor = [null, 'C', 'D', 'E' + flat, 'F', 'G', 'A' + flat, 'B' + flat]

// Standard scale to make the major and minor scales array's clean again.
let fClear = [null, 'F', 'G', 'A', 'B', 'C', 'D', 'E']

let fMajor = [fClear, 'F', 'G', 'A', 'B' + flat, 'C', 'D', 'E']
// fMajor[0] is without accidentals

let fMinor = [fClear, 'F', 'G', 'A' + flat, 'B' + flat, 'C', 'D' + flat, 'E' + flat]
console.log('fClear :', fClear);
console.log('fMajor: ' + fMajor);
console.log('fMinor: ' + fMinor);



const gMajorNames = [null, 'G', 'A', 'B', 'C', 'D', 'E', 'F' + sharp]

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