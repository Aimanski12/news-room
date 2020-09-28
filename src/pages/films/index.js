import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
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
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutThree 
            link={'/films/drama'}
            fromIndex={true}
            theme='theme-three-a'
            textHeader='Drama'
            data={data.item1}/>
          <LayoutTwo
            link={'/films/media'}
            fromIndex={true}
            theme='theme-four-b'
            textHeader='Media'
            data={data.item2}/>
          <LayoutOne
            link={'/films/stage'}
            fromIndex={true}
            theme='theme-five-b'
            textHeader='Stage'
            data={data.item3}/>
          <LayoutFour
            link={'/films/music'}
            fromIndex={true}
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