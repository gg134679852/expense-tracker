
function splitFun (icon, month) {
  let splitIcon = icon.split('=')
  let splitMonth = month.split('=')
  let selectedItem = {
    categoryName: splitIcon[0],
    iconValue: splitIcon[1],
    Month: splitMonth[0],
    monthValue: splitMonth[1]
  }

console.log(selectedItem)
return selectedItem
  }

module.exports ={
  splitFun 
}