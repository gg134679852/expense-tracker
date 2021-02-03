const db = require('../../config/mongoose')
const Categor = require('../category')
const categoryList = require('./category.json')
const categorys = categoryList.results


db.once('open',()=>{
  categorys.forEach(category=> {
    Categor.create({
      categorName:category.name,
      categoryIcon: category.icon,
    })
    console.log('done')
  });
})
