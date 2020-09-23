import axios from 'axios'

const qurl = `https://content.guardianapis.com/search?`
const api = 'api-key=8d8ca8cf-eb89-46b7-8b56-2a4ed8398362'
const filters = `format=json&show-fields=all&show-references=&show-refinements=all&show-tags=all&order-by=newest&page-size=12`

// function for the new page data fetch
export async function newsData(path) {
  const url = `${qurl}${path}&${filters}&${api}&page=1`
  let data = await getdata(url)
  return data
}

// get data from the api
async function getdata(url){
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