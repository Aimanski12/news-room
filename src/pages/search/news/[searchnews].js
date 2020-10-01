import React, {useContext, useEffect} from 'react'
import {useRouter} from 'next/router'
import {AppData} from '../../../utils/context/contextapi'
import Head from 'next/head'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Spinner from '../../../components/Spinner/Spinner'
import {getData} from '../../../utils/api/apis'
import {formatTime, setUrl} from '../../../utils/common/common'
import Link from 'next/link'
import parse from 'html-react-parser'

export default function News({data}) {
  const router = useRouter()
  const {isSpin, setSpinning, setNewsItem} = useContext(AppData)

  useEffect(() => {
    setSpinning('loaded', 'Page', 'search-news')
  })

  function clickToPage (news){
    setNewsItem(true, news)
  }

  let searchItems = data.length > 0 ? (data.map((d, i) => {
    return (
      <Link  key={i}
        href={`/[details]/[newsitems]/[news]`} 
        as={`/news/search/${setUrl(d.id)}`}>
        <a onClick={()=>clickToPage(d)}>
          <div className="result-item">
            <h4 className='display-7 text-head'>{d.fields.headline}</h4>
            <span className='display-9 text-head text-desc'>
              {parse(d.webTitle)}</span>
            <span className='display-11 text-cap search-item-time'>
              {formatTime(d.webPublicationDate)}
            </span>
          </div>
        </a>
      </Link>
    )
  }) ) : null

  function searchWord () {
    let url = router.query.searchnews
    return url
  }

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Search News</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container search-news">

          <div className='search-news-body'>
            <div className="search-result-header">
            <h3 className='display-3 text-head'>Search keywords: 
              <span>{searchWord()}</span></h3>
            </div>
            <div className="result-items">
              <h3 className='display-4 text-head'>
                {data.length <= 0 ? 'No results found' : 'Results'}
              </h3>
              {searchItems}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

News.getInitialProps = async (ctx) => {
  const {query} = ctx
  const data = await getData('search', query.searchnews)
  return {data}
}
