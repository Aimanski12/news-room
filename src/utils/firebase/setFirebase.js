import {saveInitalData, getTime, checkIfExp, addToSave} from './firebasehelpers'

// export function addItemToFirebase (folder, val) {
//   let session = sessionStorage.getItem('news-box')
//   let _data = JSON.parse(session)
//   addItem(_data.token, folder, val)
// }

export async function setFirebase(page) {
  let session = sessionStorage.getItem('news-box')
  if(session){
    let _data = JSON.parse(session)
    if(checkIfExp(_data.expiry)) {
      saveSession(_data.token)
      addToSave(_data.token, 'pages', {pages: page})
    } else {
      addToSave(_data.token, 'pages', {pages: page})
    } 
    
  } else {
    const _id = await saveInitalData(page)
    saveSession(_id)
  }
}

function saveSession (_id){
  let data = {
    token: _id,
    expiry: getTime('now'),
    web_app: 'news-box'
  }
  sessionStorage.setItem('news-box', JSON.stringify(data))
}

