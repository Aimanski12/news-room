import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Covid({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Covid-19')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Covid-19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutFive 
            link='/news/us-covid-19'
            theme='theme-four-a'
            textHeader='US'
            data={data.item1}/>
          <LayoutFour 
            theme='theme-three-b'
            link='/news/uk-covid-19'
            textHeader='UK'
            data={data.item2}/>
          <LayoutThree 
            theme='theme-two-b'
            link='/news/australia-covid-19'
            textHeader='Australia'
            data={data.item3}/>
          <LayoutSix 
            theme='theme-one-b'
            link='/news/related-news'
            textHeader='Related'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}


Covid.getInitialProps = async () => {
  const data = await getData('covid')
  return { data }
}