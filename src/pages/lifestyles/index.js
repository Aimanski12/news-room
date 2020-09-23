import React from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'
import Footer from '../../components/Footer/Footer'

// import parse from 'html-react-parser'
export default function Lifestyles({data}) {

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Lifestyle News</title>
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
            theme='theme-four-a'
            textHeader='Lifestyle'
            data={data.item1}/>
          <LayoutOne
            link={false}
            theme='theme-five-b'
            textHeader='Fashion'
            data={data.item2}/>
          <LayoutFour
            link={false}
            theme='theme-one-b'
            textHeader='Book'
            data={data.item3}/>
          <LayoutThree
            link={false}
            theme='theme-two-a'
            textHeader='Food'
            data={data.item4}/>
          <LayoutFive
            link={false}
            theme='theme-three-b'
            textHeader='Travel'
            data={data.item5}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Lifestyles.getInitialProps = async () => {
  const data = await getData('lifestyleall')
  return { data }
}