import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutFour from '../../components/Layouts/LayoutFour'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Music({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Music')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutFour
            link='/music/music-news'
            theme='theme-four-a'
            textHeader='Music'
            data={data.item1}/>
          <LayoutThree
            link='/music/clubs'
            theme='theme-five-b'
            textHeader='Clubs'
            data={data.item2}/>
          <LayoutSix
            link='/music/jazz'
            theme='theme-one-a'
            textHeader='Jazz'
            data={data.item3}/>
          <LayoutFive
            link='/music/pop-rock'
            theme='theme-two-b'
            textHeader='Pop-Rock'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Music.getInitialProps = async () => {
  const data = await getData('music')
  return { data }
}