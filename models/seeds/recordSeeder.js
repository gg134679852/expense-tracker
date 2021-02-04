const db = require('../../config/mongoose')
const Expense = require('../expense')
const categoryIconRandom = require('../../public/javascripts/categoryRandom').categoryIcon
const categoryNameRandom = require('../../public/javascripts/categoryRandom').categoryName
const categoryCh_NameRandom = require('../../public/javascripts/categoryRandom').categoryCh_name
const date = require('../../public/javascripts/amount&dateRandom').date
const amount = require('../../public/javascripts/amount&dateRandom').amount

const categoryName = []
categoryName.push(...categoryNameRandom)

const categoryType = Object.keys(categoryName[0])

db.once('open', () => {

  categoryIconRandom.forEach((categoryIcon) => {

    let randomNumber = Math.floor(Math.random() * 5)

    if (categoryIcon === "fas fa-home") {
      Expense.create({
        name: `${categoryName[0].home[randomNumber]}`,
        category_ch: `${categoryCh_NameRandom[0]}`,
        date: `2021-02-${date[randomNumber]}`,
        amount: amount[randomNumber],
        category: categoryType[0],
        categoryIcon: categoryIcon,
      })
    }
    if (categoryIcon === "fas fa-shuttle-van") {
      Expense.create({
        name: `${categoryName[0].transportation[0]}`,
        category_ch: `${categoryCh_NameRandom[1]}`,
        date: `2021-02-${date[randomNumber]}`,
        amount: amount[randomNumber],
        category: categoryType[1],
        categoryIcon: categoryIcon,
      })
    }
    if (categoryIcon === "fas fa-grin-beam") {
      Expense.create({
        name: `${categoryName[0].entertainment[randomNumber]}`,
        category_ch: `${categoryCh_NameRandom[2]}`,
        date: `2021-02-${date[randomNumber]}`,
        amount: amount[randomNumber],
        category: categoryType[2],
        categoryIcon: categoryIcon,
      })
    }
    if (categoryIcon === "fas fa-utensils") {
      Expense.create({
        name: `${categoryName[0].food[randomNumber]}`,
        category_ch: `${categoryCh_NameRandom[3]}`,
        date: `2021-02-${date[randomNumber]}`,
        amount: amount[randomNumber],
        category: categoryType[3],
        categoryIcon: categoryIcon,
      })
    }
    if (categoryIcon === "fas fa-pen") {
      Expense.create({
        name: `${categoryName[0].other[randomNumber]}`,
        category_ch: `${categoryCh_NameRandom[4]}`,
        date: `2021-02-${date[randomNumber]}`,
        amount: amount[randomNumber],
        category: categoryType[4],
        categoryIcon: categoryIcon,
      })
    }
  })
  console.log('done')
})
  

