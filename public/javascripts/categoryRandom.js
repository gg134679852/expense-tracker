const categoryJson = require('../../models/seeds/category.json').results
const categoryArry = []
let categoryIcon = []
let categoryCh_name = []
const categoryName = [{ 
home: ['繳房租', '繳電費', '繳水費', '買家具', '買廚具'],transportation: ['儲值悠遊卡'],
entertainment: ['看電影', '買遊戲', '買書', '跟朋友出去玩', '買模型'],
food: ['早餐', '午餐', '晚餐', '點心', '宵夜'],
other: ['購買線上課程', '補習費', '文具', '看醫生', '修電腦']
}
]

categoryArry.push(...categoryJson)

while (true) {
  const categoryRandom = Math.floor(Math.random() * categoryArry.length)
  if (categoryIcon.length === 5){
    break
  }
  if (!categoryIcon.includes(categoryArry[categoryRandom].icon)){
    categoryIcon.push(categoryArry[categoryRandom].icon)
  }
}

categoryArry.forEach(element => {
  categoryCh_name.push(element.name_ch)
})


 module.exports = { categoryIcon, categoryName, categoryCh_name}