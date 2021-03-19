const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')

router.get('/new',(req,res)=>{
  return res.render('new')
})

router.post('/',(req,res)=>{
  let { name, date, amount, category, category_ch, categoryIcon, shop} = req.body
  const splitItem = categoryIcon.split('=')
  categoryIcon = splitItem[1]
  category_ch = splitItem[0]
  return Expense.create({ name, date, amount, category, category_ch, categoryIcon, shop })
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
  const id = req.params.id
  let { name, date, amount, category, category_ch, categoryIcon, shop } = req.body
  const splitItem = categoryIcon.split('=')
  categoryIcon = splitItem[1]
  category_ch = splitItem[0]
  Expense.findById(id)
    .then(expense=>{
      Object.assign(expense, { name, date, amount, category, category_ch, categoryIcon, shop })
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
  const regexp = new RegExp(`\\b${month}\\b`)
  
  if (icon.length === 0 && month.length === 0) return res.redirect('/')

  if (icon.length !== 0 && month.length === 0){
    Expense.find({ categoryIcon: { $regex: icon, $options: "i" } })
      .lean()
      .then(expense => {
        let totalAmount = 0
        expense.forEach(expense => {
          totalAmount += expense.amount
        })
        res.render('index', { expense, totalAmount })
      })
      .catch(error => console.error(error))  
  }

  if (icon.length === 0 && month.length !== 0) {
    Expense.find()
    .lean()
    .then(expense => {
       return expense.filter(expense => expense.date.match(regexp))
    })
      .then(expense =>{
      let totalAmount = 0
        expense.forEach(expense => {
          totalAmount += expense.amount
    })
        res.render('index', { expense, totalAmount })
  })
 }
  if (icon.length !== 0 && month.length !== 0) {
    Expense.find({ categoryIcon: { $regex: icon, $options: "i" }})
      .lean()
      .then(expense => {
        return expense.filter(expense => expense.date.match(regexp))
      })
      .then(expense => {
        let totalAmount = 0
        expense.forEach(expense => {
          totalAmount += expense.amount
        })
        res.render('index', { expense, totalAmount })
      })
  }
})

module.exports = router