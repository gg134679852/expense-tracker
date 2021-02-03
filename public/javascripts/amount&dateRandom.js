 const date = []
 const amount = []

  for (i = 0; i <= 5; i++) {
    amount.push(Math.floor(Math.random() * 1000) + 100)
    date.push(Math.floor(Math.random() * 28) + 1)
  }

module.exports = { date, amount}


