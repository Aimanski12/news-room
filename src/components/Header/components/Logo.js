import React from 'react'
import LogoSvg from '../../Svg/logo'

function Logo() {
  return (
    <div className="content-center navbar-logo">
      <a href="/" className='content-center'>
        <LogoSvg />
      </a>
      <span className='text-logo'>Free Fresh News. Anytime. Anywhere.</span>

    </div>
  )
}

export default Logo
