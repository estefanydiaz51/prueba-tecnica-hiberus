function getDaysBetweenDates(date1, date2) {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  const diffMs = d2.getTime() - d1.getTime()
  // 1 dia tiene 86400000 ms
  return Math.floor(diffMs / 86400000)
}

console.log(getDaysBetweenDates('2023-08-01', '2023-08-15'))
console.log(getDaysBetweenDates('2024-01-01', '2023-12-25'))
console.log(getDaysBetweenDates('2022-05-01', '2022-05-01'))

module.exports = getDaysBetweenDates
