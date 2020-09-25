import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutThree from '../../components/Layouts/LayoutThree'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Money({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Money')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Money News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <header className='content-center'>
        <div className="content-center header-wrapper">
          <h1 className="">Header</h1>
        </div>
      </header>
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutTwo
            link={'/money/finance'}
            theme='theme-five-a'
            textHeader='Finance'
            data={data.item1}/>
          <LayoutOne
            link={'/money/business'}
            theme='theme-four-b'
            textHeader='Business'
            data={data.item2}/>
          <LayoutFour
            link={'/money/investment'}
            theme='theme-three-a'
            textHeader='Investment'
            data={data.item3}/>
          <LayoutThree
            link={'/money/realestate'}
            theme='theme-two-b'
            textHeader='Realestate'
            data={data.item4}/>
          <LayoutFive
            link={'/money/work'}
            theme='theme-one-b'
            textHeader='Work'
            data={data.item5}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Money.getInitialProps = async () => {
  const data = await getData('moneyall')
  return { data }
}