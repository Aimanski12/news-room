import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
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
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutSix 
            link='/politics/us-politics'
            theme='theme-five-a'
            textHeader='US'
            data={data.item1}/>
          <LayoutFour 
            theme='theme-four-b'
            link='/politics/uk-politics'
            textHeader='UK'
            data={data.item2}/>
          <LayoutFive 
            theme='theme-three-b'
            link='/politics/australia-politics'
            textHeader='Australia'
            data={data.item3}/>
          <LayoutThree 
            theme='theme-two-b'
            link='/politics/asia-politics'
            textHeader='Asia'
            data={data.item4}/>
          <LayoutTwo 
            link='/politics/africa-politics'
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