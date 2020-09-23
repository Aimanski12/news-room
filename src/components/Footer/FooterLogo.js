import React from 'react'

function FooterLogo() {
  return (
    <div className="content-center footer-logo">
      <div className="content-center image-content">
        <img src="/image/logo-big.png" alt=""/>
        <span className='display-8 text-head text-saying'>Free fresh news. Anytime. Anywhere.</span>
      </div>


      <div className="text-credits">
        <div className="text-credit display-8 text-head">
          <span>Special thanks to: &nbsp;
            <a href="https://open-platform.theguardian.com/"
              rel='noopener noreferrer'
              target='_blank'>The Guardian</a></span>
          <span>For providing all content data.</span>
        </div>

        <div className='text-developer display-11 text-cap'>
          <span>A WebDev Project.</span>
          <span>Developed by: 
            <a href="https://aimanadlawan.com/" 
              rel='noopener noreferrer'
              target='_blank'> Aiman Adlawan</a>.</span>
        </div>
      </div>
    </div>
  )
}

export default FooterLogo
