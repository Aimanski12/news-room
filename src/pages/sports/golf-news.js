import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'

export default function Golf({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Golf News</title>
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
            theme='theme-five-b'
            textHeader='This Month'
            data={data.item1}/>
          <LayoutFive
            theme='theme-one-b'
            link={false}
            textHeader='Last Month'
            data={data.item2}/>
          <LayoutSix 
            theme='theme-two-a'
            link={false}
            textHeader='Previews Month'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Golf.getInitialProps = async () => {
  const data = await getData('golf')
  return { data }
}