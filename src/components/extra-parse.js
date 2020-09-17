import React from 'react'
import parse from 'html-react-parser'

function News(props) {
  let data = props.data
  // console.log(data)

  const items = data.map((d, i) =>{
    return (
    <div className="text-cont" key={i}>
      <h1>{d.webTitle}</h1>
      <img src={d.fields.thumbnail} alt=""/>
    <p>{parse(d.fields.trailText)}</p>
    </div> )
  })



  return (
    <div className="container">
      <h1 className='header'>{props.header}</h1>
      {items}
    </div>
  )
}

export default News
