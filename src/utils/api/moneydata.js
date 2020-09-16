import {sortData} from './sortData'
import {newsData} from './fetchApi'
import {_time} from './filterdate'

export async function moneyall() {
  const r = 'section='
  const a = 'section=money&tag='
  const money = await newsData(`${r}money`)
  const business = await newsData(`${r}business`)
  const investment = await newsData(`${a}money/moneyinvestments`)
  const realestate = await newsData(`${r}world&tag=business/realestate`)
  const work = await newsData(`${a}money/work-and-careers`)

  return sortData(money, business, investment, realestate, work)
}

export async function money() {
  const r = 'section='
  const a = 'section=money&tag='
  const money = await newsData(`${a}money/money`)
  const business = await newsData(`${r}business`)
  const debt = await newsData(`${a}money/debt`)
  const consumer = await newsData(`${a}money/consumer-affairs`)
  return sortData(money, business, debt, consumer)
}

export async function business() {
  const r = 'section=business&tag=business/'
  const economy = await newsData(`section=world&tag=business/economics`)
  const stocks = await newsData(`${r}stock-markets`)
  const supermarkt = await newsData(`${r}supermarkets`)
  const retails = await newsData(`${r}retail`)
  const richlist = await newsData(`${r}rich-lists`)
  return sortData(economy, stocks, supermarkt, retails, richlist)
}

export async function investment() {
  const r = 'section=business&tag=business/'
  const debt = await newsData(`section=money&tag=money/debt`)
  const insurance = await newsData(`${r}insurance`)
  const tech = await newsData(`${r}technology`)
  const stocks = await newsData(`${r}stock-markets`)
  return sortData(debt, insurance, tech, stocks)
}

export async function realestate() {
  const r = 'section='
  const property = await newsData(`${r}money&tag=money/property`)
  const renting = await newsData(`${r}money&tag=money/renting`)
  const commercial = await newsData(`${r}business&tag=business/commercial-property`)
  return sortData(property, renting, commercial)
}

export async function work() {
  const r = 'section=money&tag='
  const finances = await newsData(`${r}money/family-finances`)
  const home = await newsData(`${r}money/homeimprovements`)
  const mortgage = await newsData(`${r}money/mortgages`)
  const bills = await newsData(`${r}money/household-bills`)
  return sortData(finances, home, mortgage, bills)
}