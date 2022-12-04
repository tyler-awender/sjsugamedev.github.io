import styles from './Modal.module.css'

import { ReactComponent as CloseIcon } from '../images/icons/x-lg.svg'

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
          ...props.styles,
          backgroundColor: props.bgColor
        }}
      >

        {/* Close button */}
        <button className={styles.closeBtn} onClick={props.onClose}>
          <CloseIcon alt='Close' width='28' height='28' />
        </button>

        {/* Content */}
        {props.children}

      </div>

    </div>
  )
}

export default Modal
