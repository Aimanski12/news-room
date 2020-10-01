import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Stage({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Stage', 'films-stage')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Stage</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutSix
            link='/stage/stage-news'
            theme='theme-one-a'
            textHeader='Stage'
            data={data.item1}/>
          <LayoutFive
            link='/stage/theatre'
            theme='theme-two-b'
            textHeader='Theatre'
            data={data.item2}/>
          <LayoutTwo
            link='/stage/dance'
            theme='theme-three-a'
            textHeader='Dance'
            data={data.item3}/>
          <LayoutOne
            link='/stage/comedy'
            theme='theme-four-b'
            textHeader='Comedy'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Stage.getInitialProps = async () => {
  const data = await getData('stage')
  return { data }
}