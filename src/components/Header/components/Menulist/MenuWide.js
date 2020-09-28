import React, {useContext} from 'react'
import {AppData} from '../../../../utils/context/contextapi'
import Link from 'next/link'
import navlink from '../../../../utils/data/top-navlink.json'
import {showSubMenu} from '../../../../utils/common/common'

function MenuWide() {
  const {setSpinning} = useContext(AppData)

  let links = navlink.links.map((l, i) => {
    if(l.name === 'More') {
      return (
        <span key={i}
          onClick={showSubMenu}
          className="display-7 text-head">More</span>
      )
    } else {
      return ( 
        <Link key={i} href={l.link} as={l.link}>
          <a> <span 
            onClick={()=>{
              setSpinning('click', l.name)
            }}
            className="display-7 text-head">{l.name}</span> </a>
        </Link>
      )
    }
  })

  return (
    <div className="menu-big">
      {links}
    </div>
  )
}

export default MenuWide

