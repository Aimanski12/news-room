import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Head from 'next/head'
import Footer from '../../components/Footer/Footer'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutThree from '../../components/Layouts/LayoutThree'
import Spinner from '../../components/Spinner/Spinner'

export default function UsNews({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'US')
  })
  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | US News</title>
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
          <LayoutThree
            link={false}
            theme='theme-three-a'
            textHeader='Politics'
            data={data.item2}/>
          <LayoutTwo
            link={false}
            theme='theme-four-b'
            textHeader='Elections'
            data={data.item1}/>
          <LayoutFour
            link={false}
            theme='theme-five-a'
            textHeader='Covid-19'
            data={data.item3}/>
          <LayoutFive
            link={false}
            theme='theme-two-b'
            textHeader='Schools'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

UsNews.getInitialProps = async () => {
  const data = await getData('usnews')
  return { data }
}