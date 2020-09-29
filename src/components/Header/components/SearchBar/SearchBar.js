import React, {useState, useContext, useEffect} from 'react'
import {AppData} from '../../../../utils/context/contextapi'
import {useRouter} from 'next/router'
import Close from '../../../Svg/times'
import {showBars, formatText} from '../../../../utils/common/common'
import SearchSvg from '../../../Svg/search'

function SearchBar() {
  const {setSpinning} = useContext(AppData)

  const router = useRouter()
  const [inputValue, setInputvalue] = useState('')

  function setUrl () {
    if (!inputValue || 1 === inputValue.length || /^\s*$/.test(inputValue)) {
      return 
    } else {
      router.replace('/search/news/[searchnews]', 
      `/search/news/${formatText(inputValue)}`)
      setInputvalue('')
      setSpinning('click', 'Page')
    }
  }

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
              onChange={(e)=>setInputvalue(e.target.value)}
              value={inputValue}
              className='display-9 text-cap'
              placeholder='Enter Keywords'/>
            <button
              onClick={()=> {
                showBars('search')
                setUrl()
              }}
              className='display-9 text-cap'>Search</button>
          </div>
        </div>
      </div>

      <div className="content-center search-input-wide">
        <input type="text" 
          onChange={(e)=>setInputvalue(e.target.value)}
          onKeyPress={(e)=>{
            if(e.key === 'Enter'){
              setUrl()
            }
          }}
          value={inputValue}
          placeholder='Enter Keywords'/>
        <button
          onClick={()=> setUrl()}>
          <SearchSvg />
        </button>
      </div>

    </div>
  )
}

export default SearchBar
