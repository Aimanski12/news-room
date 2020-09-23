import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'

export default function Science({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Science</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='content-center'>
        <div className="content-center header-wrapper">
          <h1 className="">Header</h1>
        </div>
      </header>
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutTwo 
            theme='theme-three-b'
            link={false}
            textHeader='Space Exploration'
            data={data.item1}/>
          <LayoutFour 
            theme='theme-four-b'
            link={false}
            textHeader='Medical Research'
            data={data.item2}/>
          <LayoutFive 
            theme='theme-five-b'
            link={false}
            textHeader='Zoology'
            data={data.item3}/>
          <LayoutSix 
            link={false}
            theme='theme-one-b'
            textHeader='Chemistry'
            data={data.item4}/>
          <LayoutThree 
            theme='theme-two-b'
            link={false}
            textHeader='Neurology'
            data={data.item5}/>
          <LayoutTwo
            link={false}
            theme='theme-three-b'
            textHeader='Diseases'
            data={data.item6}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Science.getInitialProps = async () => {
  const data = await getData('science')
  return { data }
}