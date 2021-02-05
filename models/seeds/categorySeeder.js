const db = require('../../config/mongoose')
const Category = require('../category')
const categoryList = require('./category.json')
const categorys = categoryList.results


db.once('open',()=>{

  let dbData = []

  categorys.forEach(category=> {
    dbData.push(category)
  })
  
  Category.create(dbData)

  .then(()=>{
    console.log('done')
    return db.close()
  })
})
