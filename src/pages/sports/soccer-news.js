import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFive from '../../components/Layouts/LayoutFive'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Soccer({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Soccer')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Soccer News</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutFive
            link='/sports/soccer-news'
            theme='theme-one-b'
            textHeader='This Month'
            data={data.item1}/>
          <LayoutOne
            theme='theme-two-b'
            link='/sports/soccer-news'
            textHeader='Last Month'
            data={data.item2}/>
          <LayoutTwo 
            theme='theme-three-a'
            link='/sports/soccer-news'
            textHeader='Previews Month'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Soccer.getInitialProps = async () => {
  const data = await getData('football')
  return { data }
}