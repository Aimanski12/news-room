import React, {useContext, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {AppData} from '../utils/context/contextapi'
import Spinner from '../components/Spinner/Spinner'

export default function NotFound({data}) {
  const {setSpinning, isSpin} = useContext(AppData)

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Not Found</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      <Spinner spin={isSpin.spin}/>

      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container not-found">
          <h2 className='display-2 text-head'>Error 404</h2>          
          <h3 className='display-6 text-head'>Page not found.</h3>          
          <Link href='/'>
            <a onClick={()=> setSpinning('click', 'World')}>
              <button className='display-8 text-head'>Go to main page</button>
            </a>
          </Link>

        </div>
      </main>

      <Footer />
    </div>
  )
}
