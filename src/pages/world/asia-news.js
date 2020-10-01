import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutOne from '../../components/Layouts/LayoutOne'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Asia({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
 useEffect(() => {
   setSpinning('loaded', 'Asia', 'world-asia-news')
 })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Asia News</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutFive
            link='/world/asia-china'
            theme='theme-two-a'
            textHeader='China'
            data={data.item1}/>
          <LayoutSix
            link='/world/asia-japan'
            theme='theme-one-b'
            textHeader='Japan'
            data={data.item2}/>
          <LayoutOne
            link='/world/asia-india'
            theme='theme-three-a'
            textHeader='India'
            data={data.item3}/>
          <LayoutTwo
            link='/world/asia-philippines'
            theme='theme-five-b'
            textHeader='Philippines'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Asia.getInitialProps = async () => {
  const data = await getData('asia')
  return { data }
}