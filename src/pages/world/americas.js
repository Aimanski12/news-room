import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutOne from '../../components/Layouts/LayoutOne'
import Footer from '../../components/Footer/Footer'

export default function Americas({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Americas News</title>
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
            theme='theme-three-a'
            textHeader='Brazil'
            data={data.item1}/>
          <LayoutOne
            link={false}
            theme='theme-two-b'
            textHeader='Mexico'
            data={data.item2}/>
          <LayoutTwo
            link={false}
            theme='theme-four-a'
            textHeader='Argentina'
            data={data.item3}/>
          <LayoutThree
            link={false}
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
  const data = await getData('usnews')
  return { data }
}