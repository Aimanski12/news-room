import React from 'react'
import Link from 'next/link'

function LinkText(props) {

   let header = props.link ? (
      <Link href={props.link} as={props.link}>
        <a>
          <h2 className='display-4 text-head'>{props.textHeader}</h2> 
        </a>
      </Link>
   ) : (
     <h2 className='display-4 text-head'>{props.textHeader}</h2>
   )
    
  return (
    <div className='left'>
      {header}
    </div>
  )
}

export default LinkText
