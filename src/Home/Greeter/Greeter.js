import styles from './Greeter.module.css'

import { useState } from 'react'

import Container from '../../components/Container'
import VideoButton from '../../components/VideoButton'
import Modal from '../../components/Modal'

import welcomeImage from '../../images/welcome.png'

function Greeter () {
  const background =
    `linear-gradient(
      to right,
      rgba(255, 255, 255, 0.9), 
      rgba(255, 255, 255, 0.9), 
      rgba(255, 255, 255, 0.33)
    ), 
    url(${welcomeImage})`

  const [videoVisible, setVideoVisible] = useState(false)

  return (
    <Container
      isPadded
      backgroundImage={background}
      className={styles.container}
    >
      <div className={styles.greetingFlex}>

        {/* Left: text */}
        <div className={styles.content}>
          <h2>We are the</h2>
          <span className={styles.emphasis1}>
            Game Dev Club
          </span>
          <br />
          <span className={styles.emphasis2}>
            @ San José State University
          </span>
        </div>

        {/* Right */}
        <div className={styles.videoBtn}>
          {/* Button */}
          <VideoButton
            onClick={() => setVideoVisible(true)}
            src='https://www.youtube-nocookie.com/embed/lM32dkAMuLw?autoplay=1&controls=0&looping=1&disablekb=1&modestbranding=1&mute=1'
          />
        </div>

        {videoVisible && (
          <Modal
            onClose={() => setVideoVisible(false)}
            bgColor='#000000'
            sixteenByNine
          >
            <iframe width='100%' height='100%' src='https://www.youtube-nocookie.com/embed/lM32dkAMuLw?autoplay=1' title='YouTube video player' frameborder='0' allow='autoplay; encrypted-media; picture-in-picture' allowFullScreen />
          </Modal>
        )}

      </div>

    </Container>
  )
}

export default Greeter
