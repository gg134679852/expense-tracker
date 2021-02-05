const categoryJson = require('../../models/seeds/category.json').results
const date = []
const amount = []
const categoryArry = []
let categoryIcon = []
let categoryCh_name = []

categoryArry.push(...categoryJson)

categoryArry.forEach(element => {
categoryCh_name.push(element.name_ch)
})

for (i = 0; i <= categoryArry.length; i++) {

  let randomAmount = Math.floor(Math.random() * 1000) + 100
  let randomDate = Math.floor(Math.random() * 28) + 1
  
  amount.push(randomAmount)

  if (randomDate< 10){
    let Date = `2021-02-0${randomDate}`
    date.push(Date)
  }
  if (randomDate >= 10) {
    let Date = `2021-02-${randomDate}`
    date.push(Date)
  }
}

while (true) {
  const categoryRandom = Math.floor(Math.random() * categoryArry.length)
  if (categoryIcon.length === 5) {
    break
  }
  if (!categoryIcon.includes(categoryArry[categoryRandom].icon)) {
    categoryIcon.push(categoryArry[categoryRandom].icon)
  }
}


module.exports = { date, amount, categoryIcon, categoryCh_name}


