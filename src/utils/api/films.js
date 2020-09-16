import {sortData} from './sortData'
import {newsData} from './fetchApi'

export async function filmAll() {
  const r = 'section='
  const film = await newsData(`${r}film`)
  const media = await newsData(`${r}media`)
  const stage = await newsData(`${r}stage`)
  const musica = await newsData(`${r}music`)
  return sortData(film, media, stage, musica)
}

export async function music() {
  const r = 'section=music&tag=music/'
  const musica = await newsData(`${r}music`)
  const clubs = await newsData(`${r}clubs`)
  const jazz = await newsData(`${r}jazz`)
  const poprock = await newsData(`${r}popandrock`)
  return sortData(musica, clubs, jazz, poprock)
}

export async function media() {
  const r = 'section=media&tag=media/'
  const med = await newsData(`${r}media`)
  const tv = await newsData(`${r}television`)
  const dmedia = await newsData(`${r}digital-media`)
  const smedia = await newsData(`${r}social-media`)
  return sortData(med, tv, dmedia, smedia)
}

export async function stage() {
  const r = 'section=stage&tag=stage/'
  const staged = await newsData(`${r}stage`)
  const theatre = await newsData(`${r}theatre`)
  const dance = await newsData(`${r}dance`)
  const comedy = await newsData(`${r}comedy`)
  return sortData(staged, theatre, dance, comedy)
}

export async function film() {
  const r = 'section=film&tag=film/'
  const films = await newsData(`${r}film`)
  const drama = await newsData(`${r}drama`)
  const documentary = await newsData(`${r}documentary`)
  const comedy = await newsData(`${r}comedy`)
  const war = await newsData(`${r}war-films`)
  return sortData(films, drama, documentary, comedy, war)
}