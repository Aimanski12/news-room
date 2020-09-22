import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutThree from '../../components/Layouts/LayoutThree'

export default function Travel() {

  const [data, setData] = useState({
    isSet: false,
    data: {}
  })
  
  useEffect(() => {
    if(!data.isSet){
      async function gData() {
        let results = await getData('travel')
        setData({
          isSet: true,
          data: {...results}
        })
      }
      gData()
    }
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Travel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='content-center'>
        <div className="content-center header-wrapper">
          <h1 className="">Header</h1>
        </div>
      </header>
      <main className='content-center news-body'>
        <div className="content-center body-container">
          {
            data.isSet ? (
              <Fragment>
                <LayoutOne
                  link={false}
                  theme='theme-four-a'
                  textHeader='Cruise'
                  data={data.data.item1}/>
                <LayoutSix
                  link={false}
                  theme='theme-three-b'
                  textHeader='Adventure'
                  data={data.data.item2}/>
                <LayoutThree
                  link={false}
                  theme='theme-one-a'
                  textHeader='Hostels'
                  data={data.data.item3}/>
                <LayoutTwo
                  link={false}
                  theme='theme-two-b'
                  textHeader='Flights'
                  data={data.data.item4}/>
                <LayoutFour
                  link={false}
                  theme='theme-five-b'
                  textHeader='Day Trips'
                  data={data.data.item5}/>
              </Fragment>
            ) : null
          }
        </div>
      </main>

      <footer className='content-center'>
        <div className="content-center footer-wrapper">
          <h1>Footer</h1>
        </div>

      </footer>
    </div>
  )
}

