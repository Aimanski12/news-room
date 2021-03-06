
import anime from 'animejs'
import moment from 'moment'

// function to show the submenu list when 'more' menu is clicked
export function showSubMenu () {
  const submenu = document.querySelector('.sub-menu-lists')
  const containsClass = submenu.classList.contains('show-submenu-lists')

  if(containsClass){
    anime({
      targets: submenu,
      opacity: 0,
      duration: 300,
      easing: 'easeInOutCirc',
      complete: function (anim) {
        submenu.classList.toggle('show-submenu-lists')
      }
    });
  } else {
    submenu.classList.toggle('show-submenu-lists')
    anime({
      targets: submenu,
      opacity: 1,
      delay: 20,
      duration: 300,
      easing: 'easeInOutCirc',
    });
  }
}

// function to remove the first item in the list
export function sortList (lists){
  return lists.filter((list, i) => {
    return i > 0
  })
}

// function to set show/unshow the search bar
export function showBars(btn) {
  const sBar = document.querySelector('.search-small-container')
  const menu = document.querySelector('.menu-small-lists')
  if(btn === 'search') {
    sBar.classList.toggle('show-search-bar')
    menu.classList.remove('show-list')
  } else {
    sBar.classList.remove('show-search-bar')
    menu.classList.toggle('show-list')
  }
}

// function the set the string as the url
export function setUrl (url){
  const a = url.split('/')
  return `${a[a.length - 1]}`
}

export function formatTime(time){
  let t;
  const now = moment().toString()
  const today = moment(now).format('MMMM DD, YYYY')
  const newsDate = moment(time).format('MMMM DD, YYYY')
  if(today === newsDate) {
    t = moment(time).format('dddd, MMMM DD, YYYY, hh:mm a')
  } else {
    t = moment(time).format('MMMM DD, YYYY, dddd')
  }
  return t
}


export function todayTime () {
  const now = moment().toString()
  return moment(now).format('dddd, MMMM DD, YYYY')
}

export function formatText(text){
  const a = text.split(' ')
  return a.join('-')
}
