import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function MLB({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'MLB')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | MLB News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutTwo
            link='/sports/mlb-news'
            theme='theme-four-b'
            textHeader='This Month'
            data={data.item1}/>
          <LayoutFour
            theme='theme-five-b'
            link='/sports/mlb-news'
            textHeader='Last Month'
            data={data.item2}/>
          <LayoutFive 
            theme='theme-one-a'
            link='/sports/mlb-news'
            textHeader='Previews Month'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

MLB.getInitialProps = async () => {
  const data = await getData('baseball')
  return { data }
}