import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutFour from '../../components/Layouts/LayoutFour'
import Footer from '../../components/Footer/Footer'

export default function Media({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Media</title>
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
            theme='theme-five-a'
            textHeader='Media'
            data={data.item1}/>
          <LayoutFour
            link={false}
            theme='theme-one-b'
            textHeader='Television'
            data={data.item2}/>
          <LayoutOne
            link={false}
            theme='theme-two-a'
            textHeader='Digital Media'
            data={data.item3}/>
          <LayoutSix
            link={false}
            theme='theme-one-b'
            textHeader='Social Media'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Media.getInitialProps = async () => {
  const data = await getData('media')
  return { data }
}