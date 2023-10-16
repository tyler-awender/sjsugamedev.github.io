import styles from './VideoButton.module.css'

import { ReactComponent as PlayIcon } from '../images/icons/play-fill.svg'

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

      <PlayIcon alt='Play' width='72' height='72' className={styles.playIcon} fill={props.iconColor || 'white'} />

    </a>
  )
}

export default VideoButton
