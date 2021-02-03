const db = require('../../config/mongoose')
const Expense = require('../expense')
const categoryIconRandom = require('../../public/javascripts/categoryRandom').categoryIcon
const categoryNameRandom = require('../../public/javascripts/categoryRandom').categoryName
const date = require('../../public/javascripts/amount&dateRandom').date
const amount = require('../../public/javascripts/amount&dateRandom').amount
const categoryName = []
categoryName.push(...categoryNameRandom)

db.once('open', () => {

  categoryIconRandom.forEach((categoryIcon) => {

    let randomNumber = Math.floor(Math.random() * 5)

    if (categoryIcon === "fas fa-home") {
      Expense.create({
        name: `${categoryName[0].home[randomNumber]}`,
        date: `2021/2/${date[randomNumber]}`,
        amount: `${amount[randomNumber]}$`,
        categoryIcon: categoryIcon,
      })
    }
    if (categoryIcon === "fas fa-shuttle-van") {
      Expense.create({
        name: `${categoryName[1].transportation[0]}`,
        date: `2021/2/${date[randomNumber]}`,
        amount: `${amount[randomNumber]}$`,
        categoryIcon: categoryIcon,
      })
    }
    if (categoryIcon === "fas fa-grin-beam") {
      Expense.create({
        name: `${categoryName[2].entertainment[randomNumber]}`,
        date: `2021/2/${date[randomNumber]}`,
        amount: `${amount[randomNumber]}$`,
        categoryIcon: categoryIcon,
      })
    }
    if (categoryIcon === "fas fa-utensils") {
      Expense.create({
        name: `${categoryName[3].food[randomNumber]}`,
        date: `2021/2/${date[randomNumber]}`,
        amount: `${amount[randomNumber]}$`,
        categoryIcon: categoryIcon,
      })
    }
    if (categoryIcon === "fas fa-pen") {
      Expense.create({
        name: `${categoryName[4].other[randomNumber]}`,
        date: `2021/2/${date[randomNumber]}`,
        amount: `${amount[randomNumber]}$`,
        categoryIcon: categoryIcon,
      })
    }
  })
  console.log('done')
})
  
    
