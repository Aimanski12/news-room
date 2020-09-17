import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import {getData} from '../utils/api/apis'
import LayoutOne from '../components/Layouts/LayoutOne'

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

  // console.log(data.data)

  // let text = data.isSet ? data.data.response.results.map((r, i) => {
  //   return (
  //     <Fragment key={i}>
  //       <h2>{r.fields.headline}</h2>
  //       {/* {parse(r.fields.body)} */}
  //       {parse(r.fields.trailText)}
  //       <hr/>
  //     </Fragment>
  //   ) 
  // }) : null


  // getData()
  console.log(data.data)

  return (
    <div className='main-container'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='content-center'>
        <div className="content-center header-wrapper">
          <h1 className="">Header</h1>
        </div>
      </header>
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutOne />
          <h1>Body</h1>
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
