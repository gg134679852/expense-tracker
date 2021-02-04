const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')

router.get('/new',(req,res)=>{
  return res.render('new')
})

router.post('/',(req,res)=>{
 const expense = req.body
  console.log(expense)
  return Expense.create(expense)
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
  Expense.findById(id)
    .then(expense=>{
      Object.assign(expense, req.body)
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

module.exports = router