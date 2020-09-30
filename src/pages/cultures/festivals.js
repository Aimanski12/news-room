import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFive from '../../components/Layouts/LayoutFive'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Festival({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Festivals')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Festivals</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutFive 
            link={false}
            theme='theme-two-a'
            textHeader='Festivals'
            data={data.item1}/>
          <LayoutThree
            link={false}
            theme='theme-one-b'
            textHeader='Museums'
            data={data.item2}/>
          <LayoutOne 
            theme='theme-four-b'
            link={false}
            textHeader='Culture'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Festival.getInitialProps = async () => {
  const data = await getData('culture')
  return { data }
}