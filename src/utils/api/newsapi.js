import {sortData} from './sortData'
import {newsData} from './fetchApi'

export async function envi(){
  let route = 'section=environment'
  const wildlife = await newsData(`${route}&tag=environment/wildlife`)
  const marinelife = await newsData(`${route}&tag=environment/marine-life`)
  const climatechange = await newsData(`${route}&tag=environment/climate-change`)
  const farming = await newsData(`${route}&tag=environment/farming`)
  const fossilfuels = await newsData(`${route}&tag=environment/fossil-fuels`)
  return sortData(wildlife, marinelife, climatechange, farming, fossilfuels)
}

export async function tech() {
  let r = 'section=technology&tag=technology/'
  const gadgets = await newsData(`${r}gadgets`)
  const ai = await newsData(`${r}artificialintelligenceai`)
  const gaming = await newsData('section=technology&tag=games/games')
  const smphon = await newsData(`${r}smartphones`)
  const compute = await newsData(`${r}computing`)
  const softwares = await newsData(`${r}software`)
  const efinance = await newsData(`${r}efinance`)
  return sortData(gadgets, ai, gaming, smphon, compute, softwares, efinance)
}

export async function science() {
  let r = 'section=science&tag=science/'
  const space = await newsData(`${r}space`)
  const med = await newsData(`${r}medical-research`)
  const zoo = await newsData(`${r}zoology`)
  const chem = await newsData(`${r}chemistry`)
  const neuro = await newsData(`${r}neuroscience`)
  const disease = await newsData(`${r}infectiousdiseases`)
  return sortData(space, med, zoo, chem, neuro, disease)
}

export async function politics() {
  let r = 'section='
  const us = await newsData(`${r}us-news&tag=us-news/us-politics`)
  const uk = await newsData(`politics&tag=uk/uk`)
  const aus = await newsData(`${r}australia-news&tag=australia-news/australian-politics`)
  const asia = await newsData(`${r}politics&tag=world/asia-pacific`)
  const africa = await newsData(`${r}politics&tag=world/africa`)
  return sortData(us, uk, aus, asia, africa)
}

export async function covid() {
  let r = '&tag=world/coronavirus-outbreak'
  const uk = await newsData(`section=uk-news${r}`)
  const us = await newsData(`section=us-news${r}`)
  const aus = await newsData(`section=australia-news${r}`)
  const related = await newsData(`section=world${r}`)
  return sortData(us, uk, aus, related)
}

export async function edu() {
  let r = 'section=education&tag=education/'
  const univ = await newsData(`${r}universities`)
  const stud = await newsData(`${r}students`)
  const fresh = await newsData(`${r}freshers`)
  const med = await newsData(`section=science&tag=science/medical-research`)
  return sortData(univ, fresh, stud, med)
}

export async function main() {
  let r = 'section='
  const world = await newsData(`{r}world&tag=world/coronavirus-outbreak`)
  const politics = await newsData(`${r}politics`)
  const envi = await newsData(`${r}environment`)
  const tech = await newsData(`${r}technology`)
  const science = await newsData(`${r}science`)
  const edu = await newsData(`${r}education`)
  return sortData(world, politics, envi, tech, science, edu)
}

