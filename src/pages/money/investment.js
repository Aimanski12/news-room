import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFour from '../../components/Layouts/LayoutFour'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Investment({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Investment')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Investment</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutFour
            link='/investment/debt'
            theme='theme-two-a'
            textHeader='Debt'
            data={data.item1}/>
          <LayoutOne
            link='/investment/insurance'
            theme='theme-one-b'
            textHeader='Insurance'
            data={data.item2}/>
          <LayoutFive
            link='/investment/technology'
            theme='theme-three-a'
            textHeader='Technology'
            data={data.item3}/>
          <LayoutSix
            link='/investment/stocks'
            theme='theme-five-b'
            textHeader='Stocks'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Investment.getInitialProps = async () => {
  const data = await getData('invest')
  return { data }
}