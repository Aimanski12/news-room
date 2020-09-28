import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Nba({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'NBA')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | NBA News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutSix
            link='/sports/nba-news'
            theme='theme-two-b'
            textHeader='This Month'
            data={data.item1}/>
          <LayoutTwo
            theme='theme-three-b'
            link='/sports/nba-news'
            textHeader='Last Month'
            data={data.item2}/>
          <LayoutThree 
            theme='theme-four-a'
            link='/sports/nba-news'
            textHeader='Previews Month'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Nba.getInitialProps = async () => {
  const data = await getData('basketball')
  return { data }
}