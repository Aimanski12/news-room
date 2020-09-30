import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutThree from '../../components/Layouts/LayoutThree'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Travel({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Travel')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Travel</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutOne
            link='/travel/cruise'
            theme='theme-four-a'
            textHeader='Cruise'
            data={data.item1}/>
          <LayoutSix
            link='/travel/adventure'
            theme='theme-three-b'
            textHeader='Adventure'
            data={data.item2}/>
          <LayoutThree
            link='/travel/hostels'
            theme='theme-one-a'
            textHeader='Hostels'
            data={data.item3}/>
          <LayoutTwo
            link='/travel/flights'
            theme='theme-two-b'
            textHeader='Flights'
            data={data.item4}/>
          <LayoutFour
            link='/travel/day-trips'
            theme='theme-five-b'
            textHeader='Day Trips'
            data={data.item5}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Travel.getInitialProps = async () => {
  const data = await getData('travel')
  return { data }
}