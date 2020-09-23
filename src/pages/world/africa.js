import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutOne from '../../components/Layouts/LayoutOne'
import Footer from '../../components/Footer/Footer'

export default function Africa({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Africa News</title>
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
            link={false}
            theme='theme-four-a'
            textHeader='South Africa'
            data={data.data.item1}/>
          <LayoutTwo
            link={false}
            theme='theme-three-b'
            textHeader='Egypt'
            data={data.data.item2}/>
          <LayoutThree
            link={false}
            theme='theme-five-a'
            textHeader='Nigeria'
            data={data.data.item3}/>
          <LayoutFour
            link={false}
            theme='theme-two-b'
            textHeader='Africas'
            data={data.data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Africa.getInitialProps = async () => {
  const data = await getData('usnews')
  return { data }
}