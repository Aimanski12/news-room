import {envi, main,tech, science, edu, covid, politics} from './newsapi'
import {world, usnews, uknews, ausnews, asia, amnews, africa, europe} from './worldapi'
import {sports, sport, football, basketball, baseball, golf, tennis} from './sports'
import {moneyall, money, business, investment, realestate, work} from './moneydata'
import {lifestyleall, lifestyle, fashion, books, food, travel} from './lifestyle'
import {filmAll, film, media, stage, music} from './films'
import {cultureAll, culture, society, art} from './culture'


import {newsData} from './fetchApi'

export async function getData(endpoint){

  // let data = await newsByDate('section=sport&tag=sport/basketball','from-date=2020-08-01')
  // let data = await newsData('section=money')
  // console.log(data)
  

  let data;
  switch(endpoint) {
    case 'envi': data = await envi();
      break
    case 'main': data = await main();
      break
    case 'tech': data = await tech();
      break
    case 'science': data = await science();
      break
    case 'edu': data = await edu();
      break
    case 'covid': data = await covid();
      break
    case 'politics': data = await politics();
      break
    case 'world': data = await world();
      break
    case 'usnews': data = await usnews();
      break
    case 'uknews': data = await uknews();
      break
    case 'ausnews': data = await ausnews();
      break
    case 'asia': data = await asia();
      break
    case 'africa': data = await africa();
      break
    case 'europe': data = await europe();
      break
    case 'amnews': data = await amnews();
      break
    case 'sportAll': data = await sports();
      break
    case 'sports': data = await sport();
      break
    case 'football': data = await football();
      break
    case 'basketball': data = await basketball();
      break
    case 'baseball': data = await baseball();
      break
    case 'golf': data = await golf();
      break
    case 'tennis': data = await tennis();
      break
    case 'moneyall': data = await moneyall();
      break
    case 'money': data = await money();
      break
    case 'business': data = await business();
      break
    case 'invest': data = await investment();
      break
    case 'realestate': data = await realestate();
      break
    case 'work': data = await work();
      break
    case 'lifestyleall': data = await lifestyleall();
      break
    case 'lifestyle': data = await lifestyle();
      break
    case 'fashion': data = await fashion();
      break
    case 'books': data = await books();
      break
    case 'food': data = await food();
      break
    case 'travel': data = await travel();
      break
    case 'filmall': data = await filmAll();
      break
    case 'film': data = await film();
      break
    case 'media': data = await media();
      break
    case 'stage': data = await stage();
      break
    case 'music': data = await music();
      break
    case 'cultureAll': data = await cultureAll();
      break
    case 'culture': data = await culture();
      break
    case 'society': data = await society();
      break
    case 'art': data = await art();
      break

  }
  
  return data
}







