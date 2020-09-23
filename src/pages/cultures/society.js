import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFive from '../../components/Layouts/LayoutFive'
import Footer from '../../components/Footer/Footer'

export default function Society({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Society</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            textHeader='Health'
            data={data.item1}/>
          <LayoutFive
            link={false}
            theme='theme-one-b'
            textHeader='Living'
            data={data.item2}/>
          <LayoutOne
            link={false}
            theme='theme-three-a'
            textHeader='Care'
            data={data.item3}/>
          <LayoutSix 
            theme='theme-four-b'
            link={false}
            textHeader='Society'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Society.getInitialProps = async () => {
  const data = await getData('society')
  return { data }
}