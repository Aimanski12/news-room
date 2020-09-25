import {sortData} from './sortData'
import {newsData} from './fetchApi'

export async function world() {
  const r = 'section='
  const w = 'section=world&tag=world/'

  const us = await newsData(`${r}us-news`)
  const uk = await newsData(`${r}uk-news`)
  const aus = await newsData(`${r}australia-news`)
  const asia = await newsData(`${w}asia-pacific`)
  const soutam = await newsData(`${w}americas`)
  const africa = await newsData(`${w}africa`)
  const europe = await newsData(`${w}europe-news`)
  return sortData(us, uk, aus, asia, soutam, africa, europe)
}

export async function usnews() {
  const r = 'section=us-news&tag='
  const elections = await newsData(`${r}us-news/us-elections-2020`)
  const politics = await newsData(`section=politics&tag=${r}us-news/us-politics`)
  const covid = await newsData(`section=us-news&tag=world/coronavirus-outbreak`)
  const schools = await newsData(`${r}us-news/us-universities`)
  return sortData(elections, politics, covid, schools)
}

export async function uknews() {
  const r = 'section=uk-news&tag='
  const politics = await newsData(`${r}politics/politics`)
  const covid = await newsData(`${r}world/coronavirus-outbreak`)
  const news = await newsData(`${r}uk/london`)
  const sports = await newsData(`section=sport&tag=uk/uk`)
  return sortData(politics, covid, news, sports)
}

export async function ausnews() {
  const r = 'section=australia-news&tag='
  const politics = await newsData(`${r}australia-news/australian-politics`)
  const news = await newsData(`${r}australia-news/new-south-wales`)
  const covid = await newsData(`${r}world/coronavirus-outbreak`)
  const sydney = await newsData(`${r}australia-news/sydney`)
  return sortData(politics, covid, news, sydney)
}

export async function asia() {
  const r = 'section=world&tag='
  const china = await newsData(`${r}world/china`)
  const japan = await newsData(`${r}world/japan`)
  const india = await newsData(`${r}world/india`)
  const asia = await newsData(`${r}world/philippines`)
  return sortData(china, japan, india, asia)
}

export async function amnews() {
  const r = 'section=world&tag='
  const brazil = await newsData(`${r}world/brazil`)
  const mexico = await newsData(`${r}world/mexico`)
  const argentina = await newsData(`${r}world/argentina`)
  const anews = await newsData(`${r}world/americas`)
  return sortData(brazil, mexico, argentina, anews)
}

export async function africa() {
  const r = 'section=world&tag='
  const safrica = await newsData(`${r}world/southafrica`)
  const egypt = await newsData(`${r}world/egypt`)
  const nigeria = await newsData(`${r}world/nigeria`)
  const afnews = await newsData(`${r}world/africa`)
  return sortData(safrica, egypt, nigeria, afnews)
}


export async function europe() {
  const r = 'section=world&tag='
  const russia = await newsData(`${r}world/russia`)
  const uk = await newsData(`section=uk-news`)
  const germany = await newsData(`${r}world/germany`)
  const france = await newsData(`${r}world/france`)
  const norway = await newsData(`${r}world/norway`)
  const turkey = await newsData(`${r}world/turkey`)
  const euronews = await newsData(`${r}world/europe-news`)
  return sortData(russia, uk, germany, france, norway, turkey, euronews)
}