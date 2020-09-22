import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutFour from '../../components/Layouts/LayoutFour'

// import parse from 'html-react-parser'
export default function Fashion() {

  const [data, setData] = useState({
    isSet: false,
    data: {}
  })
  
  useEffect(() => {
    if(!data.isSet){
      async function gData() {
        let results = await getData('fashion')
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
        <title>News-Box | Fashion</title>
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
                  textHeader='Milan'
                  data={data.data.item1}/>
                <LayoutThree
                  link={false}
                  theme='theme-five-b'
                  textHeader='Paris'
                  data={data.data.item2}/>
                <LayoutSix
                  link={false}
                  theme='theme-three-a'
                  textHeader='Beauty'
                  data={data.data.item3}/>
                <LayoutFive
                  link={false}
                  theme='theme-four-b'
                  textHeader='Dress'
                  data={data.data.item4}/>
                <LayoutOne
                  link={false}
                  theme='theme-two-b'
                  textHeader='Fragrance'
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

