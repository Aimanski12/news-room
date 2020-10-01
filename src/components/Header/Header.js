import React, {Fragment} from 'react'
import Logo from './components/Logo'
import Menulist from './components/Menulist/MenulistItems'
import SearchBar from './components/SearchBar/SearchBar'
import SubMenu from './components/Menulist/Submenulists'
import {todayTime} from '../../utils/common/common'

function Header() {
  
  return (
    <Fragment>
      <header className='content-center'>
        <div className="header-wrapper">
          <Logo />
          <div className="content-center menu-time display-8 text-head">
            {todayTime()}</div>
          <Menulist />
          <SearchBar />
        </div>
      </header>
      <SubMenu />
    </Fragment>
  )
}

export default Header
