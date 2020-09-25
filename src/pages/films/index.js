import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFour from '../../components/Layouts/LayoutFour'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Films({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Films')
  })
  

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Films</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <header className='content-center'>
        <div className="content-center header-wrapper">
          <h1 className="">Header</h1>
        </div>
      </header>
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutThree 
            link={'/films/drama'}
            theme='theme-three-a'
            textHeader='Drama'
            data={data.item1}/>
          <LayoutTwo
            link={'/films/media'}
            theme='theme-four-b'
            textHeader='Media'
            data={data.item2}/>
          <LayoutOne
            link={'/films/stage'}
            theme='theme-five-b'
            textHeader='Stage'
            data={data.item3}/>
          <LayoutFour
            link={'/films/music'}
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