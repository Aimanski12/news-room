import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutFour from '../../components/Layouts/LayoutFour'
import Footer from '../../components/Footer/Footer'

export default function Lifestyle({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Lifestyle</title>
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
            theme='theme-five-a'
            textHeader='Relationship'
            data={data.item1}/>
          <LayoutTwo
            link={false}
            theme='theme-four-b'
            textHeader='Sexuality'
            data={data.item2}/>
          <LayoutFive
            link={false}
            theme='theme-two-a'
            textHeader='Health'
            data={data.item3}/>
          <LayoutFour
            link={false}
            theme='theme-three-b'
            textHeader='Pets'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Lifestyle.getInitialProps = async () => {
  const data = await getData('lifestyle')
  return { data }
}