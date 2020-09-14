
import axios from 'axios'

export async function getData (){
  
  // const qurl = 'https://content.guardianapis.com'
  // const api = 'api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362'
  
  // let url = `${qurl}/search?section=sports&q=Sports&format=json&show-fields=all&show-refinements=all&show-tags=all&from-date=2020-09-10&page-size=30&${api}`
  
  // url = `https://content.guardianapis.com/search?q=lebron&format=json&show-fields=all&show-refinements=all&show-tags=all&order-by=newest&page-size=30&api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362`
  
  // // url = `https://content.guardianapis.com/search?q=basketball&tag=sports/sports&format=json&show-fields=all&show-refinements=all&show-tags=all&order-by=newest&page-size=30&api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362`

  // // url = `https://content.guardianapis.com/search?q=nba&page-size=30&api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362&order-by=newest`


  // // technology
  // url = `https://content.guardianapis.com/search?section=technology&format=json&show-fields=all&show-refinements=all&show-tags=all&order-by=newest&page-size=30&api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362`

  // // sports
  // url = `https://content.guardianapis.com/search?section=sport&format=json&show-fields=all&show-refinements=all&show-tags=all&order-by=newest&page-size=30&api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362`

  // // world
  // url = `https://content.guardianapis.com/search?section=world&format=json&show-fields=all&show-refinements=all&show-tags=all&order-by=newest&page-size=30&api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362`

  // // science
  // url = `https://content.guardianapis.com/search?section=science&format=json&show-fields=all&show-refinements=all&show-tags=all&order-by=newest&page-size=30&api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362`

  // // business
  // url = `https://content.guardianapis.com/search?section=business&format=json&show-fields=all&show-refinements=all&show-tags=all&order-by=newest&page-size=30&api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362`


  // url = `https://content.guardianapis.com/search?section=food&format=json&show-fields=all&show-refinements=all&show-tags=all&order-by=newest&page-size=30&api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362`

  // let a = `https://content.guardianapis.com/search?`
  // let b = `&format=json&show-fields=all&show-refinements=all&show-tags=all&order-by=newest&page-size=50&api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362`

  // url = `${a}section=education&${b}&page=1`


  // url = `https://content.guardianapis.com/search?page-size=50&show-fields=all&show-tags=all&api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362&order-by=newest&page=5`

  // url = `https://content.guardianapis.com/search?q=nba&page-size=50&show-fields=all&show-tags=all&api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362&order-by=newest&page=5`
  
  // let data;
  // await axios.get(url)
  // .then(res => {
  //   console.log(res.data.response)
  //   data = res.data
  // })
  // .catch(err => {
  //   console.log(err)
  // })
  // return data

  // const environment = await reqData('section=environment')
  // const usnews = await reqData('section=us-news')
  // const technology = await reqData('section=technology')
  // const science = await reqData('section=science')
  // const opinion = await reqData('section=commentisfree')
  // const politics = await reqData('section=politics')
  // const education = await reqData('section=education')
  // const world = await reqData('section=world&tag=world/coronavirus-outbreak')

  const wildlife = await reqData('section=environment&tag=environment/wildlife')
  const marinelife = await reqData('section=environment&tag=environment/marine-life')
  const climatechange = await reqData('section=environment&tag=environment/climate-change')
  const farming = await reqData('section=environment&tag=environment/farming')
  const fossilfuels = await reqData('section=environment&tag=environment/fossil-fuels')
  
  let environment = sortData(wildlife, marinelife, climatechange, farming, fossilfuels)

  // return {wildlife, marinelife, climatechange, farming, fossilfuels}
  return {environment}
}


function sortData(a, b, c, d, e){
  let a1 = filterTo5(a)
  let b1 = filterTo5(filterB(a, b))
  let c1 = filterTo5(filterC(a, b, c))
  let d1 = filterTo5(filterD(a, b, c, d))
  let e1 = filterTo5(filterE(a, b, c, d, e))
  return {a1, b1, c1, d1, e1}
}

function filterE(a, b, c, d, e) {
  let d1 = filterD(a, b, c, d)
  let e1 = filterB(d1, e)
  return e1
}

function filterD (a, b, c, d){
  let c1 = filterC(a, b, c)
  let d1 = filterB(c1, d)
  return d1
}

function filterC (a, b, c){
  let c1 = filterB(a, c)
  let c2 = filterB(b, c1)
  return c2
}

function filterB(a, b){
  return b.filter((val, i) => !a.includes(val))
}

function filterTo5(data){
  return data.filter((d, i) => {
    if(i<5) return d
  })
}






async function reqData (path) {
  const qurl = `https://content.guardianapis.com/search?`
  const api = 'api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362'
  const filters = `format=json&show-fields=all&show-refinements=all&show-tags=all&order-by=newest&page-size=10`

  const url = `${qurl}${path}&${filters}&${api}&page=1`

  let data;
  await axios.get(url)
    .then(res => {
      data = res.data.response.results
    })
    .catch(err => {
      console.log(err)
    })
  return data
}