import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFive from '../../components/Layouts/LayoutFive'

// import parse from 'html-react-parser'
export default function Film() {

  const [data, setData] = useState({
    isSet: false,
    data: {}
  })
  
  useEffect(() => {
    if(!data.isSet){
      async function gData() {
        let results = await getData('film')
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
        <title>News-Box | Film</title>
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
                  theme='theme-two-a'
                  textHeader='Films'
                  data={data.data.item1}/>
                <LayoutSix
                  link={false}
                  theme='theme-three-b'
                  textHeader='Drama'
                  data={data.data.item2}/>
                <LayoutThree
                  link={false}
                  theme='theme-four-b'
                  textHeader='Documentary'
                  data={data.data.item3}/>
                <LayoutTwo
                  link={false}
                  theme='theme-five-a'
                  textHeader='Comedy'
                  data={data.data.item4}/>
                  <LayoutFive
                  link={false}
                  theme='theme-one-b'
                  textHeader='War'
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
