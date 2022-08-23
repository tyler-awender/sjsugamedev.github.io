import './Website.css'

import { HashRouter, Route, Routes, NavLink } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './Navbar'
import Footer from './Footer'

import Home from './Home'
import Events from './Events'
import SummerWorkshop from './SummerWorkshop'

const banners = [
  // {
  //   text: <b>SUMMER 2022 WORKSHOP IS LIVE!</b>,
  //   cta: <NavLink to='/summer2022'>Read more</NavLink>,
  //   styles: {
  //     backgroundColor: '#0055a2',
  //     color: '#ffffff'
  //   }
  // },
  {
    text: 'Is something missing?',
    cta: <a href='/archive'>Visit the old site</a>
  }
]

const tabs = [
  {
    label: 'Games',
    link: 'https://sjsugamedev.itch.io/',
    isExternal: true
  },
  {
    label: 'Events',
    link: '/events',
    isExternal: false
  },
  {
    label: 'Knowledge Base',
    link: 'https://sjsugamedev.com/knowledge-base/#/',
    isExternal: true
  }
]

function Website () {
  return (
    <div>

      <HashRouter basename='/'>

        {banners.map(({ text, cta, styles }, index) => (
          <Banner styles={styles} key={index}>
            {text} {cta}
          </Banner>
        ))}

        <Header tabs={tabs} />

        <Routes>
          <Route path='/' exact element={<Home />} />
          {/* <Route path='/games' exact element={<Games />} /> */}
          <Route path='/events' exact element={<Events />} />

          <Route path='/summer2022' exact element={<SummerWorkshop />} />
        </Routes>

        <Footer tabs={tabs} />

      </HashRouter>

    </div>
  )
}

export default Website
