import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutOne from '../../components/Layouts/LayoutOne'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Americas({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
 useEffect(()=>{
    setSpinning('loaded', 'Americas')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Americas News</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutSix
            link='/world/brazil'
            theme='theme-three-a'
            textHeader='Brazil'
            data={data.item1}/>
          <LayoutOne
            link='/world/mexico'
            theme='theme-two-b'
            textHeader='Mexico'
            data={data.item2}/>
          <LayoutTwo
            link='/world/argentina'
            theme='theme-four-a'
            textHeader='Argentina'
            data={data.item3}/>
          <LayoutThree
            link='/world/american-continent'
            theme='theme-one-b'
            textHeader='Americas'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Americas.getInitialProps = async () => {
  const data = await getData('amnews')
  return { data }
}