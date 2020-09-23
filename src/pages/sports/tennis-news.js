import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFour from '../../components/Layouts/LayoutFour'
import Footer from '../../components/Footer/Footer'

export default function Tennis({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Tennis News</title>
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
            theme='theme-three-b'
            textHeader='This Month'
            data={data.item1}/>
          <LayoutThree
            theme='theme-four-b'
            link={false}
            textHeader='Last Month'
            data={data.item2}/>
          <LayoutFour 
            theme='theme-five-a'
            link={false}
            textHeader='Previews Month'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Tennis.getInitialProps = async () => {
  const data = await getData('tennis')
  return { data }
}