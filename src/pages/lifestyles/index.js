import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Lifestyles({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Lifestyle')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Lifestyle News</title>
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
            link={'/lifestyles/relationship'}
            theme='theme-four-a'
            textHeader='Relationship'
            data={data.item1}/>
          <LayoutOne
            link={'/lifestyles/fashion'}
            theme='theme-five-b'
            textHeader='Fashion'
            data={data.item2}/>
          <LayoutFour
            link={'/lifestyles/books'}
            theme='theme-one-b'
            textHeader='Books'
            data={data.item3}/>
          <LayoutThree
            link={'/lifestyles/food'}
            theme='theme-two-a'
            textHeader='Food'
            data={data.item4}/>
          <LayoutFive
            link={'/lifestyles/travel'}
            theme='theme-three-b'
            textHeader='Travel'
            data={data.item5}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Lifestyles.getInitialProps = async () => {
  const data = await getData('lifestyleall')
  return { data }
}