import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'

export default function Nba({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | NBA News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='content-center'>
        <div className="content-center header-wrapper">
          <h1 className="">Header</h1>
        </div>
      </header>
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutSix
            link={false}
            theme='theme-two-b'
            textHeader='This Month'
            data={data.item1}/>
          <LayoutTwo
            theme='theme-three-b'
            link={false}
            textHeader='Last Month'
            data={data.item2}/>
          <LayoutThree 
            theme='theme-four-a'
            link={false}
            textHeader='Previews Month'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Nba.getInitialProps = async () => {
  const data = await getData('basketball')
  return { data }
}