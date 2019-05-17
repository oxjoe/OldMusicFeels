/* eslint-disable no-use-before-define */
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

// Remember that I'm describing the quality of the Chords! NOT THE NOTES OF THE SCALE.

const cClean = [null, 'C', 'D', 'E', 'F', 'G', 'A', 'B']
// https://www.basicmusictheory.com/c-major-triad-chords
const cMajor = [cClean, 'C', 'Dm', 'Em', 'F', 'G', 'Am', 'B' + diminished]
// https://www.basicmusictheory.com/c-minor-triad-chords
const cMinor = [cClean, 'Cm', 'D' + diminished, 'E' + flat, 'Fm', 'Gm', 'A' + flat, 'B' + flat]

// Standard scale to make the major and minor scales array's clean again for when inputting chords. For example, for inputting scale degree 4 for F major you would just have to type B and not Bb.
const fClean = [null, 'F', 'G', 'A', 'B', 'C', 'D', 'E']
const fMajor = [fClean, 'F', 'Gm', 'Am', 'B' + flat, 'C', 'Dm', 'E' + diminished]
const fMinor = [fClean, 'Fm', 'G' + diminished, 'A' + flat, 'B' + flat + 'm', 'Cm', 'D' + flat, 'E' + flat]

console.log('fClear :', fClean);
console.log('fMajor: ' + fMajor);
console.log('fMinor: ' + fMinor);

let currentKey = document.getElementById('current-key').value
let currentKeyArray
let currentKeyArrayClean

function setCurrentArrays(arr) {
  currentKeyArray = arr
  currentKeyArrayClean = arr[0]
}

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