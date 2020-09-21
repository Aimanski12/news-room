import React from 'react'
import parse from 'html-react-parser'
import Clock from '../../components/Svg/clock'
import Link from '../Link/Link'

function LayoutTwo(props) {
  let data = props.data ? props.data : null
  

  let item1 = data[0] ? (
    <div className="news-item item-1">
      <img src={data[0].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-7 text-head">{data[0].webTitle}</p>
        <div>
          <span className='display-9 text-head'>{parse(data[0].fields.trailText)}</span>
          <span className='display-11 text-cap timer'><Clock/>July 2020</span>
        </div>
      </div>
    </div> ) : null
  
  let item2 = data[1] ? (
    <div className="news-item item-2">
      <img src={data[1].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-7 text-head">{data[1].webTitle}</p>
        <div>
          <span className='display-9 text-head'>{parse(data[1].fields.trailText)}</span>
          <span className='display-11 text-cap timer'><Clock/>July 2020</span>
        </div>
      </div>
    </div> ) : null

  let item3 = data[2] ? (
    <div className="news-item item-3">
      <img src={data[2].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-8 text-head">{parse(data[2].webTitle)}</p>
        <span className='display-11 text-cap timer'><Clock/>July 2020</span>
      </div>
    </div> ) : null

  let item4 = data[3] ? (
    <div className="news-item item-4">
      <img src={data[3].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-8 text-head">{data[3].webTitle}</p>
        <span className='display-11 text-cap timer'><Clock/>July 2020</span>
      </div>
    </div> ) : null

  let item5 = data[4] ? (
    <div className="news-item item-5">
      <img src={data[4].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-8 text-head">{data[4].webTitle}</p>
        <span className='display-11 text-cap timer'><Clock/>July 2020</span>
      </div>
    </div> ) : null

  let item6 = data[5] ? (
    <div className="news-item item-6">
      <img src={data[5].fields.thumbnail} alt=""/>
      <div className="text-wrapper">
        <p className="display-8 text-head">{data[5].webTitle}</p>
        <span className='display-11 text-cap timer'><Clock/>July 2020</span>
      </div>
    </div> ) : null

  return (
    <div className={`content-center layout-three ${props.theme}`}>
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

export default LayoutTwo
