import styles from './CardHolder.module.css'

function CardHolder (props) {
  return (
    <div className={styles.holder}>
      {props.children}
    </div>
  )
}

export default CardHolder
