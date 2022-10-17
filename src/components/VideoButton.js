import styles from './VideoButton.module.css'

import playIcon from '../images/icons/play-circle.svg'

function VideoButton (props) {
  return (
    <a
      href={props.href}
      className={styles.button}
      style={props.styles}
      onClick={props.onClick}
    >

      <iframe
        className={styles.video}
        width='100%'
        height='100%'
        src={props.src}
        title='YouTube video player'
        frameBorder='0'
        allow='autoplay; encrypted-media'
      />

      <div className={styles.gradientOverlay} />

      <img src={playIcon} alt='Play' width='32' height='32' className='svg' />

    </a>
  )
}

export default VideoButton
