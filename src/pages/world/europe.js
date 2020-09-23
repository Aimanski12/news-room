import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'

export default function Europe({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Europe News</title>
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
            theme='theme-five-a'
            textHeader='Russia'
            data={data.data.item1}/>
          <LayoutThree
            link={false}
            theme='theme-four-b'
            textHeader='UK'
            data={data.data.item2}/>
          <LayoutFour
            link={false}
            theme='theme-one-a'
            textHeader='Germany'
            data={data.data.item3}/>
          <LayoutFive
            link={false}
            theme='theme-three-b'
            textHeader='France'
            data={data.data.item4}/>
          <LayoutOne
            link={false}
            theme='theme-two-a'
            textHeader='Norway'
            data={data.data.item5}/>
          <LayoutSix
            link={false}
            theme='theme-five-b'
            textHeader='Turkey'
            data={data.data.item6}/>
          <LayoutTwo
            link={false}
            theme='theme-four-b'
            textHeader='Europe'
            data={data.data.item7}/>
        </div>
      </main>

      <Footer />
    </div>
  )
}

Europe.getInitialProps = async () => {
  const data = await getData('usnews')
  return { data }
}