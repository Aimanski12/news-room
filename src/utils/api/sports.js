import {sortData} from './sortData'
import {newsData} from './fetchApi'

export async function sports() {
  const r = 'section='
  const a = 'section=sport&tag='
  const sports = await newsData(`${r}sport`)
  const soccer = await newsData(`${r}football`)
  const nba = await newsData(`${a}sport/nba`)
  const tennis = await newsData(`${a}sport/tennis`)
  const golf = await newsData(`${a}sport/golf`)
  const world = await newsData(`${r}world&tag=sport/sport`)
  
  return sortData(sports, soccer, nba, tennis, golf, world)
}