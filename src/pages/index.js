import React, {useEffect, useState, Fragment} from 'react'
import Head from 'next/head'
import parse from 'html-react-parser'
import {getData} from '../utils/api/apis'
import Items from '../components/news'

export default function Home() {

  const [data, setData] = useState({
    isSet: false,
    data: {}
  })
  
  useEffect(() => {
    if(!data.isSet){
      async function gData() {
        let results = await getData('sports')
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


  const time = new Date().toLocaleDateString()
  console.log(time)

  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        { data.isSet ? 
          <Fragment>
            {/* <Items 
              header='Wildlife'
              data={data.data.item1} />
            <Items 
              header='Marine Life'
              data={data.data.item2} />
            <Items 
              header='Climate Change'
              data={data.data.item3} />
            <Items 
              header='farming'
              data={data.data.item4} />
            <Items 
              header='Fossils'
              data={data.data.item5} />
            <Items 
              header='farming'
              data={data.data.item6} /> */}
            {/* <Items 
              header='Fossils'
              data={data.data.item7} /> */}
            {/* <Items 
              header='Technology'
              data={data.data.technology} />
            <Items 
              header='Science'
              data={data.data.science} />
            <Items 
              header='Politics'
              data={data.data.politics} />
            <Items 
              header='Opinion'
              data={data.data.opinion} />
            <Items 
              header='World'
              data={data.data.world} />
            <Items 
              header='Environment'
              data={data.data.environment} /> */}

          </Fragment> : null

        }
        
      </main>
    </div>
  )
}