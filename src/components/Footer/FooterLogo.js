import React from 'react'

function FooterLogo() {
  return (
    <div className="content-center footer-logo">
      <img src="/image/logo-big.png" alt=""/>
      <span className='display-8 text-head text-saying'>Free fresh news. Anytime. Anywhere.</span>

      <div className="text-credit display-8 text-head">
        <span>Special thanks to: <a href="/">The Guardian</a></span>
        <span>For providing all content data.</span>
      </div>

      <div className='text-developer display-11 text-cap'>
        <span>A WebDev Project.</span>
        <span>Developed by: <a href="/">Aiman Adlawan</a>.</span>
      </div>
    </div>
  )
}

export default FooterLogo
