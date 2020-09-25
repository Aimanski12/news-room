import React, {useState, createContext} from 'react'

export const AppData = createContext()

export function AppsDataContext (props) {
  const [isSpin, setSpin] = useState({
    spin: false,
    page: 'World',
    isDone: false
  })

  function setSpinning (event, page){
    if(event === 'click'){
      updateState(true, page, true)
    } else if (event === 'loaded'){
      if(isSpin.isDone){
        if(page === isSpin.page){
          updateState(false, page, false)
        }
      }
    }
  }

  function updateState (a, b, c){
    setSpin({spin: a, page: b, isDone: c})
  }

  return (
    <AppData.Provider value={{ isSpin, setSpinning }}>
      {props.children}
    </AppData.Provider>
  )
}