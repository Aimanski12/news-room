import React from 'react'
import Close from '../../../Svg/times'
import {showBars} from '../../../../utils/common/common'
import SearchSvg from '../../../Svg/search'

function SearchBar() {

  return (
    <div className="content-center navbar-search">

      <div className="search-input-short">
        <div className="content-center input-search-btn">
          <span onClick={()=>showBars('search')}>
            <SearchSvg />
          </span>
        </div>

        <div className="search-small-container">
          <div className="search-small-btn-close">
            <span onClick={()=>showBars('search')}>
              <Close />
            </span>
          </div>
          <div className="side-search-bar">
            <input type="text" 
              className='display-9 text-cap'
              placeholder='Enter Keywords'/>
            <button className='display-9 text-cap'>Search</button>
          </div>
        </div>
      </div>

      <div className="content-center search-input-wide">
        <input type="text" placeholder='Search News'/>
        <button>
          <SearchSvg />
        </button>
      </div>

    </div>
  )
}

export default SearchBar
