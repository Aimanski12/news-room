import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import {getData} from '../utils/api/apis'
import LayoutTwo from '../components/Layouts/LayoutTwo'
import LayoutSix from '../components/Layouts/LayoutSix'
import LayoutOne from '../components/Layouts/LayoutOne'
import LayoutFour from '../components/Layouts/LayoutFour'
import LayoutFive from '../components/Layouts/LayoutFive'
import LayoutThree from '../components/Layouts/LayoutThree'

export default function World({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | World</title>
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
            theme='theme-three-a'
            textHeader='US'
            data={data.item1}/>
          <LayoutTwo
            link={false}
            theme='theme-two-b'
            textHeader='UK'
            data={data.item2}/>
          <LayoutThree
            link={false}
            theme='theme-four-a'
            textHeader='Australia'
            data={data.item3}/>
          <LayoutFour
            link={false}
            theme='theme-one-b'
            textHeader='Asia'
            data={data.item4}/>
          <LayoutFive
            link={false}
            theme='theme-five-b'
            textHeader='Americas'
            data={data.item5}/>
          <LayoutSix
            link={false}
            theme='theme-three-a'
            textHeader='Africa'
            data={data.item6}/>
          <LayoutTwo
            link={false}
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