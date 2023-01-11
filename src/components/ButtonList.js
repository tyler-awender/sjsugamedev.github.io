import styles from './ButtonList.module.css'

export default function ButtonList (props) {
  return (
    <p className={styles.buttonList}>
      {props.children}
    </p>
  )
}
