import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFive from '../../components/Layouts/LayoutFive'
import Footer from '../../components/Footer/Footer'

export default function Festival({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Festivals</title>
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
            theme='theme-two-a'
            textHeader='Festivals'
            data={data.item1}/>
          <LayoutThree
            link={false}
            theme='theme-one-b'
            textHeader='Museums'
            data={data.item2}/>
          <LayoutOne 
            theme='theme-four-b'
            link={false}
            textHeader='Culture'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Festival.getInitialProps = async () => {
  const data = await getData('culture')
  return { data }
}