import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFive from '../../components/Layouts/LayoutFive'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Drama({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Drama', 'films-drama')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Drama Films</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutSix
            link='/films/drama'
            theme='theme-three-a'
            textHeader='Drama'
            data={data.item2}/>
          <LayoutOne
            link='/films/films-news'
            theme='theme-two-a'
            textHeader='Films'
            data={data.item1}/>
          <LayoutThree
            link='/films/documentary'
            theme='theme-four-b'
            textHeader='Documentary'
            data={data.item3}/>
          <LayoutTwo
            link='/films/comedy'
            theme='theme-five-a'
            textHeader='Comedy'
            data={data.item4}/>
            <LayoutFive
            link='/films/war'
            theme='theme-one-b'
            textHeader='War'
            data={data.item5}/>
        </div>
      </main>

      <Footer />
    </div>
  )
}

Drama.getInitialProps = async () => {
  const data = await getData('film')
  return { data }
}