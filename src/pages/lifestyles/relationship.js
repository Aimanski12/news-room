import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutFour from '../../components/Layouts/LayoutFour'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Lifestyle({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Relationship', 'lifestyle-relationships')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Relationship</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutThree
            link='/relationships/relationship-news'
            theme='theme-five-a'
            textHeader='Relationship'
            data={data.item1}/>
          <LayoutTwo
            link='/relationships/sexuality'
            theme='theme-four-b'
            textHeader='Sexuality'
            data={data.item2}/>
          <LayoutFive
            link='/relationships/health'
            theme='theme-two-a'
            textHeader='Health'
            data={data.item3}/>
          <LayoutFour
            link='/relationships/pets'
            theme='theme-three-b'
            textHeader='Pets'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Lifestyle.getInitialProps = async () => {
  const data = await getData('lifestyle')
  return { data }
}