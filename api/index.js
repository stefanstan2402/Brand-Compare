const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const brands = require('./routes/get_brands')
app.use('/requests', brands)

module.exports = app