import styles from './ActionButton.module.css'

function ActionButton (props) {
  return (
    <a
      href={props.href}
      className={styles.button}
      style={props.styles}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  )
}

export default ActionButton
