import styles from './Meetings.module.css'

import Container from '../../components/Container'
import ActionButton from '../../components/ActionButton'
import ButtonList from '../../components/ButtonList'

import libraryImage from '../../images/library.png'

import { ReactComponent as DiscordIcon } from '../../images/socials/discord.svg'
import { ReactComponent as GeoIcon } from '../../images/icons/geo-alt-fill.svg'

function Meetings () {
  const background =
    `linear-gradient(
      to right,
      rgba(var(--background-color-rgb), 1.0), 
      rgba(var(--background-color-rgb), 0.5)
    ), 
    url(${libraryImage})`
  return (
    <Container
      isPadded
      styles={{
        backgroundImage: background
      }}
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
      <ButtonList>

        {/* Discord button */}
        <ActionButton
          href='https://discord.gg/xGv8qYA'
          styles={{
            color: 'white',
            backgroundColor: '#5865F2'
          }}
        >
          <DiscordIcon alt='Discord' width='28' height='28' />
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
          <GeoIcon alt='Google Maps' width='28' height='28' />
          SJSU Library
        </ActionButton>

      </ButtonList>
    </Container>
  )
}

export default Meetings
