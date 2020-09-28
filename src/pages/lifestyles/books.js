import React, {useContext, useEffect} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import {getData} from '../../utils/api/apis'
import LayoutOne from '../../components/Layouts/LayoutOne'
import LayoutSix from '../../components/Layouts/LayoutSix'
import LayoutTwo from '../../components/Layouts/LayoutTwo'
import LayoutFive from '../../components/Layouts/LayoutFive'
import LayoutFour from '../../components/Layouts/LayoutFour'
import Footer from '../../components/Footer/Footer'
import Spinner from '../../components/Spinner/Spinner'

export default function Books({data}) {
  const {setSpinning, isSpin} = useContext(AppData)
  useEffect(()=>{
    setSpinning('loaded', 'Books')
  })

  return (
    <div className='main-container'>
      <Head>
        <title>News-Box | Books</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spinner spin={isSpin.spin}/>
      <Header />
      <main className='content-center news-body'>
        <div className="content-center body-container">
          <LayoutFive
            link='/books/book-news'
            theme='theme-two-a'
            textHeader='Books'
            data={data.item1}/>
          <LayoutFour
            link='/books/blogs'
            theme='theme-one-b'
            textHeader='Blog'
            data={data.item2}/>
          <LayoutOne
            link='/books/fiction'
            theme='theme-four-a'
            textHeader='Fiction'
            data={data.item3}/>
          <LayoutSix
            link='/books/price'
            theme='theme-five-b'
            textHeader='Price'
            data={data.item4}/>
          <LayoutTwo
            link='/books/adult'
            theme='theme-three-b'
            textHeader='Adult'
            data={data.item5}/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Books.getInitialProps = async () => {
  const data = await getData('books')
  return { data }
}