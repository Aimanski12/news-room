import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutOne from '../../components/Layouts/LayoutOne'
import Footer from '../../components/Footer/Footer'

export default function Art({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Arts and Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='content-center'>
        <div className="content-center header-wrapper">
          <h1 className="">Header</h1>
        </div>
      </header>

      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutThree 
            link={false}
            theme='theme-two-a'
            textHeader='Photography'
            data={data.item1}/>
          <LayoutTwo
            link={false}
            theme='theme-one-b'
            textHeader='Exhibits'
            data={data.item2}/>
          <LayoutOne
            link={false}
            theme='theme-three-a'
            textHeader='Society'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Art.getInitialProps = async () => {
  const data = await getData('art')
  return { data }
}