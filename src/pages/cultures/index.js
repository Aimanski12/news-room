import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'

export default function Culture({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Cultures</title>
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
            link={'/cultures/culture'}
            theme='theme-two-a'
            textHeader='Culture'
            data={data.item1}/>
          <LayoutTwo 
            link={'/cultures/society'}
            theme='theme-one-b'
            textHeader='Society'
            data={data.item2}/>
          <LayoutSix 
            theme='theme-four-b'
            link={'/cultures/art-and-design'}
            textHeader='Art and Design'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Culture.getInitialProps = async () => {
  const data = await getData('cultureAll')
  return { data }
}