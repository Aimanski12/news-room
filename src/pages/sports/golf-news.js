import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Golf({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Golf')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Golf News</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutThree
            link='/sports/golf-news'
            theme='theme-five-b'
            textHeader='This Month'
            data={data.item1}/>
          <LayoutFive
            theme='theme-one-b'
            link='/sports/golf-news'
            textHeader='Last Month'
            data={data.item2}/>
          <LayoutSix 
            theme='theme-two-a'
            link='/sports/golf-news'
            textHeader='Previews Month'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Golf.getInitialProps = async () => {
  const data = await getData('golf')
  return { data }
}