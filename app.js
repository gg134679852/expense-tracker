const express = require('express')
const handps = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 3000
const session = require('express-session')
const usePassport = require('./config/passport')
const flash = require('connect-flash')

app.engine('handlebars', handps({defaultLayout:'main'}))
app.set('view engine','handlebars')

require('./config/mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(routes)



app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})