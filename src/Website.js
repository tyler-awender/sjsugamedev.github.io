import './Website.css'

import { HashRouter, Route, Routes /* NavLink */ } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './Navbar'
import Footer from './Footer'

import Home from './Home'
import Games from './Games'
import Events from './Events'
import PageNotFound from './PageNotFound'
import SummerWorkshop from './SummerWorkshop'
import GlobalGameJam from './GlobalGameJam'
import { useState, useEffect } from 'react'

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
    link: '/games',
    isExternal: false
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
  /* eslint-disable-next-line no-undef */
  const localStorageIsDarkTheme = localStorage.getItem('theme') === 'theme-dark'
  const [isDarkTheme, setDarkTheme] = useState(localStorageIsDarkTheme)

  useEffect(() => {
    applyDarkTheme()
  })

  function toggleTheme () {
    setDarkTheme(!isDarkTheme)
    applyDarkTheme()
  }

  function applyDarkTheme () {
    if (isDarkTheme) {
      /* eslint-disable-next-line no-undef */
      localStorage.setItem('theme', 'theme-dark')
      document.body.classList.add('theme-dark')
    } else {
      /* eslint-disable-next-line no-undef */
      localStorage.setItem('theme', 'theme-light')
      document.body.classList.remove('theme-dark')
    }
  }

  return (
    <div>

      <HashRouter basename='/'>

        <div className='top'>
          {banners.map(({ text, cta, styles }, index) => (
            <Banner styles={styles} key={index}>
              {text} {cta}
            </Banner>
          ))}

          <Header tabs={tabs} isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        </div>

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/games' exact element={<Games />} />
          <Route path='/events' exact element={<Events />} />

          <Route path='/summer2022' exact element={<SummerWorkshop />} />
          <Route path='/ggj2023' exact element={<GlobalGameJam />} />

          {/* 404 */}
          <Route path='*' element={<PageNotFound />}/>
        </Routes>

        <Footer tabs={tabs} />

      </HashRouter>

    </div>
  )
}

export default Website
