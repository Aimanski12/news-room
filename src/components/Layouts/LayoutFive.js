import React from 'react'
import parse from 'html-react-parser'
import Link from '../Link/Link'
import Clock from '../../components/Svg/clock'

function LayoutFive(props) {
  let data = props.data ? props.data : null

  let item1 = data[0] ? (
    <div className="news-item item-1">
      <img src={data[0].fields.thumbnail} alt=""/>
      <div className="text-wrapper text-flex-a">
        <p className="display-9 text-head">{parse(data[0].fields.trailText)}</p>
        <span className='display-11 text-cap timer-5'><Clock/>July 2020</span>
      </div>
    </div> ) : null
  
  let item2 = data[1] ? (
    <div className="news-item item-2">
      <img src={data[1].fields.thumbnail} alt=""/>
      <div className="text-wrapper text-flex-a">
        <p className="display-9 text-head">{parse(data[1].fields.trailText)}</p>
        <span className='display-11 text-cap timer-5'><Clock/>July 2020</span>
      </div>
    </div> ) : null

  let item3 = data[2] ? (
    <div className="news-item item-3">
      <img src={data[2].fields.thumbnail} alt=""/>
      <div className="text-wrapper text-flex-a">
        <p className="display-9 text-head">{parse(data[2].fields.trailText)}</p>
        <span className='display-11 text-cap timer-5'><Clock/>July 2020</span>
      </div>
    </div> ) : null

  let item4 = data[3] ? (
    <div className="news-item item-4">
      <img src={data[3].fields.thumbnail} alt=""/>
      <div className="text-wrapper text-flex-a">
        <p className="display-9 text-head">{parse(data[3].fields.trailText)}</p>
        <span className='display-11 text-cap timer-5'><Clock/>July 2020</span>
      </div>
    </div> ) : null

  let item5 = data[4] ? (
    <div className="news-item item-5">
      <div className="text-wrapper">
        <p className="display-9 text-head">{parse(data[4].fields.trailText)}</p>
        <span className='display-11 text-cap timer-5'><Clock/>July 2020</span>
      </div>
    </div> ) : null

  let item6 = data[5] ? (
    <div className="news-item item-6">
      <div className="text-wrapper">
        <p className="display-9 text-head">{parse(data[5].fields.trailText)}</p>
        <span className='display-11 text-cap timer-5'><Clock/>July 2020</span>
      </div>
    </div> ) : null
  
  let item7 = data[6] ? (
    <div className="news-item item-7">
      <div className="text-wrapper">
        <p className="display-9 text-head">{parse(data[6].fields.trailText)}</p>
        <span className='display-11 text-cap timer-5'><Clock/>July 2020</span>
      </div>
    </div> ) : null

  let item8 = data[7] ? (
    <div className="news-item item-8">
      <div className="text-wrapper">
        <p className="display-9 text-head">{parse(data[7].fields.trailText)}</p>
        <span className='display-11 text-cap timer-5'><Clock/>July 2020</span>
      </div>
    </div> ) : null

  return (
    <div className={`content-center layout-five ${props.theme}`}>
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
          {item7}
          {item8}
        </div>
      </div>
    </div>
  )
}

export default LayoutFive
