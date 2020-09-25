import React from 'react'
import Burger from '../../../Svg/burger'
import Close from '../../../Svg/times'

function MenuSmall() {

  function showlist(){
    const list = document.querySelector('.menu-small-lists')
    list.classList.toggle('show-list')
  }
  

  return (
    <div className="menu-small">
      <div className="content-center menu-small-burger">
        <span onClick={showlist}>
           <Burger />
        </span>
      </div>
      <div className="menu-small-lists">
        
        <div className="small-list-button">
          <span onClick={showlist}>
            <Close />
          </span>
        </div>

        <div className="small-list-items">
          <div className="side-menu-items">
            <span className='display-7 text-cap'>World</span>
            <span className='display-10 text-cap'>US</span>
            <span className='display-10 text-cap'>UK</span>
            <span className='display-10 text-cap'>Australia</span>
            <span className='display-10 text-cap'>Asia</span>
            <span className='display-10 text-cap'>Americas</span>
            <span className='display-10 text-cap'>Africa</span>
            <span className='display-10 text-cap'>Europe</span>
          </div>
          <div className="side-menu-items">
            <span className='display-7 text-cap'>News</span>
            <span className='display-10 text-cap'>Technology</span>
            <span className='display-10 text-cap'>Science</span>
            <span className='display-10 text-cap'>Politics</span>
            <span className='display-10 text-cap'>Covid-19</span>
            <span className='display-10 text-cap'>Education</span>
          </div>

          <div className="side-menu-items">
            <span className='display-7 text-cap'>Money</span>
            <span className='display-10 text-cap'>Finance</span>
            <span className='display-10 text-cap'>Business</span>
            <span className='display-10 text-cap'>Investment</span>
            <span className='display-10 text-cap'>Realestate</span>
            <span className='display-10 text-cap'>Work</span>
          </div>
          <div className="side-menu-items">
            <span className='display-7 text-cap'>Sports</span>
            <span className='display-10 text-cap'>Soccer</span>
            <span className='display-10 text-cap'>NBA</span>
            <span className='display-10 text-cap'>Tennis</span>
            <span className='display-10 text-cap'>Golf</span>
            <span className='display-10 text-cap'>MLB</span>
          </div>
          <div className="side-menu-items">
            <span className='display-7 text-cap'>Lifestyle</span>
            <span className='display-10 text-cap'>Relationship</span>
            <span className='display-10 text-cap'>Fashion</span>
            <span className='display-10 text-cap'>Books</span>
            <span className='display-10 text-cap'>Food</span>
            <span className='display-10 text-cap'>Travel</span>
          </div>

          <div className="side-menu-items">
            <span className='display-7 text-cap'>Culture</span>
            <span className='display-10 text-cap'>Festivals</span>
            <span className='display-10 text-cap'>Society</span>
            <span className='display-10 text-cap'>Arts and Design</span>
          </div>

          <div className="side-menu-items">
            <span className='display-7 text-cap'>Films</span>
            <span className='display-10 text-cap'>Drama</span>
            <span className='display-10 text-cap'>Music</span>
            <span className='display-10 text-cap'>Media</span>
            <span className='display-10 text-cap'>Stage</span>
          </div>

        </div>



      </div>
    </div>
  )
}

export default MenuSmall

