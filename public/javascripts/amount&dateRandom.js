const date = []
const amount = []
for (i = 0; i <= 5; i++) {
  let randomAmount = Math.floor(Math.random() * 1000) + 100
  let randomDate = Math.floor(Math.random() * 28) + 1
  amount.push(randomAmount)
  if (randomDate< 10){
    let Date = `0${randomDate}`
    date.push(Date)
  }
  if (randomDate >= 10) {
    date.push(randomDate)
  }
  
}
module.exports = { date, amount}


