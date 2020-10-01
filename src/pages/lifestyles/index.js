import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
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
    setSpinning('loaded', 'Lifestyle', 'lifestyle-home')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Lifestyle News</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutTwo 
            link={'/lifestyles/relationship'}
            fromIndex={true}
            theme='theme-four-a'
            textHeader='Relationship'
            data={data.item1}/>
          <LayoutOne
            link={'/lifestyles/fashion'}
            fromIndex={true}
            theme='theme-five-b'
            textHeader='Fashion'
            data={data.item2}/>
          <LayoutFour
            link={'/lifestyles/books'}
            fromIndex={true}
            theme='theme-one-b'
            textHeader='Books'
            data={data.item3}/>
          <LayoutThree
            link={'/lifestyles/food'}
            fromIndex={true}
            theme='theme-two-a'
            textHeader='Food'
            data={data.item4}/>
          <LayoutFive
            link={'/lifestyles/travel'}
            fromIndex={true}
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