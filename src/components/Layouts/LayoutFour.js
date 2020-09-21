import React from 'react'
import parse from 'html-react-parser'
import Link from '../Link/Link'

function LayoutFour(props) {
  let data = props.data ? props.data : null
  

  let item1 = data[0] ? (
    <div className="news-item item-1">
      <img src={data[0].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-6 text-head">{data[0].webTitle}</p>
      </div>
    </div> ) : null
  
  let item2 = data[1] ? (
    <div className="news-item item-2">
      <img src={data[1].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-7 text-head">{data[1].webTitle}</p>
      </div>
    </div> ) : null

  let item3 = data[2] ? (
    <div className="news-item item-3 text-flex">
      <img src={data[2].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-7 text-head">{data[2].webTitle}</p>
        <span className='display-9 text-head'>{parse(data[2].fields.trailText)}</span>
      </div>
    </div> ) : null

  let item4 = data[3] ? (
    <div className="news-item item-4 text-flex">
      <img src={data[3].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-7 text-head">{data[3].webTitle}</p>
        <span className='display-9 text-head'>{parse(data[3].fields.trailText)}</span>
      </div>
    </div> ) : null

  let item5 = data[4] ? (
    <div className="news-item item-5 text-flex">
      <img src={data[4].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-7 text-head">{data[4].webTitle}</p>
        <span className='display-9 text-head'>{parse(data[4].fields.trailText)}</span>
      </div>
    </div> ) : null

  let item6 = data[5] ? (
    <div className="news-item item-6 text-flex">
      <img src={data[5].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-7 text-head">{data[5].webTitle}</p>
        <span className='display-9 text-head'>{parse(data[5].fields.trailText)}</span>
      </div>
    </div> ) : null

  return (
    <div className={`content-center layout-four ${props.theme}`}>
      <Link 
        textHeader={props.textHeader}
        link={props.link}/>
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

export default LayoutFour
