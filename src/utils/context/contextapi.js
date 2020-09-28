import React, {useState, createContext} from 'react'

export const AppData = createContext()

export function AppsDataContext (props) {
  const [isSpin, setSpin] = useState({
    spin: false,
    page: 'World',
    isDone: false
  })

  const [news, setNews] = useState({
    isSet: false,
    news: {}
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