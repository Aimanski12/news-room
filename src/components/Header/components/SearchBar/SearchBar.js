import React from 'react'
import Close from '../../../Svg/times'
import SearchSvg from '../../../Svg/search'

function SearchBar() {
  function showsearchBar(){
    const list = document.querySelector('.search-small-container')
    list.classList.toggle('show-search-bar')
  }

  return (
    <div className="content-center navbar-search">
      <div className="search-input-short">

        <div className="content-center input-search-btn">
          <span onClick={showsearchBar}>
            <SearchSvg />
          </span>
        </div>





        <div className="search-small-container">


          <div className="search-small-btn-close">
            <span onClick={showsearchBar}>
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