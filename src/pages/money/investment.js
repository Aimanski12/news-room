import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFour from '../../components/Layouts/LayoutFour'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Investment({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Investment')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Investment</title>
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
          <LayoutFour
            link={false}
            theme='theme-two-a'
            textHeader='Debt'
            data={data.item1}/>
          <LayoutOne
            link={false}
            theme='theme-one-b'
            textHeader='Insurance'
            data={data.item2}/>
          <LayoutFive
            link={false}
            theme='theme-three-a'
            textHeader='Technology'
            data={data.item3}/>
          <LayoutSix
            link={false}
            theme='theme-five-b'
            textHeader='Stocks'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Investment.getInitialProps = async () => {
  const data = await getData('invest')
  return { data }
}