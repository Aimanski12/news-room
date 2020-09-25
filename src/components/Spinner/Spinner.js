import React, {useEffect} from 'react'

function Spinner(props) {
  useEffect(()=>{
    // console.log(props.spin)
    showSpinner(props.spin)
  })
  return (
    <div className="content-center spinner-container">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  )
}

export default Spinner

function showSpinner(spin){
  const el = document.querySelector('.spinner-container')
  if(spin){
    el.style.display = 'block'
  } else {
    el.style.display = 'none'
  }
}