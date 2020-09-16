import {sortData} from './sortData'
import {newsData} from './fetchApi'

export async function lifestyleall() {
  const r = 'section='
  const lifestyle = await newsData(`${r}lifeandstyle`)
  const fashion = await newsData(`${r}fashion`)
  const books = await newsData(`${r}books`)
  const food = await newsData(`${r}food`)
  const travel = await newsData(`${r}travel`)
  
  return sortData(lifestyle, fashion, books, food, travel)
}

export async function lifestyle() {
  const r = 'section=lifeandstyle&tag=lifeandstyle/'
  const relationship = await newsData(`${r}relationships`)
  const sexuality = await newsData(`${r}sex`)
  const health = await newsData(`${r}health-and-wellbeing`)
  const pets = await newsData(`${r}pets`)

  return sortData(relationship, sexuality, health, pets)
}

export async function fashion() {
  const r = 'section=fashion&tag=fashion/'
  const milan = await newsData(`${r}milan-fashion-week`)
  const paris = await newsData(`${r}paris-fashion-week`)
  const beauty = await newsData(`${r}beauty`)
  const dress = await newsData(`${r}dresses`)
  const fragrance = await newsData(`${r}fragrance`)

  return sortData(milan, paris, beauty, dress, fragrance)
}

export async function books() {
  const r = 'section=books&tag=books/'
  const books = await newsData(`${r}books`)
  const biog = await newsData(`${r}biography`)
  const fiction = await newsData(`${r}fiction`)
  const prize = await newsData(`${r}booker-prize`)
  const adult = await newsData(`${r}young-adult`)
  return sortData(books, biog, fiction, prize, adult)
}

export async function food() {
  const r = 'section=food&tag=food/'
  const food = await newsData(`${r}food`)
  const vegetables = await newsData(`${r}vegetables`)
  const meat = await newsData(`${r}meat`)
  const fruit = await newsData(`${r}fruit`)
  const chefs = await newsData(`${r}chefs`)
  return sortData(food, vegetables, meat, fruit, chefs)
}

export async function travel() {
  const r = 'section=travel&tag=travel/'
  const cruise = await newsData(`${r}cruises`)
  const adventure = await newsData(`${r}adventure`)
  const hostels = await newsData(`${r}hostels`)
  const flights = await newsData(`${r}flights`)
  const daytrip = await newsData(`${r}day-trips`)

  return sortData(cruise, adventure, hostels, flights, daytrip)
}