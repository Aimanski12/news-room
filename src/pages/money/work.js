import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutThree from '../../components/Layouts/LayoutThree'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Work({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Work', 'money-work')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Work</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutSix
            link='/work/finance'
            theme='theme-three-a'
            textHeader='Finance'
            data={data.item1}/>
          <LayoutThree
            link='/work/home'
            theme='theme-two-b'
            textHeader='Home'
            data={data.item2}/>
          <LayoutOne
            link='/work/mortgages'
            theme='theme-four-a'
            textHeader='Mortgages'
            data={data.item3}/>
          <LayoutTwo
            link='/work/bills'
            theme='theme-one-b'
            textHeader='Bills'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Work.getInitialProps = async () => {
  const data = await getData('work')
  return { data }
}