import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
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
    setSpinning('loaded', 'Drama')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Drama Films</title>
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
          <LayoutSix
            link={false}
            theme='theme-three-a'
            textHeader='Drama'
            data={data.item2}/>
          <LayoutOne
            link={false}
            theme='theme-two-a'
            textHeader='Films'
            data={data.item1}/>
          <LayoutThree
            link={false}
            theme='theme-four-b'
            textHeader='Documentary'
            data={data.item3}/>
          <LayoutTwo
            link={false}
            theme='theme-five-a'
            textHeader='Comedy'
            data={data.item4}/>
            <LayoutFive
            link={false}
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