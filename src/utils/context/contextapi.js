import React, {useState, createContext} from 'react'
import {setFirebase} from '../firebase/setFirebase'

export const AppData = createContext()

export function AppsDataContext (props) {
  const [isSpin, setSpin] = useState({
    spin: false,
    page: 'World',
    isDone: 'initial'
  })

  const [news, setNews] = useState({
    isSet: false,
    news: {}
  })

  function setSpinning (event, page, fPage){
    if(event === 'click'){
      updateState(true, page, true)
    } else if (event === 'loaded'){
      if(isSpin.isDone === true){
        if(page === isSpin.page){
          setFirebase(fPage)
          updateState(false, page, false)
        }
      } else if (isSpin.isDone === 'initial') {
        setFirebase(fPage)
      }
    }
  }

  function updateState (a, b, c){
    setSpin({spin: a, page: b, isDone: c})
  }


  function setNewsItem(set ,val) {
    if(set){
      setNews({isSet: true, news: val})
    }
  }

  return (
    <AppData.Provider value={{ 
      isSpin, 
      setSpinning,
      news,
      setNewsItem
    }}>
      {props.children}
    </AppData.Provider>
  )
}