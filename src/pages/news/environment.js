import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutFour from '../../components/Layouts/LayoutFour'
import LayoutFive from '../../components/Layouts/LayoutFive'

// import parse from 'html-react-parser'
export default function Home() {

  const [data, setData] = useState({
    isSet: false,
    data: {}
  })
  
  useEffect(() => {
    if(!data.isSet){
      async function gData() {
        let results = await getData('envi')
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
        <title>News-Box | Environment</title>
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
                  theme='theme-four-a'
                  link={false}
                  textHeader='Climate Change'
                  data={data.data.item3}/>
                <LayoutOne 
                  link={false}
                  theme='theme-one-b'
                  textHeader='Wildlife'
                  data={data.data.item1}/>
                <LayoutTwo 
                  theme='theme-three-b'
                  link={false}
                  textHeader='Marine Life'
                  data={data.data.item2}/>
                <LayoutFour 
                  theme='theme-five-b'
                  link={false}
                  textHeader='Farming'
                  data={data.data.item4}/>
                <LayoutFive 
                  theme='theme-three-a'
                  link={false}
                  textHeader='Fossil Fuels'
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
