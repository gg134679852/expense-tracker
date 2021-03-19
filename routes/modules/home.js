const express = require('express')
const moment = require('moment')
const router = express.Router()
const Expense = require('../../models/expense')

router.get('/',(req,res)=>{
  Expense.find()
  .lean()
    .then(expense => {
      let totalAmount = 0
      expense.forEach(expense => {
        totalAmount += expense.amount
      })
      res.render('index', { expense, totalAmount})
    })
  .catch(error => console.error(error))
})

module.exports = router