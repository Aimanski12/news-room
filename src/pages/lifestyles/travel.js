import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutThree from '../../components/Layouts/LayoutThree'
import Footer from '../../components/Footer/Footer'

export default function Travel({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Travel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='content-center'>
        <div className="content-center header-wrapper">
          <h1 className="">Header</h1>
        </div>
      </header>
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutOne
            link={false}
            theme='theme-four-a'
            textHeader='Cruise'
            data={data.item1}/>
          <LayoutSix
            link={false}
            theme='theme-three-b'
            textHeader='Adventure'
            data={data.item2}/>
          <LayoutThree
            link={false}
            theme='theme-one-a'
            textHeader='Hostels'
            data={data.item3}/>
          <LayoutTwo
            link={false}
            theme='theme-two-b'
            textHeader='Flights'
            data={data.item4}/>
          <LayoutFour
            link={false}
            theme='theme-five-b'
            textHeader='Day Trips'
            data={data.item5}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Travel.getInitialProps = async () => {
  const data = await getData('travel')
  return { data }
}