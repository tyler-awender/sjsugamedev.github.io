import styles from './Banner.module.css'

function Banner (props) {
  return (
    <div className={styles.banner} style={props.styles}>
      {props.children}
    </div>
  )
}

export default Banner
