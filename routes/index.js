const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const expense = require('./modules/expense')
const category = require('./modules/category')

router.use('/', home)
router.use('/expense-tracker', expense)
router.use('/category', category)


module.exports = router