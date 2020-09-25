import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutThree from '../../components/Layouts/LayoutThree'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Food({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Food')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Food</title>
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
            theme='theme-three-a'
            textHeader='Food'
            data={data.item1}/>
          <LayoutFive
            link={false}
            theme='theme-two-b'
            textHeader='Vegetables'
            data={data.item2}/>
          <LayoutTwo
            link={false}
            theme='theme-five-a'
            textHeader='Meat'
            data={data.item3}/>
          <LayoutOne
            link={false}
            theme='theme-one-b'
            textHeader='Fruit'
            data={data.item4}/>
          <LayoutThree
            link={false}
            theme='theme-four-b'
            textHeader='Chefs'
            data={data.item5}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Food.getInitialProps = async () => {
  const data = await getData('food')
  return { data }
}