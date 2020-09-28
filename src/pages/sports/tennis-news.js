import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFour from '../../components/Layouts/LayoutFour'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Tennis({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Tennis')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Tennis News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutOne
            link='/sports/tennis-news'
            theme='theme-three-b'
            textHeader='This Month'
            data={data.item1}/>
          <LayoutThree
            theme='theme-four-b'
            link='/sports/tennis-news'
            textHeader='Last Month'
            data={data.item2}/>
          <LayoutFour 
            theme='theme-five-a'
            link='/sports/tennis-news'
            textHeader='Previews Month'
            data={data.item3}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Tennis.getInitialProps = async () => {
  const data = await getData('tennis')
  return { data }
}