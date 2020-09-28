import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutThree from '../../components/Layouts/LayoutThree'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Money({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Finance')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Finance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutTwo
            link='/finance/business'
            theme='theme-five-a'
            textHeader='Business'
            data={data.item2}/>
          <LayoutFive
            link='/finance/debt'
            theme='theme-four-b'
            textHeader='Debt'
            data={data.item3}/>
          <LayoutThree
            link='/finance/money'
            theme='theme-one-a'
            textHeader='Money'
            data={data.item1}/>
          <LayoutFour
            link='/finance/consumer'
            theme='theme-three-b'
            textHeader='Consumer'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Money.getInitialProps = async () => {
  const data = await getData('money')
  return { data }
}