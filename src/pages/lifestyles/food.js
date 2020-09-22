import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutThree from '../../components/Layouts/LayoutThree'

// import parse from 'html-react-parser'
export default function Food() {

  const [data, setData] = useState({
    isSet: false,
    data: {}
  })
  
  useEffect(() => {
    if(!data.isSet){
      async function gData() {
        let results = await getData('food')
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
        <title>News-Box | Food</title>
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
                  textHeader='Food'
                  data={data.data.item1}/>
                <LayoutFive
                  link={false}
                  theme='theme-two-b'
                  textHeader='Vegetables'
                  data={data.data.item2}/>
                <LayoutTwo
                  link={false}
                  theme='theme-five-a'
                  textHeader='Meat'
                  data={data.data.item3}/>
                <LayoutOne
                  link={false}
                  theme='theme-one-b'
                  textHeader='Fruit'
                  data={data.data.item4}/>
                <LayoutThree
                  link={false}
                  theme='theme-four-b'
                  textHeader='Chefs'
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

