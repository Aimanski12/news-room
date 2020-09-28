import React, {useContext} from 'react'
import Link from 'next/link'
import {AppData} from '../../../../utils/context/contextapi'
import links from '../../../../utils/data/navlinks.json'
import Burger from '../../../Svg/burger'
import {showBars} from '../../../../utils/common/common'
import Close from '../../../Svg/times'

function MenuSmall() {
  const {setSpinning} = useContext(AppData)

  function navitems(items) {
    let links = items.map((l, i) => {
      return (
        <Link href={l.link} 
          as={l.link} key={i}>
          <a><span 
              className={`display-${i === 0 ? 7 : 10} text-cap`}
              onClick={()=>{
                showBars('menu')
                setSpinning('click', l.name)
              }}>{l.name}</span> </a>
        </Link> )
    })
    return ( <div className="side-menu-items"> {links} </div> )
  }

  return (
    <div className="menu-small">
      <div className="content-center menu-small-burger">
        <span onClick={()=>showBars('menu')}>
           <Burger />
        </span>
      </div>
      <div className="menu-small-lists">
        <div className="small-list-button">
          <span onClick={()=>showBars('menu')}>
            <Close />
          </span>
        </div>
        <div className="small-list-items">
          {navitems(links.world)}
          {navitems(links.news)}
          {navitems(links.money)}
          {navitems(links.sports)}
          {navitems(links.lifestyle)}
          {navitems(links.films)}
          {navitems(links.culture)}
        </div>
      </div>
    </div>
  )
}

export default MenuSmall

