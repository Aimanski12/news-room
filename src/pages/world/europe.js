import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Europe({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Europe')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Europe News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutTwo
            link='/world/europe-russia'
            theme='theme-five-a'
            textHeader='Russia'
            data={data.item1}/>
          <LayoutThree
            link='/world/europe-uk'
            theme='theme-four-b'
            textHeader='UK'
            data={data.item2}/>
          <LayoutFour
            link='/world/europe-germany'
            theme='theme-one-a'
            textHeader='Germany'
            data={data.item3}/>
          <LayoutFive
            link='/world/europe-france'
            theme='theme-three-b'
            textHeader='France'
            data={data.item4}/>
          <LayoutOne
            link='/world/europe-norway'
            theme='theme-two-a'
            textHeader='Norway'
            data={data.item5}/>
          <LayoutSix
            link='/world/europe-turkey'
            theme='theme-five-b'
            textHeader='Turkey'
            data={data.item6}/>
          <LayoutTwo
            link='/world/europe-news'
            theme='theme-four-b'
            textHeader='Europe'
            data={data.item7}/>
        </div>
      </main>

      <Footer />
    </div>
  )
}

Europe.getInitialProps = async () => {
  const data = await getData('europe')
  return { data }
}