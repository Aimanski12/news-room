
import {qurl, api, getdata} from './fetchApi'


export async function searchNews(query) {
  const formats = '&show-fields=all&page-size=40'
  const url = `${qurl}q=${query}&${api}${formats}`
  const data = await getdata(url)
  return data
}





