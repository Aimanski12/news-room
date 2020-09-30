import React, {useContext, useEffect} from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {getData} from '../utils/api/apis'
import {AppData} from '../utils/context/contextapi'
import LayoutTwo from '../components/Layouts/LayoutTwo'
import LayoutSix from '../components/Layouts/LayoutSix'
import LayoutOne from '../components/Layouts/LayoutOne'
import LayoutFour from '../components/Layouts/LayoutFour'
import LayoutFive from '../components/Layouts/LayoutFive'
import LayoutThree from '../components/Layouts/LayoutThree'
import Spinner from '../components/Spinner/Spinner'

export default function World({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  
  useEffect(()=>{
    setSpinning('loaded', 'World')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | World</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      <Spinner spin={isSpin.spin}/>

      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutOne
            link={'/world/us-news'}
            fromIndex={true}
            theme='theme-three-a'
            textHeader='US'
            data={data.item1}/>
          <LayoutTwo
            link={'/world/uk-news'}
            fromIndex={true}
            theme='theme-two-b'
            textHeader='UK'
            data={data.item2}/>
          <LayoutThree
            link={'/world/australia'}
            fromIndex={true}
            theme='theme-four-a'
            textHeader='Australia'
            data={data.item3}/>
          <LayoutFour
            link={'/world/asia-news'}
            fromIndex={true}
            theme='theme-one-b'
            textHeader='Asia'
            data={data.item4}/>
          <LayoutFive
            link={'/world/americas'}
            fromIndex={true}
            theme='theme-five-a'
            textHeader='Americas'
            data={data.item5}/>
          <LayoutSix
            link={'/world/africa'}
            fromIndex={true}
            theme='theme-three-a'
            textHeader='Africa'
            data={data.item6}/>
          <LayoutTwo
            link={'/world/europe'}
            fromIndex={true}
            theme='theme-two-b'
            textHeader='Europe'
            data={data.item7}/>

        </div>
      </main>

      <Footer />
    </div>
  )
}

World.getInitialProps = async () => {
  const data = await getData('world')
  return {data}
}