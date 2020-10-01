import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutOne from '../../components/Layouts/LayoutOne'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Art({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Arts and Design', 'cultures-arts-design')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Arts and Design</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutThree 
            link='/art-and-design/photography'
            theme='theme-two-a'
            textHeader='Photography'
            data={data.item1}/>
          <LayoutTwo
            link='/art-and-design/exhibits'
            theme='theme-one-b'
            textHeader='Exhibits'
            data={data.item2}/>
          <LayoutOne
            link='/art-and-design/society'
            theme='theme-three-a'
            textHeader='Society'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Art.getInitialProps = async () => {
  const data = await getData('art')
  return { data }
}