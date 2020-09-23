import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'

export default function News({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | News</title>
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
            link='/news/covid-19'
            theme='theme-two-a'
            textHeader='Covid-19'
            data={data.item1}/>
          <LayoutTwo 
            theme='theme-three-a'
            link='/news/politics'
            textHeader='Politics'
            data={data.item2}/>
          <LayoutThree 
            theme='theme-four-b'
            link='/news/environment'
            textHeader='Environment'
            data={data.item3}/>
          <LayoutFour 
            theme='theme-five-b'
            link='/news/technology'
            textHeader='Technology'
            data={data.item4}/>
          <LayoutFive 
            theme='theme-three-a'
            link='/news/science'
            textHeader='Science'
            data={data.item5}/>
          <LayoutSix 
            theme='theme-five-b'
            link='/news/education'
            textHeader='Education'
            data={data.item6}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

News.getInitialProps = async () => {
  const data = await getData('main')
  return { data }
}
