let express = require('express')
let bodyParser = require('body-parser')
let path = require('path')

let app = express()

// Body Parser Middleware
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({
  extended: false
}))

// Static Resources will be client folder
app.use(express.static(path.join(__dirname, 'client')))


// app.get('/', function (req, res) {
//   res.send('Test')
// })

app.listen(3000, function () {
  console.log('Server started on Port 3000');
})


// let LinkedList = require('dbly-linked-list')
// const list = new LinkedList()
// console.log("list.isEmpty(): " + list.isEmpty())