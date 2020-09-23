import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import Footer from '../../components/Footer/Footer'

export default function Stage({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Stage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='content-center'>
        <div className="content-center header-wrapper">
          <h1 className="">Header</h1>
        </div>
      </header>
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutSix
            link={false}
            theme='theme-one-a'
            textHeader='Stage'
            data={data.item1}/>
          <LayoutFive
            link={false}
            theme='theme-two-b'
            textHeader='Theatre'
            data={data.item2}/>
          <LayoutTwo
            link={false}
            theme='theme-three-a'
            textHeader='Dance'
            data={data.item3}/>
          <LayoutOne
            link={false}
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