import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutFour from '../../components/Layouts/LayoutFour'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Media({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Media', 'films-media')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Media</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutFive
            link='films-media/media-news'
            theme='theme-five-a'
            textHeader='Media'
            data={data.item1}/>
          <LayoutFour
            link='films-media/television'
            theme='theme-one-b'
            textHeader='Television'
            data={data.item2}/>
          <LayoutOne
            link='films-media/digital-media'
            theme='theme-two-a'
            textHeader='Digital Media'
            data={data.item3}/>
          <LayoutSix
            link='films-media/social-media'
            theme='theme-one-b'
            textHeader='Social Media'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Media.getInitialProps = async () => {
  const data = await getData('media')
  return { data }
}