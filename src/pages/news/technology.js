import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Technology({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Technology')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Technology</title>
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
          <LayoutTwo 
            theme='theme-three-a'
            link={false}
            textHeader='Gadgets'
            data={data.item1}/>
          <LayoutFour 
            theme='theme-four-b'
            link={false}
            textHeader='Artificial Intelligence'
            data={data.item2}/>
          <LayoutFive 
            theme='theme-five-b'
            link={false}
            textHeader='Gaming'
            data={data.item3}/>
          <LayoutSix 
            link={false}
            theme='theme-one-b'
            textHeader='Smart Phones'
            data={data.item4}/>
          <LayoutThree 
            theme='theme-two-a'
            link={false}
            textHeader='Computing'
            data={data.item5}/>
          <LayoutOne 
            link={false}
            theme='theme-three-b'
            textHeader='Softwares'
            data={data.item6}/>
          <LayoutOne 
            link={false}
            theme='theme-four-b'
            textHeader='E-Finance'
            data={data.item7}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Technology.getInitialProps = async () => {
  const data = await getData('tech')
  return { data }
}