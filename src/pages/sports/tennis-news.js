import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutThree from '../../components/Layouts/LayoutThree'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutFour from '../../components/Layouts/LayoutFour'

export default function Tennis() {

  const [data, setData] = useState({
    isSet: false,
    data: {}
  })
  
  useEffect(() => {
    if(!data.isSet){
      async function gData() {
        let results = await getData('tennis')
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
        <title>News-Box | Tennis News</title>
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
                  theme='theme-three-b'
                  textHeader='This Month'
                  data={data.data.item1}/>
                <LayoutThree
                  theme='theme-four-b'
                  link={false}
                  textHeader='Last Month'
                  data={data.data.item2}/>
                <LayoutFour 
                  theme='theme-five-a'
                  link={false}
                  textHeader='Previews Month'
                  data={data.data.item3}/>
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
