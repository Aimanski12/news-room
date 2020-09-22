import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutThree from '../../components/Layouts/LayoutThree'

export default function Work() {

  const [data, setData] = useState({
    isSet: false,
    data: {}
  })
  
  useEffect(() => {
    if(!data.isSet){
      async function gData() {
        let results = await getData('work')
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
        <title>News-Box | Work</title>
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
                  textHeader='Finance'
                  data={data.data.item1}/>
                <LayoutThree
                  link={false}
                  theme='theme-two-b'
                  textHeader='Home'
                  data={data.data.item2}/>
                <LayoutOne
                  link={false}
                  theme='theme-four-a'
                  textHeader='Mortgages'
                  data={data.data.item3}/>
                <LayoutTwo
                  link={false}
                  theme='theme-one-b'
                  textHeader='Bills'
                  data={data.data.item4}/>
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

