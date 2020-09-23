import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'

export default function Sports({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Sports</title>
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
            theme='theme-five-b'
            textHeader='Soccer'
            data={data.item1}/>
          <LayoutSix 
            theme='theme-one-b'
            link={false}
            textHeader='NBA'
            data={data.item2}/>
          <LayoutFive 
            theme='theme-two-a'
            link={false}
            textHeader='Tennis'
            data={data.item3}/>
          <LayoutOne 
            theme='theme-thee-b'
            link={false}
            textHeader='Golf'
            data={data.item4}/>
          <LayoutTwo 
            theme='theme-four-b'
            link={false}
            textHeader='Baseball'
            data={data.item5}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Sports.getInitialProps = async () => {
  const data = await getData('sportAll')
  return { data }
}