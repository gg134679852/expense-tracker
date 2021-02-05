const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({

  Name: {
    type: String,
    require: 'true'
  },
  Icon: {
    type: String,
    require: 'true'
  }
})

module.exports = mongoose.model('Category', categorySchema)