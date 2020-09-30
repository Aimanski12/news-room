import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutThree from '../../components/Layouts/LayoutThree'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Business({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Business')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Business</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutThree
            link='/business/economy'
            theme='theme-one-a'
            textHeader='Economy'
            data={data.item1}/>
          <LayoutSix
            link='/business/stocks'
            theme='theme-five-b'
            textHeader='Stocks'
            data={data.item2}/>
          <LayoutFour
            link='/business/supermarket'
            theme='theme-two-a'
            textHeader='Supermarket'
            data={data.item3}/>
          <LayoutFive
            link='/business/retails'
            theme='theme-four-b'
            textHeader='Retails'
            data={data.item4}/>
          <LayoutOne
            link='/business/richlist'
            theme='theme-three-b'
            textHeader='Richlist'
            data={data.item5}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Business.getInitialProps = async () => {
  const data = await getData('business')
  return { data }
}