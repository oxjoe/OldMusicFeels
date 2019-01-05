import style from "./views/index.css";
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

// alert('test')
// let express = require('express')
// let bodyParser = require('body-parser')
// let path = require('path')
// // https://express-validator.github.io/docs/index.html
// const {
//   check,
//   validationResult
// } = require('express-validator/check')
// const interact = require('interactjs')

// // NOTES: Need to setup input validation

// let app = express()

// // // EJS middleware
// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'))

// // Body parser middleware
// app.use(bodyParser.json)
// app.use(bodyParser.urlencoded({
//   extended: false
// }))

// // // probably not needed [Static resources will be client folder]
// // app.use(express.static(path.join(__dirname, 'client')))

// app.get('/', function (req, res) {
//   res.render('testEJS')
// })

// app.listen(3000, function () {
//   console.log('Server started on Port 3000, Yay!')
// })

// // let LinkedList = require('dbly-linked-list')
// // const list = new LinkedList()
// // console.log("list.isEmpty(): " + list.isEmpty())