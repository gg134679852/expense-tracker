const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')

router.get('/home',(req,res)=>{
  Expense.find({ category_ch: { $regex:'家居物業', $options: "i" } })
    .lean()
    .then(expense => {
      let totalAmount = 0
      expense.forEach(expense => {
        totalAmount += expense.amount
      })
      res.render('index', { expense, totalAmount })
    })
    .catch(error => console.error(error))
})
router.get('/transportation', (req, res) => {
  Expense.find({ category_ch: { $regex: '交通出行', $options: "i" } })
    .lean()
    .then(expense => {
      let totalAmount = 0
      expense.forEach(expense => {
        totalAmount += expense.amount
      })
      res.render('index', { expense, totalAmount })
    })
    .catch(error => console.error(error))
})
router.get('/entertainment', (req, res) => {
  Expense.find({ category_ch: { $regex: '休閒娛樂', $options: "i" } })
    .lean()
    .then(expense => {
      let totalAmount = 0
      expense.forEach(expense => {
        totalAmount += expense.amount
      })
      res.render('index', { expense, totalAmount })
    })
    .catch(error => console.error(error))
})
router.get('/food', (req, res) => {
  Expense.find({ category_ch: { $regex: '餐飲食品', $options: "i" } })
    .lean()
    .then(expense => {
      let totalAmount = 0
      expense.forEach(expense => {
        totalAmount += expense.amount
      })
      res.render('index', { expense, totalAmount })
    })
    .catch(error => console.error(error))
})
router.get('/other', (req, res) => {
  Expense.find({ category_ch: { $regex: '其他', $options: "i" } })
    .lean()
    .then(expense => {
      let totalAmount = 0
      expense.forEach(expense => {
        totalAmount += expense.amount
      })
      res.render('index', { expense, totalAmount })
    })
    .catch(error => console.error(error))
})
module.exports = router