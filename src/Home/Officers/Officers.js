import styles from './Officers.module.css'

import Container from '../../components/Container'
import Profile from '../../components/Profile'

import rafaelImage from '../../images/officers/rafael.png'
import joshImage from '../../images/officers/josh.png'
import yunseoImage from '../../images/officers/yunseo.jpg'
import christianImage from '../../images/officers/christian.jpg'
import juliusImage from '../../images/officers/julius.jpg'
import aidenImage from '../../images/officers/aiden.jpg'
import jasmineImage from '../../images/officers/jasmine.png'
import jalenImage from '../../images/officers/jalen.png'
import jamesImage from '../../images/officers/james.jpg'

const officers = [
  {
    name: 'Rafael Padilla Perez',
    position: 'President',
    image: rafaelImage
  },
  {
    name: 'Josh Smith',
    position: 'Vice President',
    image: joshImage
  },
  {
    name: 'Yunseo (Claire) Han',
    position: 'Treasurer',
    image: yunseoImage
  },
  {
    name: 'Christian Acosta',
    position: 'Event Coordinator',
    image: christianImage
  },
  {
    name: 'Julius Maximos Moridis',
    position: 'Streaming Coordinator',
    image: juliusImage
  },
  {
    name: 'Aiden Sabater',
    position: 'Community Manager',
    image: aidenImage
  },
  {
    name: 'Jasmine Serna',
    position: 'Graphic Designer',
    image: jasmineImage
  },
  {
    name: 'Jalen Ng',
    position: 'Web Director',
    image: jalenImage
  },
  {
    name: 'James Morgan',
    position: 'Advisor',
    image: jamesImage
  }
]

function Officers () {
  return (
    <Container
      isPadded
      className={styles.container}
    >
      <h2>Officers</h2>

      <div className={styles['officers-list']}>
        {officers.map(officer => (
          <Profile
            key={officer.name}
            name={officer.name}
            position={officer.position}
            image={officer.image}
          />
        ))}
      </div>
    </Container>
  )
}

export default Officers
