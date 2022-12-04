import styles from './Question.module.css'

import { ReactComponent as ChevronDown } from '../../images/symbols/chevron-down.svg'
import { ReactComponent as ChevronUp } from '../../images/symbols/chevron-up.svg'

function Question (props) {
  // const [isOpen, setIsOpen] = useState(false)

  const { isOpen, onClick } = props
  const OpenIndicator = isOpen ? ChevronUp : ChevronDown

  return (
    <div>
      {/* Question header */}
      <div tabIndex='0' onClick={onClick}>
        <div className={styles.header}>
          <div className={styles['header-text']}>
            {props.question}
          </div>
          <OpenIndicator width='20' height='20' />
        </div>
      </div>

      {/* Response content */}
      {isOpen &&
        <div className={styles.content}>
          {props.children}
        </div>}
    </div>
  )
}

export default Question
