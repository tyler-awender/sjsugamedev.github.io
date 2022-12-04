import styles from './ButtonList.module.css'

export default function ButtonList (props) {
  return (
    <div className={styles.buttonList}>
      {props.children}
    </div>
  )
}
