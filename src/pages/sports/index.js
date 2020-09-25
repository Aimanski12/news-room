import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Sports({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Sports')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Sports</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <header className='content-center'>
        <div className="content-center header-wrapper">
          <h1 className="">Header</h1>
        </div>
      </header>
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutFour 
            link={'/sports/soccer-news'}
            theme='theme-five-b'
            textHeader='Soccer'
            data={data.item1}/>
          <LayoutSix 
            theme='theme-one-b'
            link={'/sports/nba-news'}
            textHeader='NBA'
            data={data.item2}/>
          <LayoutFive 
            theme='theme-two-a'
            link={'/sports/tennis-news'}
            textHeader='Tennis'
            data={data.item3}/>
          <LayoutOne 
            theme='theme-three-b'
            link={'/sports/golf-news'}
            textHeader='Golf'
            data={data.item4}/>
          <LayoutTwo 
            theme='theme-four-b'
            link={'/sports/mlb-news'}
            textHeader='MLB'
            data={data.item5}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Sports.getInitialProps = async () => {
  const data = await getData('sportAll')
  return { data }
}