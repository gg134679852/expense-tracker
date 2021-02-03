const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({

  name: {
    type: String,
    require: 'true'
  },
  date: {
    type: String,
    require: 'true'
  },
  amount: {
    type: String,
    require: 'true'
  },
  categoryIcon: {
    type: String,
  }
})

module.exports = mongoose.model('Expense', expenseSchema)