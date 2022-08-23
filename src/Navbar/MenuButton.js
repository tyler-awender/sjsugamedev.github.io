import styles from './MenuButton.module.css'

import { useEffect } from 'react'

function MenuButton (props) {
  useEffect(() => {
    console.log('visible')
    return () => {
      console.log('not visible')
    }
  }, [])

  return <div className={styles.button}>hi</div>
}

export default MenuButton
