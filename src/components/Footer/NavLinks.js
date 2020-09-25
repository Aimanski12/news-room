import React, {useContext} from 'react'
import {AppData} from '../../utils/context/contextapi'
import Link from 'next/link'

function NavLinks(props) {
  const {setSpinning} = useContext(AppData)

  let links = props.data.map((l, i) => {
    return (
      <Link href={l.link} 
        as={l.link} key={i}>
        <a>
          <span 
            className={`display-${i === 0 ? 7 : 10} text-cap`}
            onClick={()=>setSpinning('click', l.name)}>{l.name}</span>
        </a>
      </Link>
    )
  })

  return (
    <div className="menu-block-section">
      <div className={`menu-wrapper ${props.cname ? props.cname : ''}`}>
        {links}
      </div>
    </div>
  )
}

export default NavLinks
