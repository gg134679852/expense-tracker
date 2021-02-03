const express = require('express')
const handps = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
const app = express()

app.engine('handlebars', handps({defaultLayout:'main'}))
app.set('view engine','handlebars')

require('./config/mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(routes)



app.listen(3000,()=>{
  console.log('localhost:3000')
})