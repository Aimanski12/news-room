import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFour from '../../components/Layouts/LayoutFour'
import Footer from '../../components/Footer/Footer'

export default function Films({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Films</title>
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
            theme='theme-three-a'
            textHeader='Films'
            data={data.item1}/>
          <LayoutTwo
            link={false}
            theme='theme-four-b'
            textHeader='Media'
            data={data.item2}/>
          <LayoutOne
            link={false}
            theme='theme-five-b'
            textHeader='Stage'
            data={data.item3}/>
          <LayoutFour
            link={false}
            theme='theme-one-a'
            textHeader='Music'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Films.getInitialProps = async () => {
  const data = await getData('filmall')
  return { data }
}