import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutOne from '../../components/Layouts/LayoutOne'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Australia({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Australia', 'world-australia')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Australia News</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutFour
            link='/world/australia-politics'
            theme='theme-one-a'
            textHeader='Politics'
            data={data.item1}/>
          <LayoutFive
            link='/world/australia-covid-19'
            theme='theme-five-b'
            textHeader='Covid-19'
            data={data.item2}/>
          <LayoutSix
            link='/world/australia-new-south-wales'
            theme='theme-two-a'
            textHeader='New South Wales'
            data={data.item3}/>
          <LayoutOne
            link='/world/australia-sydney'
            theme='theme-four-b'
            textHeader='Sydney'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Australia.getInitialProps = async () => {
  const data = await getData('ausnews')
  return { data }
}