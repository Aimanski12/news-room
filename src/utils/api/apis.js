import {envi, main,tech, science, edu, covid, politics} from './newsapi'
import {world, usnews, uknews, ausnews, asia, amnews, africa, europe} from './worldapi'
import {sports} from './sports'

import {newsData, newsByDate} from './fetchApi'

export async function getData(endpoint){

  let data = await newsByDate('section=sport&tag=sport/nba','from-date=2020-09-01')
  console.log(data)

  // let data;
  // switch(endpoint) {
  //   case 'envi': data = await envi();
  //     break
  //   case 'main': data = await main();
  //     break
  //   case 'tech': data = await tech();
  //     break
  //   case 'science': data = await science();
  //     break
  //   case 'edu': data = await edu();
  //     break
  //   case 'covid': data = await covid();
  //     break
  //   case 'politics': data = await politics();
  //     break
  //   case 'world': data = await world();
  //     break
  //   case 'usnews': data = await usnews();
  //     break
  //   case 'uknews': data = await uknews();
  //     break
  //   case 'ausnews': data = await ausnews();
  //     break
  //   case 'asia': data = await asia();
  //     break
  //   case 'africa': data = await africa();
  //     break
  //   case 'europe': data = await europe();
  //     break
  //   case 'amnews': data = await amnews();
  //     break
  //   case 'sports': data = await sports();
  //     break
  // }
  
  // return data
}







