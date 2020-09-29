import '../../styles/globals.css'

// fonts
import '../../styles/font.css'

// header css
import '../../styles/header/header.css'
import '../../styles/header/logo.css'
import '../../styles/header/menu.css'
import '../../styles/header/search.css'
import '../../styles/header/submenu.css'

// body
import '../../styles/body/body.css'
import '../../styles/body/layoutone.css'
import '../../styles/body/layouttwo.css'
import '../../styles/body/layoutthree.css'
import '../../styles/body/layoutfour.css'
import '../../styles/body/layoutfive.css'
import '../../styles/body/layoutsix.css'

// theme
import '../../styles/themes/themeone.css'
import '../../styles/themes/themetwo.css'
import '../../styles/themes/themethree.css'
import '../../styles/themes/themefour.css'
import '../../styles/themes/themefive.css'

// footer
import '../../styles/footer/footer.css'
import '../../styles/footer/footer-logo.css'
import '../../styles/footer/bottom.css'

// news body
import '../../styles/newsbody/newsbody.css'
import '../../styles/newsbody/searchresults.css'

// spinner
import '../../styles/spinner/spinner.css'

// not found
import '../../styles/notfound/notfound.css'

// data context 
import {AppsDataContext} from '../utils/context/contextapi'


function MyApp({ Component, pageProps }) {
  return (
    <AppsDataContext>
      <Component {...pageProps} />
    </AppsDataContext>
  )
}

export default MyApp

