import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutFour from '../../components/Layouts/LayoutFour'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Fashion({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Fashion')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Fashion</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutFour
            link='/fashion/milan'
            theme='theme-one-a'
            textHeader='Milan'
            data={data.item1}/>
          <LayoutThree
            link='/fashion/paris'
            theme='theme-five-b'
            textHeader='Paris'
            data={data.item2}/>
          <LayoutSix
            link='/fashion/beauty'
            theme='theme-three-a'
            textHeader='Beauty'
            data={data.item3}/>
          <LayoutFive
            link='/fashion/dress'
            theme='theme-four-b'
            textHeader='Dress'
            data={data.item4}/>
          <LayoutOne
            link='/fashion/fragrance'
            theme='theme-two-b'
            textHeader='Fragrance'
            data={data.item5}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Fashion.getInitialProps = async () => {
  const data = await getData('fashion')
  return { data }
}