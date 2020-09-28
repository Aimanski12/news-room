import React, {useContext} from 'react'
import {AppData} from '../../../../utils/context/contextapi'
import {showSubMenu} from '../../../../utils/common/common'
import Link from 'next/link'
import {sortList} from '../../../../utils/common/common'

function MenuItems(props) {
  const {setSpinning} = useContext(AppData)
  const items = sortList(props.links)
  
  const links = items.map((item, i) => {
    return (
      <Link key={i} href={item.link} as={item.link}>
        <a> <span 
          onClick={()=>{
            showSubMenu()
            setSpinning('click', item.name)
          }}
          className="display-9 text-head">{item.name}</span> </a>
      </Link>
    )
  })



  return (
    <div className='menu-items'>
      {links}
    </div>
  )
}

export default MenuItems