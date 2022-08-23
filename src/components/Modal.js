import styles from './Modal.module.css'

import xIcon from '../images/icons/x-lg.svg'

function Modal (props) {
  return (
    <div>

      <div className={styles.backdrop} onClick={props.onClose} />

      <div
        className={[
          styles.container,
          (props.sixteenByNine && styles.sixteenByNine),
          (props.small && styles.small)
        ].join(' ')}
        style={{
          backgroundColor: props.bgColor
        }}
      >

        {/* Close button */}
        <button className={styles.closeBtn} onClick={props.onClose}>
          <img src={xIcon} alt='Close' width='32' height='32' class='svg' />
        </button>

        {/* Content */}
        {props.children}

      </div>

    </div>
  )
}

export default Modal
