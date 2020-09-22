import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutThree from '../../components/Layouts/LayoutThree'

export default function Money() {

  const [data, setData] = useState({
    isSet: false,
    data: {}
  })
  
  useEffect(() => {
    if(!data.isSet){
      async function gData() {
        let results = await getData('moneyall')
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
        <title>News-Box | Money News</title>
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
                <LayoutTwo
                  link={false}
                  theme='theme-five-a'
                  textHeader='Money'
                  data={data.data.item1}/>
                <LayoutOne
                  link={false}
                  theme='theme-four-b'
                  textHeader='Business'
                  data={data.data.item2}/>
                <LayoutFour
                  link={false}
                  theme='theme-three-a'
                  textHeader='Investment'
                  data={data.data.item3}/>
                <LayoutThree
                  link={false}
                  theme='theme-two-b'
                  textHeader='Realestate'
                  data={data.data.item4}/>
                <LayoutFive
                  link={false}
                  theme='theme-one-b'
                  textHeader='Work'
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

