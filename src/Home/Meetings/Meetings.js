import styles from './Meetings.module.css'

import Container from '../../components/Container'
import ActionButton from '../../components/ActionButton'

import libraryImage from '../../images/library.png'
import discordIcon from '../../images/socials/discord.svg'
import geoIcon from '../../images/icons/geo-alt-fill.svg'

function Meetings () {
  const background =
    `linear-gradient(
      to right,
      rgba(255, 255, 255, 1.0), 
      rgba(255, 255, 255, 0.5)
    ), 
    url(${libraryImage})`
  return (
    <Container
      isPadded
      backgroundImage={background}
      className={styles.container}
    >
      {/* Text */}
      <div className={styles.content}>
        <h2>We meet</h2>
        <span className={styles.emphasis3}>
          Every Thursday
        </span>
        <br />
        <span className={styles.emphasis1}>
          7:00 PM PST
        </span>
        <br />
        <span className={styles.emphasis2}>
          on Discord and/or @ SJSU Library, Lower Level
        </span>
        <br />
      </div>

      {/* Buttons */}
      <div className={styles.buttonList}>

        {/* Discord button */}
        <ActionButton
          href='https://discord.gg/xGv8qYA'
          styles={{
            color: 'white',
            backgroundColor: '#5865F2'
          }}
        >
          <img src={discordIcon} alt='Discord' width='32' height='32' className='svg' />
          Join our Discord
        </ActionButton>

        {/* Map/directions button */}
        <ActionButton
          href='https://goo.gl/maps/24nrLxVHpbBKBuxP7'
          styles={{
            color: 'white',
            backgroundColor: '#dd4b3e'
          }}
        >
          <img src={geoIcon} alt='Discord' width='32' height='32' className='svg' />
          SJSU Library
        </ActionButton>

      </div>
    </Container>
  )
}

export default Meetings
