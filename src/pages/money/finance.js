import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutThree from '../../components/Layouts/LayoutThree'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Money({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Finance')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Finance</title>
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
            link={false}
            theme='theme-five-a'
            textHeader='Business'
            data={data.item2}/>
          <LayoutFive
            link={false}
            theme='theme-four-b'
            textHeader='Debt'
            data={data.item3}/>
          <LayoutThree
            link={false}
            theme='theme-one-a'
            textHeader='Money'
            data={data.item1}/>
          <LayoutFour
            link={false}
            theme='theme-three-b'
            textHeader='Consumer'
            data={data.item4}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Money.getInitialProps = async () => {
  const data = await getData('money')
  return { data }
}