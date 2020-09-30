import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFive from '../../components/Layouts/LayoutFive'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Society({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Society')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Society</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutFour 
            link={false}
            theme='theme-two-a'
            textHeader='Health'
            data={data.item1}/>
          <LayoutFive
            link={false}
            theme='theme-one-b'
            textHeader='Living'
            data={data.item2}/>
          <LayoutOne
            link={false}
            theme='theme-three-a'
            textHeader='Care'
            data={data.item3}/>
          <LayoutSix 
            theme='theme-four-b'
            link={false}
            textHeader='Society'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Society.getInitialProps = async () => {
  const data = await getData('society')
  return { data }
}