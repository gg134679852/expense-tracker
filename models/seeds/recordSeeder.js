const db = require('../../config/mongoose')
const Expense = require('../expense')
const expenseData = require('../../public/javascripts/expenseData').dataBase

db.once('open', () => {
  Expense.create(expenseData)
  .then(()=>{
    console.log('done')
    return db.close()
  })
})
  

