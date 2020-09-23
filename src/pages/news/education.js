import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'

export default function Education({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Education</title>
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
            theme='theme-three-a'
            textHeader='University'
            data={data.item1}/>
          <LayoutThree 
            link={false}
            theme='theme-four-b'
            textHeader='Freshers'
            data={data.item2}/>
          <LayoutFour 
            theme='theme-two-b'
            link={false}
            textHeader='Students'
            data={data.item3}/>
          <LayoutSix 
            theme='theme-six-b'
            link={false}
            textHeader='Medical Research'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Education.getInitialProps = async () => {
  const data = await getData('edu')
  return { data }
}