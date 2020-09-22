import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutOne from '../../components/Layouts/LayoutOne'

export default function Australia() {

  const [data, setData] = useState({
    isSet: false,
    data: {}
  })
  
  useEffect(() => {
    if(!data.isSet){
      async function gData() {
        let results = await getData('ausnews')
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
        <title>News-Box | Australia News</title>
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
                <LayoutFour
                  link={false}
                  theme='theme-one-a'
                  textHeader='Politics'
                  data={data.data.item1}/>
                <LayoutFive
                  link={false}
                  theme='theme-five-b'
                  textHeader='Covid-19'
                  data={data.data.item2}/>
                <LayoutSix
                  link={false}
                  theme='theme-two-a'
                  textHeader='New South Wales'
                  data={data.data.item3}/>
                <LayoutOne
                  link={false}
                  theme='theme-four-b'
                  textHeader='Sydney'
                  data={data.data.item4}/>
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

