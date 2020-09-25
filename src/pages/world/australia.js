import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
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
    setSpinning('loaded', 'Australia')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Australia News</title>
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
            link={false}
            theme='theme-one-a'
            textHeader='Politics'
            data={data.item1}/>
          <LayoutFive
            link={false}
            theme='theme-five-b'
            textHeader='Covid-19'
            data={data.item2}/>
          <LayoutSix
            link={false}
            theme='theme-two-a'
            textHeader='New South Wales'
            data={data.item3}/>
          <LayoutOne
            link={false}
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