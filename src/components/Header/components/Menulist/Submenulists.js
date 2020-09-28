import React from 'react'
import MenuItems from './SubMenuItems'
import navLinks from '../../../../utils/data/navlinks.json'

function Submenulists() {

  return (
    <div className="content-center sub-menu-lists">
      <div className="sub-menu-list-container">
        <div className="sub-menu-list-wrapper">
          <MenuItems links={navLinks.world} />
          <MenuItems links={navLinks.news} />
          <MenuItems links={navLinks.money} />
          <MenuItems links={navLinks.sports} />
          <MenuItems links={navLinks.culture} />
          <MenuItems links={navLinks.lifestyle} />
          <MenuItems links={navLinks.films} />
        </div>
      </div>
    </div>
  )
}

export default Submenulists
