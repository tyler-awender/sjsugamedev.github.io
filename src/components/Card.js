import styles from './Card.module.css'

function Card (props) {
  const Component = props.href ? 'a' : 'div'

  return (
    <Component
      tabindex='0'
      className={
        [
          styles.card,
          'hoverable'
        ]
          .filter(Boolean)
          .join(' ')
      }
      href={props.href}
      onClick={props.onClick}
    >
      {/* Image */}
      {props.img &&
        <img src={props.img} className={styles.img} alt={props.title} style={props.imgStyles} />}

      {/* Text */}
      <div className={styles.text}>
        {props.title &&
          <span className={styles.title}>
            {props.title}
          </span>}
        {props.children}
      </div>
    </Component>

  )
}

export default Card
