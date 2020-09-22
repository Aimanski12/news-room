import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutFour from '../../components/Layouts/LayoutFour'

// import parse from 'html-react-parser'
export default function Books() {

  const [data, setData] = useState({
    isSet: false,
    data: {}
  })
  
  useEffect(() => {
    if(!data.isSet){
      async function gData() {
        let results = await getData('books')
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
        <title>News-Box | Books</title>
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
                <LayoutFive
                  link={false}
                  theme='theme-two-a'
                  textHeader='Books'
                  data={data.data.item1}/>
                <LayoutFour
                  link={false}
                  theme='theme-one-b'
                  textHeader='Blog'
                  data={data.data.item2}/>
                <LayoutOne
                  link={false}
                  theme='theme-four-a'
                  textHeader='Fiction'
                  data={data.data.item3}/>
                <LayoutSix
                  link={false}
                  theme='theme-five-b'
                  textHeader='Price'
                  data={data.data.item4}/>
                <LayoutTwo
                  link={false}
                  theme='theme-three-b'
                  textHeader='Adult'
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
