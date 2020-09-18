import React from 'react'

function LayoutOne(props) {
  let data = props.data ? props.data : null
  console.log(data)
  

  let item1 = data ? (
    <div className="news-item item-1">
      <img src={data[0].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-3 text-head">{data[0].webTitle}</p>
        <span className='display-9 text-head'>{data[0].fields.trailText}</span>
        {/* <span className='display-9 text-head'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus repellat quam odio quia porro! Veniam sit aliquam quod dolore, odit illum culpa? </span> */}
      </div>
    </div> ) : null
  
  let item2 = data ? (
    <div className="news-item item-2">
      <img src={data[1].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-7 text-head">{data[1].webTitle}</p>
      </div>
    </div> ) : null

  let item3 = data ? (
    <div className="news-item item-3">
      <img src={data[2].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-7 text-head">{data[2].webTitle}</p>
      </div>
    </div> ) : null

  let item4 = data ? (
    <div className="news-item item-4">
      <img src={data[3].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-7 text-head">{data[3].webTitle}</p>
      </div>
    </div> ) : null

  let item5 = data ? (
    <div className="news-item item-5">
      <img src={data[4].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-7 text-head">{data[4].webTitle}</p>
      </div>
    </div> ) : null

  let item6 = data ? (
    <div className="news-item item-6">
      <img src={data[5].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-7 text-head">{data[5].webTitle}</p>
      </div>
    </div> ) : null

  return (
    <div className="content-center layout-one">
      <div className='left'>
        <h2 className='display-4 text-head'>Headlines</h2>
      </div>
      <div className="news-layout">
        <div className="layout-wrapper">
          {item1}
          {item2}
          {item3}
          {item4}
          {item5}
          {item6}
        </div>
      </div>
    </div>
  )
}

export default LayoutOne
