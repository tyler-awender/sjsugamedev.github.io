
import styles from './Card.module.css'

function Card (props) {
  return (
    <div>

      <a className={styles.card} href={props.href} onClick={props.onClick}>
        {/* Image */}
        <img src={props.img} className={styles.img} alt={props.title} />

        {/* Text */}
        <div className={styles.text}>
          <span className={styles.title}>
            {props.title}
          </span>
          <br />
          <p>{props.text}</p>
        </div>
      </a>

    </div>
  )
}

export default Card
