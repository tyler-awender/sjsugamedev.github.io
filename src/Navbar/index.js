import styles from './index.module.css'

import Container from '../components/Container'
import logo from '../images/logo.png'

import Tab from './Tab'
import Menu from './Menu'

function Navbar (props) {
  function handleToggleTheme () {
    props.toggleTheme()
  }

  return (
    <Container
      styles={{
        backgroundColor: 'var(--background-color)'
      }}
      className={styles.container}
    >
      {/* Left side: Home */}
      <Tab link='/'>
        <img src={logo} alt='Home' />
      </Tab>

      {/* Right side menu (show on small screens) */}
      <div className={styles.menu}>
        <Menu>
          {/* Dark/light mode toggle */}
          <Tab onClick={handleToggleTheme} isExternal isVertical>
            {props.isDarkTheme ? '☀️' : '🌙'}
          </Tab>

          {/* Other tabs */}
          {props.tabs.map((tab, i) => <Tab key={i} {...tab} isVertical />)}
        </Menu>
      </div>

      {/* Right side tabs (show on large screens) */}
      <div className={styles.tabs}>
        {/* Dark/light mode toggle */}
        <Tab onClick={handleToggleTheme} isExternal>
          {props.isDarkTheme ? '☀️' : '🌙'}
        </Tab>

        {/* Other tabs */}
        {props.tabs.map((tab, i) => <Tab key={i} {...tab} />)}
      </div>
    </Container>
  )
}

export default Navbar
