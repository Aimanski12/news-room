import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutSix from '../../components/Layouts/LayoutSix'

// import parse from 'html-react-parser'
export default function Home() {

  const [data, setData] = useState({
    isSet: false,
    data: {}
  })
  
  useEffect(() => {
    if(!data.isSet){
      async function gData() {
        let results = await getData('sportAll')
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
        <title>News-Box | Sports</title>
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
                  theme='theme-four-a'
                  textHeader='Headlines'
                  data={data.data.item1}/>
                <LayoutFour 
                  link={false}
                  theme='theme-five-b'
                  textHeader='Soccer'
                  data={data.data.item2}/>
                <LayoutSix 
                  theme='theme-one-b'
                  link={false}
                  textHeader='NBA'
                  data={data.data.item3}/>
                <LayoutFive 
                  theme='theme-two-a'
                  link={false}
                  textHeader='Tennis'
                  data={data.data.item4}/>
                <LayoutOne 
                  theme='theme-thee-b'
                  link={false}
                  textHeader='Golf'
                  data={data.data.item5}/>
                <LayoutTwo 
                  theme='theme-four-b'
                  link={false}
                  textHeader='Baseball'
                  data={data.data.item6}/>
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
