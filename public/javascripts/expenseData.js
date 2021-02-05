const date = require('./expenseDataRandom').date
const amount = require('./expenseDataRandom').amount
const categoryIcon = require('./expenseDataRandom').categoryIcon
const categoryCh_name = require('./expenseDataRandom').categoryCh_name

const categoryName = {
  home: ['繳房租', '繳電費', '繳水費', '買家具', '買廚具'], transportation: ['儲值悠遊卡'],
  entertainment: ['看電影', '買遊戲', '買書', '跟朋友出去玩', '買模型'],
  food: ['早餐', '午餐', '晚餐', '點心', '宵夜'],
  other: ['購買線上課程', '補習費', '文具', '看醫生', '修電腦']
}
const categoryType = Object.keys(categoryName)

let dataBase = []

categoryIcon.forEach((categoryIcon) => {

let randomNumber = Math.floor(Math.random() * 5)

if (categoryIcon === "fas fa-home") {
  dataBase.push({
    name: `${categoryName.home[randomNumber]}`,
    category_ch: categoryCh_name[0],
    date: date[randomNumber],
    amount: amount[randomNumber],
    category: categoryType[0],
    categoryIcon: categoryIcon,
  })
}
if (categoryIcon === "fas fa-shuttle-van") {
  dataBase.push({
    name: `${categoryName.transportation[randomNumber]}`,
    category_ch: categoryCh_name[1],
    date: date[randomNumber],
    amount: amount[randomNumber],
    category: categoryType[1],
    categoryIcon: categoryIcon,
  })
}
if (categoryIcon === "fas fa-grin-beam") {
  dataBase.push({
    name: `${categoryName.entertainment[randomNumber]}`,
    category_ch: categoryCh_name[2],
    date: date[randomNumber],
    amount: amount[randomNumber],
    category: categoryType[2],
    categoryIcon: categoryIcon,
  })
}
if (categoryIcon === "fas fa-utensils") {
  dataBase.push({
    name: `${categoryName.food[randomNumber]}`,
    category_ch: categoryCh_name[3],
    date: date[randomNumber],
    amount: amount[randomNumber],
    category: categoryType[3],
    categoryIcon: categoryIcon,
  })
}
if (categoryIcon === "fas fa-pen") {
  dataBase.push({
    name: `${categoryName.other[randomNumber]}`,
    category_ch: categoryCh_name[4],
    date: date[randomNumber],
    amount: amount[randomNumber],
    category: categoryType[4],
    categoryIcon: categoryIcon,
  })
 }
})


module.exports = {dataBase}