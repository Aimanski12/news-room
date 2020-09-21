import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
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
        let results = await getData('tech')
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
        <title>News-Box | Technology</title>
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
                  theme='theme-three-a'
                  link={false}
                  textHeader='Gadgets'
                  data={data.data.item1}/>
                <LayoutFour 
                  theme='theme-four-b'
                  link={false}
                  textHeader='Artificial Intelligence'
                  data={data.data.item2}/>
                <LayoutFive 
                  theme='theme-five-b'
                  link={false}
                  textHeader='Gaming'
                  data={data.data.item3}/>
                <LayoutSix 
                  link={false}
                  theme='theme-one-b'
                  textHeader='Smart Phones'
                  data={data.data.item4}/>
                <LayoutThree 
                  theme='theme-two-a'
                  link={false}
                  textHeader='Computing'
                  data={data.data.item5}/>
                <LayoutOne 
                  link={false}
                  theme='theme-three-b'
                  textHeader='Softwares'
                  data={data.data.item6}/>
                <LayoutOne 
                  link={false}
                  theme='theme-four-b'
                  textHeader='E-Finance'
                  data={data.data.item7}/>
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
