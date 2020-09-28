import React, {useContext, useEffect} from 'react'
import {useRouter} from 'next/router'
import {AppData} from '../../../utils/context/contextapi'
import Head from 'next/head'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Spinner from '../../../components/Spinner/Spinner'
import {setUrl} from '../../../utils/common/common'
import parse from 'html-react-parser'

function news() {
  const router = useRouter()
  const {isSpin, news, setSpinning} = useContext(AppData)
  useEffect(() => {
    let url = router.query
    if(url.news !== undefined ){
      if(!news.isSet) {
        router.replace('/')
      } else if (news.news.id){
        let stateUrl = setUrl(news.news.id)
        if(url.news !== stateUrl) {
          router.replace('/')
        }
      } 
    } 

    setSpinning('loaded', 'Page')
  })

  let newsBody = news.isSet ? (
    parse(news.news.fields.body)
  ) : null

  let newsHeader = news.isSet ? (
    <h1 className='news-text-header'>{parse(news.news.fields.headline)}</h1>
  ) : null

  let newsImage = news.isSet ? (
    <img className='image-head' src={news.news.fields.thumbnail} alt=""/>
  ) : null

  console.log(news.news)

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Spinner spin={isSpin.spin}/>

      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">

          <div className='news-body-content'>
            {newsHeader}
            {newsImage}
            {newsBody}
          </div>
          

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default news
