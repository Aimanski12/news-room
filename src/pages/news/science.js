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

export default function Science({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Science')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Science</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutTwo 
            theme='theme-three-b'
            link='/science/space-exploraion'
            textHeader='Space Exploration'
            data={data.item1}/>
          <LayoutFour 
            theme='theme-four-b'
            link='/science/medical-research'
            textHeader='Medical Research'
            data={data.item2}/>
          <LayoutFive 
            theme='theme-five-b'
            link='/science/zoology'
            textHeader='Zoology'
            data={data.item3}/>
          <LayoutSix 
            link='/science/chemistry'
            theme='theme-one-b'
            textHeader='Chemistry'
            data={data.item4}/>
          <LayoutThree 
            theme='theme-two-b'
            link='/science/neurology'
            textHeader='Neurology'
            data={data.item5}/>
          <LayoutTwo
            link='/science/diseases'
            theme='theme-three-b'
            textHeader='Diseases'
            data={data.item6}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Science.getInitialProps = async () => {
  const data = await getData('science')
  return { data }
}