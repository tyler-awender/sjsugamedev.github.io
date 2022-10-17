import styles from './Socials.module.css'

import Container from '../components/Container'

import discordIcon from '../images/socials/discord.svg'
import itchioIcon from '../images/socials/itchio.svg'
import twitchIcon from '../images/socials/twitch.svg'
import twitterIcon from '../images/socials/twitter.svg'
import facebookIcon from '../images/socials/facebook.svg'
import instagramIcon from '../images/socials/instagram.svg'
import linkedinIcon from '../images/socials/linkedin.svg'
import ActionButton from '../components/ActionButton'

const socials = [
  {
    name: 'Discord',
    link: 'https://discord.gg/xGv8qYA',
    icon: discordIcon,
    color: '#5865f2',
    showName: true
  },
  {
    name: 'itch.io',
    link: 'https://sjsugamedev.itch.io',
    icon: itchioIcon,
    color: '#fa5c5c',
    showName: true
  },
  {
    name: 'Twitch',
    link: 'https://www.twitch.tv/sjsugamedev',
    icon: twitchIcon,
    color: '#9146FF',
    showName: true
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/sjsugamedev',
    icon: twitterIcon,
    color: '#009ef7',
    showName: false
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/SJSUGameDev',
    icon: facebookIcon,
    color: '#1877F2',
    showName: false
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/sjsugamedev',
    icon: instagramIcon,
    color: '#C13584',
    showName: false
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/sjsugamedev/',
    icon: linkedinIcon,
    color: '#0077B5',
    showName: false
  }
]

function Socials () {
  return (
    <Container
      isPadded
    >
      <h2>Follow us</h2>

      <div className={styles.buttonList}>
        {socials.map(social => (
          <ActionButton
            key={social.name}
            href={social.link}
            styles={{
              color: 'white',
              backgroundColor: social.color
            }}
          >
            <img src={social.icon} alt={social.name} width='32' height='32' className='svg' />
            {social.showName && (social.name)}
          </ActionButton>
        ))}
      </div>

    </Container>
  )
}

export default Socials
