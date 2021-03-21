const express = require('express')
const moment = require('moment')
const router = express.Router()
const Expense = require('../../models/expense')

router.get('/',(req,res)=>{
  const userId = req.user._id
  Expense.find({ userId })
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