import styles from './Menu.module.css'

import Modal from '../components/Modal'

import { ReactComponent as ChevronDown } from '../images/symbols/chevron-down.svg'
import { ReactComponent as ChevronUp } from '../images/symbols/chevron-up.svg'

import { useState } from 'react'

export default function Menu (props) {
  const [visible, setVisible] = useState(false)

  const OpenIndicator = visible ? ChevronUp : ChevronDown

  function toggleVisibility () {
    setVisible(!visible)
  }

  return (
    <div className={styles.menuWrap}>
      {/* Button */}
      <div onClick={toggleVisibility} className={styles.button}>
        Menu
        <OpenIndicator alt='Navigation Menu' width='20' height='20' />
      </div>
      {/* Menu */}
      {
        visible &&
          <Modal onClose={toggleVisibility} styles={{ maxWidth: '300px' }}>
            <div className={styles.container}>
              {props.children}
            </div>
          </Modal>
      }
    </div>
  )
}
