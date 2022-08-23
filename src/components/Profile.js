import styles from './Profile.module.css'

function Profile (props) {
  const firstName = props.name.split(' ')[0]
  const lastName = props.name.split(' ').slice(1).join(' ')

  return (
    <div className={styles.profile}>
      {/* Image */}
      <img src={props.image} className={styles.image} alt={props.name} />

      {/* Text */}
      <div className={styles.text}>

        <div className={styles.position}>
          {props.position}
        </div>

        <div className={styles.name}>
          <div className={styles['first-name']}>{firstName}</div>
          <div className={styles['last-name']}>{lastName}</div>
        </div>

      </div>
    </div>
  )
}

export default Profile
