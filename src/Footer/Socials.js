import Container from '../components/Container'
import ButtonList from '../components/ButtonList'

import { ReactComponent as DiscordIcon } from '../images/socials/discord.svg'
import { ReactComponent as ItchioIcon } from '../images/socials/itchio.svg'
import { ReactComponent as TwitchIcon } from '../images/socials/twitch.svg'
import { ReactComponent as TwitterIcon } from '../images/socials/twitter.svg'
import { ReactComponent as FacebookIcon } from '../images/socials/facebook.svg'
import { ReactComponent as InstagramIcon } from '../images/socials/instagram.svg'
import { ReactComponent as LinkedinIcon } from '../images/socials/linkedin.svg'
import ActionButton from '../components/ActionButton'

const socials = [
  {
    name: 'Discord',
    link: 'https://discord.gg/xGv8qYA',
    icon: DiscordIcon,
    color: '#5865f2',
    showName: true
  },
  {
    name: 'itch.io',
    link: 'https://sjsugamedev.itch.io',
    icon: ItchioIcon,
    color: '#fa5c5c',
    showName: true
  },
  {
    name: 'Twitch',
    link: 'https://www.twitch.tv/sjsugamedev',
    icon: TwitchIcon,
    color: '#9146FF',
    showName: true
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/sjsugamedev',
    icon: TwitterIcon,
    color: '#009ef7',
    showName: false
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/SJSUGameDev',
    icon: FacebookIcon,
    color: '#1877F2',
    showName: false
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/sjsugamedev',
    icon: InstagramIcon,
    color: '#C13584',
    showName: false
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/sjsugamedev/',
    icon: LinkedinIcon,
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

      <ButtonList>
        {socials.map(social => (
          <ActionButton
            key={social.name}
            href={social.link}
            styles={{
              color: 'white',
              backgroundColor: social.color
            }}
          >
            <social.icon alt={social.name} width='28' height='28' />
            {social.showName && (social.name)}
          </ActionButton>
        ))}
      </ButtonList>

    </Container>
  )
}

export default Socials
