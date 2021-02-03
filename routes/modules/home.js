const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')

router.get('/',(req,res)=>{
  Expense.find()
  .lean()
  .then(expense => res.render('index', {expense}))
  .catch(error => console.error(error))
})

module.exports = router