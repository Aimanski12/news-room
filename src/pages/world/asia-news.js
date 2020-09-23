import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutOne from '../../components/Layouts/LayoutOne'
import Footer from '../../components/Footer/Footer'

export default function Asia({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Asia News</title>
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
            theme='theme-two-a'
            textHeader='China'
            data={data.item1}/>
          <LayoutSix
            link={false}
            theme='theme-one-b'
            textHeader='Japan'
            data={data.item2}/>
          <LayoutOne
            link={false}
            theme='theme-three-a'
            textHeader='India'
            data={data.item3}/>
          <LayoutTwo
            link={false}
            theme='theme-five-b'
            textHeader='Philippines'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Asia.getInitialProps = async () => {
  const data = await getData('usnews')
  return { data }
}