import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutOne from '../../components/Layouts/LayoutOne'

export default function Americas() {

  const [data, setData] = useState({
    isSet: false,
    data: {}
  })
  
  useEffect(() => {
    if(!data.isSet){
      async function gData() {
        let results = await getData('amnews')
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
        <title>News-Box | Americas News</title>
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
                <LayoutSix
                  link={false}
                  theme='theme-three-a'
                  textHeader='Brazil'
                  data={data.data.item1}/>
                <LayoutOne
                  link={false}
                  theme='theme-two-b'
                  textHeader='Mexico'
                  data={data.data.item2}/>
                <LayoutTwo
                  link={false}
                  theme='theme-four-a'
                  textHeader='Argentina'
                  data={data.data.item3}/>
                <LayoutThree
                  link={false}
                  theme='theme-one-b'
                  textHeader='Americas'
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

