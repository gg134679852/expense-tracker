const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')
const {splitFun} = require('../../public/javascripts/splitItem')

router.get('/new',(req,res)=>{
  return res.render('new')
})

router.post('/',(req,res)=>{
  const userId = req.user._id
  let { name, date, amount, category, category_ch, categoryIcon, shop} = req.body
  const splitItem = categoryIcon.split('=')
  categoryIcon = splitItem[1]
  category_ch = splitItem[0]
  return Expense.create({ name, date, amount, category, category_ch, categoryIcon, shop, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Expense.findById(id)
    .lean()
    .then((expense) => res.render('edit', { expense}))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const userId = req.user._id
  const id = req.params.id
  let { name, date, amount, category, category_ch, categoryIcon, shop } = req.body
  const splitItem = categoryIcon.split('=')
  categoryIcon = splitItem[1]
  category_ch = splitItem[0]
  Expense.findById(id)
    .then(expense=>{
      Object.assign(expense, { name, date, amount, category, category_ch, categoryIcon, shop, userId })
      return expense.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Expense.findById(id)
    .then(expense => expense.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
router.post('/filter', (req, res) => {
  const {icon,month} = req.body
  const { iconValue, categoryName, Month, monthValue } = splitFun(icon, month)
  const regexpMonth = new RegExp(`\\b${monthValue}\\b`)

  if (iconValue === 'all' && monthValue === 'all') return res.redirect('/')

  if (iconValue !== 'all' && monthValue === 'all'){
    Expense.find({ categoryIcon: { $regex: iconValue, $options: "i" } })
      .lean()
      .then(expense => {
        let totalAmount = 0
        expense.forEach(expense => {
          totalAmount += expense.amount
        })
        res.render('index', { expense, totalAmount, iconValue, categoryName})
      })
      .catch(error => console.error(error))  
  }

  if (iconValue === 'all' && monthValue !== 'all') {
    Expense.find()
    .lean()
    .then(expense => {
      return expense.filter(expense => expense.date.match(regexpMonth))
    })
      .then(expense =>{
        let totalAmount = 0
        expense.forEach(expense => {
          totalAmount += expense.amount
    })
        res.render('index', { expense, totalAmount, Month, monthValue})
  })
 }
  if (icon !== 'all' && month !== 'all') {
    Expense.find({ categoryIcon: { $regex: iconValue, $options: "i" }})
      .lean()
      .then(expense => {
        return expense.filter(expense => expense.date.match(regexpMonth))
      })
      .then(expense => {
        let totalAmount = 0
        expense.forEach(expense => {
          totalAmount += expense.amount
        })
        res.render('index', { expense, totalAmount, iconValue, categoryName, Month, monthValue  })
      })
  }
})

module.exports = router
