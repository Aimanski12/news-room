import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Environment({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Environment')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Environment</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutThree 
            theme='theme-four-a'
            link='/environment/climate-change'
            textHeader='Climate Change'
            data={data.item3}/>
          <LayoutOne 
            link='/environment/wildlife'
            theme='theme-one-b'
            textHeader='Wildlife'
            data={data.item1}/>
          <LayoutTwo 
            theme='theme-three-b'
            link='/environment/marine-life'
            textHeader='Marine Life'
            data={data.item2}/>
          <LayoutFour 
            theme='theme-five-b'
            link='/environment/farming'
            textHeader='Farming'
            data={data.item4}/>
          <LayoutFive 
            theme='theme-three-a'
            link='/environment/fossil-fuels'
            textHeader='Fossil Fuels'
            data={data.item5}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}


Environment.getInitialProps = async () => {
  const data = await getData('envi')
  return { data }
}