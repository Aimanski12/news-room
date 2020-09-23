import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'
import Footer from '../../components/Footer/Footer'

export default function MLB({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | MLB News</title>
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
            link={false}
            theme='theme-four-b'
            textHeader='This Month'
            data={data.item1}/>
          <LayoutFour
            theme='theme-five-b'
            link={false}
            textHeader='Last Month'
            data={data.item2}/>
          <LayoutFive 
            theme='theme-one-a'
            link={false}
            textHeader='Previews Month'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

MLB.getInitialProps = async () => {
  const data = await getData('baseball')
  return { data }
}