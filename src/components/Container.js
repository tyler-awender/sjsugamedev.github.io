import styles from './Container.module.css'

function Container (props) {
  const backgroundStyles = {
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div style={{ ...backgroundStyles, ...props.styles }}>

      {/* Container content */}
      <div
        className={
          [
            styles.container,
            props.isPadded ? styles.padded : null,
            props.className
          ]
            .filter(Boolean)
            .join(' ')
        }
      >
        {props.children}
      </div>

    </div>
  )
}

export default Container
