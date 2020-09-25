import React from 'react'
import links from '../../utils/data/footer-icon-links.json'


function FooterBottom() {
  let l = links.link

  let icons = l.map((name, i) => {
    return (
      <span className='logo-icon' key={i}>
        <a href={name.link}
          rel='noopener noreferrer'
          target='_blank'>
          <img src={`/image/${name.img}-logo.png`} alt={`${name} icon`}/>
        </a>
      </span>
    )
  })

  return (
    <div className="content-center footer-bottom">
      <span className='display-9 text-head bottom-wrapper'>
        A project for fun, learning and creativity.</span>
      <div className='content-center bottom-wrapper'>
        {icons}
      </div>
      <span className='display-9 text-head bottom-wrapper'>&copy; 
        <a href="/" className='display-9 text-head'>Aiman Adlawan</a> 2020.</span>
        
    </div>
  )
}

export default FooterBottom
