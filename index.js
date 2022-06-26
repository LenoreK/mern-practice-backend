/* 
Directions for Backend:
1. npm init
2. npm install express
3. npm install cors
4. npm install -g nodemon (I am installing this globally)
5. npm i dotenv
*/

require('dotenv').config()
const express = require('express')
const app = express()

app.unsubscribe('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)