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
    type: Number,
    require: 'true'
  },
  category: {
    type: String,
    require: 'true'
  },
  category_ch: {
    type: String,
    require: 'true'
  },
  categoryIcon: {
    type: String,
    require: 'true'
  },
  shop:{
    type: String
  }
})

module.exports = mongoose.model('Expense', expenseSchema)