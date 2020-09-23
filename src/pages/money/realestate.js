import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import Footer from '../../components/Footer/Footer'


export default function Realestate({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Realestate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='content-center'>
        <div className="content-center header-wrapper">
          <h1 className="">Header</h1>
        </div>
      </header>
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutFive
            link={false}
            theme='theme-three-a'
            textHeader='Property'
            data={data.item1}/>
          <LayoutTwo
            link={false}
            theme='theme-two-b'
            textHeader='Renting'
            data={data.item2}/>
          <LayoutSix
            link={false}
            theme='theme-four-a'
            textHeader='Commercial'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Realestate.getInitialProps = async () => {
  const data = await getData('realestate')
  return { data }
}