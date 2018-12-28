let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')

let app = express()

// // EJS middleware
// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'))

// // Body parser middleware
// app.use(bodyParser.json)
// app.use(bodyParser.urlencoded({
//   extended: false
// }))

// // Static resources will be client folder
// app.use(express.static(path.join(__dirname, 'client')))

app.get('/', function (req, res) {
  res.send('test')
})

app.listen(3000, function () {
  console.log('Server started on Port 3000, Yay!')
})

// let LinkedList = require('dbly-linked-list')
// const list = new LinkedList()
// console.log("list.isEmpty(): " + list.isEmpty())