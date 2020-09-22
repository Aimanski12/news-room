import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutThree from '../../components/Layouts/LayoutThree'

export default function Business() {

  const [data, setData] = useState({
    isSet: false,
    data: {}
  })
  
  useEffect(() => {
    if(!data.isSet){
      async function gData() {
        let results = await getData('business')
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
        <title>News-Box | Business</title>
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
                <LayoutThree
                  link={false}
                  theme='theme-one-a'
                  textHeader='Economy'
                  data={data.data.item1}/>
                <LayoutSix
                  link={false}
                  theme='theme-five-b'
                  textHeader='Stocks'
                  data={data.data.item2}/>
                <LayoutFour
                  link={false}
                  theme='theme-two-a'
                  textHeader='Supermarket'
                  data={data.data.item3}/>
                <LayoutFive
                  link={false}
                  theme='theme-four-b'
                  textHeader='Retails'
                  data={data.data.item4}/>
                <LayoutOne
                  link={false}
                  theme='theme-three-b'
                  textHeader='Richlist'
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

