import {sortData} from './sortData'
import {newsData} from './fetchApi'
import {_time} from './filterdate'


export async function sports() {
  const r = 'section='
  const a = 'section=sport&tag='
  const headline = await newsData(`${r}sport`)
  const soccer = await newsData(`${r}football`)
  const nba = await newsData(`${a}sport/nba`)
  const tennis = await newsData(`${a}sport/tennis`)
  const golf = await newsData(`${a}sport/golf`)
  const world = await newsData(`${r}world&tag=sport/sport`)
  
  return sortData(headline, soccer, nba, tennis, golf, world)
}

export async function sport() {
  const r = 'section=sport'
  return getData(r)
}

export async function football(){
  const r = 'section=football'
  return getData(r)
}

export async function basketball() {
  const r = 'section=sport&tag=sport/basketball'
  return getData(r)
}

export async function baseball() {
  const r = 'section=sport&tag=sport/mlb'
  return getData(r)
}

export async function golf() {
  const r = 'section=sport&tag=sport/golf'
  return getData(r)
}

export async function tennis() {
  const r = 'section=sport&tag=sport/tennis'
  return getData(r)
}

async function getData(r) {
  const recent = await newsData(`${r}`)
  const lastmonth = await newsData(`${r}&${_time('lastmonth')}`)
  const prevmonth = await newsData(`${r}&${_time('prevmonth')}`)
  return sortData(recent, lastmonth, prevmonth)
}