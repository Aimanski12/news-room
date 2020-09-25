import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Politics({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Politics')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Politics</title>
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
            theme='theme-five-a'
            textHeader='US'
            data={data.item1}/>
          <LayoutFour 
            theme='theme-four-b'
            link={false}
            textHeader='UK'
            data={data.item2}/>
          <LayoutFive 
            theme='theme-three-b'
            link={false}
            textHeader='Australia'
            data={data.item3}/>
          <LayoutThree 
            theme='theme-two-b'
            link={false}
            textHeader='Asia'
            data={data.item4}/>
          <LayoutTwo 
            link={false}
            theme='theme-one-b'
            textHeader='Africa'
            data={data.item5}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Politics.getInitialProps = async () => {
  const data = await getData('politics')
  return { data }
}