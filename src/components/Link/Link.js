import React, {useContext} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Link from 'next/link'

function LinkText(props) {
  const {setSpinning} = useContext(AppData)

   let header = props.link ? (
      <Link href={props.link} as={props.link}>
        <a>
          <h2 
            className='display-4 text-head'
            onClick={()=>setSpinning('click', props.textHeader)}>{props.textHeader}</h2> 
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
