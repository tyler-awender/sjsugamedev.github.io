import styles from './Container.module.css'

function Container (props) {
  const backgroundStyles = {
    backgroundImage: props.backgroundImage,
    backgroundColor: props.backgroundColor,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div style={backgroundStyles}>

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
