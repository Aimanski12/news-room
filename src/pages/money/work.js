import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutThree from '../../components/Layouts/LayoutThree'
import Footer from '../../components/Footer/Footer'

export default function Work({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Work</title>
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
            theme='theme-three-a'
            textHeader='Finance'
            data={data.item1}/>
          <LayoutThree
            link={false}
            theme='theme-two-b'
            textHeader='Home'
            data={data.item2}/>
          <LayoutOne
            link={false}
            theme='theme-four-a'
            textHeader='Mortgages'
            data={data.item3}/>
          <LayoutTwo
            link={false}
            theme='theme-one-b'
            textHeader='Bills'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Work.getInitialProps = async () => {
  const data = await getData('work')
  return { data }
}