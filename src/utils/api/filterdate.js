

// function to get the time
export function _time(time_stamp){
  const date = new Date()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const y = date.getFullYear()
  if(time_stamp === 'thismonth') return thismonth(m, y)
  if(time_stamp === 'lastmonth') return lastmonth(m, y)
  if(time_stamp === 'prevmonth') return prevmonth(m, y)
}
  
// function to get the string for this month
function thismonth(m, y) {
  let tm = m < 10 ? `0${m}` : m
  console.log(`from-date=${y}-${tm}-01`)
  return (`from-date=${y}-${tm}-01`)
}

// function to get the string for the last month
function lastmonth(m, y) {
  let month = m === 1 ? 12 : m - 1
  let year = m === 1 ? y - 1 : y
  let monthEnd = dM(month - 1)
  let monthText = month < 10 ? `0${month}` : month
  return (`from-date=${year}-${monthText}-01&to-date=${year}-${monthText}-${monthEnd}`)
}

// function to get the string for the prev month
function prevmonth(m, y) {
  let month = m === 2 ? 12 : m === 1 ? 11 : m - 2
  let year = m === 1 ? y - 1 : y
  let monthEnd = dM(month - 1)
  let monthText = month < 10 ? `0${month}` : month
  return (`to-date=${year}-${monthText}-${monthEnd}`)
}


  // days of the month
  function dM(n) {
    const m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return m[n]
  }
