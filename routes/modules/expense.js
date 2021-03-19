const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')

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
  let {icon,month} = req.body
  let splitIcon = icon.split('=')
  let splitMonth = month.split('=')
  let selectedMonth = ''
  let selectedMonthValue = ''
  let selectedCategory = ''
  let selectedCategoryValue = ''
  icon = splitIcon[1]
  month = splitMonth [1]
  selectedMonth = splitMonth[0]
  selectedMonthValue = splitMonth[1]
  selectedCategory = splitIcon[0]
  selectedCategoryValue = splitIcon[1]
  const regexpMonth = new RegExp(`\\b${month}\\b`)
  if (icon === 'all' && month === 'all') return res.redirect('/')

  if (icon !== 'all' && month === 'all'){
    Expense.find({ categoryIcon: { $regex: icon, $options: "i" } })
      .lean()
      .then(expense => {
        let totalAmount = 0
        expense.forEach(expense => {
          totalAmount += expense.amount
        })
        res.render('index', { expense, totalAmount, selectedCategory, selectedCategoryValue})
      })
      .catch(error => console.error(error))  
  }

  if (icon === 'all' && month !== 'all') {
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
        res.render('index', { expense, totalAmount, selectedMonth, selectedMonthValue})
  })
 }
  if (icon !== 'all' && month !== 'all') {
    Expense.find({ categoryIcon: { $regex: icon, $options: "i" }})
      .lean()
      .then(expense => {
        return expense.filter(expense => expense.date.match(regexpMonth))
      })
      .then(expense => {
        let totalAmount = 0
        expense.forEach(expense => {
          totalAmount += expense.amount
        })
        res.render('index', { expense, totalAmount, selectedCategory, selectedCategoryValue, selectedMonth, selectedMonthValue  })
      })
  }
})

module.exports = router