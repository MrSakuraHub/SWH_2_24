const express = require('express')
const cors = require('cors')
const { urlencoded } = express
const bodyParser = require('body-parser')
const indexRouter = require('./routes')
const { mongoInit } = require('./config/dbConnection')

const app = express()

mongoInit()

app.use(cors())
app.use(bodyParser.json())
app.use(urlencoded({ extended: false }))
app.use('/api/v1', indexRouter)

module.exports = app
