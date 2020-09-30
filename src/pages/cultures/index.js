import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutSix from '../../components/Layouts/LayoutSix'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Culture({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Culture')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Cultures</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutFour 
            link={'/cultures/culture'}
            fromIndex={true}
            theme='theme-two-a'
            textHeader='Culture'
            data={data.item1}/>
          <LayoutTwo 
            link={'/cultures/society'}
            fromIndex={true}
            theme='theme-one-b'
            textHeader='Society'
            data={data.item2}/>
          <LayoutSix 
            theme='theme-four-b'
            link={'/cultures/art-and-design'}
            fromIndex={true}
            textHeader='Art and Design'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Culture.getInitialProps = async () => {
  const data = await getData('cultureAll')
  return { data }
}