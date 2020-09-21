import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
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
        let results = await getData('politics')
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
        <title>News-Box | Politics</title>
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
                  theme='theme-five-a'
                  textHeader='US'
                  data={data.data.item1}/>
                <LayoutFour 
                  theme='theme-four-b'
                  link={false}
                  textHeader='UK'
                  data={data.data.item2}/>
                <LayoutFive 
                  theme='theme-three-b'
                  link={false}
                  textHeader='Australia'
                  data={data.data.item3}/>
                <LayoutThree 
                  theme='theme-two-b'
                  link={false}
                  textHeader='Asia'
                  data={data.data.item4}/>
                <LayoutTwo 
                  link={false}
                  theme='theme-one-b'
                  textHeader='Africa'
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
