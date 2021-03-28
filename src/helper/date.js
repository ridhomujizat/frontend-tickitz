const month = ['January', 'Febuary', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December']

const MonthUpComing = (mountMonth) => {
  const current = new Date()
  const resultMonth = []
  for (let i = 0; i < mountMonth; i++) {
    current.setMonth(current.getMonth() + 1)
    const nextMonth = current.getMonth()
    resultMonth.push(month[nextMonth])
  }
  return resultMonth
}

const parsingDMY = (value = new Date()) => {
  const date = new Date(value)
  const monthIndex = date.getMonth().toLocaleString()
  const day = String(date).slice(8, 10)
  const year = date.getFullYear()
  const dateResult = `${month[monthIndex]} ${day}, ${year}`
  return dateResult
}

const parsingDM = (value = new Date()) => {
  const date = new Date(value)
  const monthIndex = date.getMonth().toLocaleString()
  const day = String(date).slice(8, 10)
  const dateResult = `${day} ${month[monthIndex].slice(0, 3)}`
  return dateResult
}
export { MonthUpComing, parsingDMY, parsingDM, month }
