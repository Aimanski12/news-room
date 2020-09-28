import React from 'react'
import FooterLogo from './FooterLogo'
import navlinks from '../../utils/data/navlinks.json'
import FooterBottom from './FooterBottom'
import Navlinks from './NavLinks'

function Footer() {


  

  return (
    <footer className='content-center footer'>
      <div className="content-center footer-wrapper">

        <div className="content-center footer-menu-wrapper">
          <div className="footer-menu"> 
            
            <Navlinks data={navlinks.world} />
            <Navlinks data={navlinks.news} />
            <Navlinks data={navlinks.money} />
            <Navlinks data={navlinks.sports} />
            <Navlinks 
              data={navlinks.lifestyle} 
              cname='menu-block-2'/>
            <Navlinks 
              data={navlinks.culture} 
              cname='menu-block-2'/>
            <Navlinks 
              data={navlinks.films} 
              cname='menu-block-2'/>


          </div>
          
          <FooterLogo />
        </div>


        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer

