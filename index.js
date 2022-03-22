 //Aqui é o index.js com as requisiçoes das extençoes.
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false})) 
app.use(express.json())
app.listen(21262, () => {
  console.log('Express started at http://localhost:21262')
})



// package.json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "Primeira API",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.2",
    "cors": "^2.8.5",
    "express": "^4.17.3",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.15"
  }
}
