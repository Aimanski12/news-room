import {sortData} from './sortData'
import {newsData} from './fetchApi'

export async function cultureAll() {
  const r = 'section='
  const culture = await newsData(`${r}culture`)
  const society = await newsData(`${r}society`)
  const art = await newsData(`${r}artanddesign`)
  return sortData(culture, society, art)
}

export async function culture() {
  const r = 'section=culture'
  const festivals = await newsData(`${r}&tag=culture/festivals`)
  const museums = await newsData(`${r}&tag=culture/museums`)
  const culture = await newsData(`${r}`)
  return sortData(festivals, museums, culture)
}

export async function society() {
  const r = 'section=society'
  const health = await newsData(`${r}&tag=society/health`)
  const dying = await newsData(`${r}&tag=society/death-and-dying`)
  const care = await newsData(`${r}&tag=society/care-workers`)
  const society = await newsData(`${r}`)
  
  return sortData(health, dying, care, society)
}

export async function art() {
  const r = 'section=artanddesign'
  const a = '&tag=artanddesign/'
  const photo = await newsData(`${r}${a}photography`)
  const exhibit = await newsData(`${r}${a}exhibition`)
  const society = await newsData(`${r}`)
  console.log(photo)
  return sortData(photo, exhibit, society)
}


