import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutThree from '../../components/Layouts/LayoutThree'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function UkNews({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'UK')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | UK News</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutThree
            link='/world/uk-politics'
            theme='theme-five-a'
            textHeader='Politics'
            data={data.item1}/>
          <LayoutFour
            link='/world/uk-covid-19'
            theme='theme-four-b'
            textHeader='Covid-19'
            data={data.item2}/>
          <LayoutFive
            link='/world/uk-news'
            theme='theme-one-a'
            textHeader='News'
            data={data.item3}/>
          <LayoutSix
            link='/world/uk-sports'
            theme='theme-three-b'
            textHeader='Sports'
            data={data.item4}/>
        </div>
      </main>

      <Footer />
    </div>
  )
}

UkNews.getInitialProps = async () => {
  const data = await getData('uknews')
  return { data }
}