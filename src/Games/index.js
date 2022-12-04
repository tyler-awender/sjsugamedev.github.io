import ActionButton from '../components/ActionButton'
import ButtonList from '../components/ButtonList'
import Container from '../components/Container'

import { ReactComponent as ItchioIcon } from '../images/socials/itchio.svg'

export default function Games() {
  return (
    <div>
      <Container isPadded>
        <h1>GAMES</h1>
        Coming soon! In the meantime, check out our itch.io page below.
      </Container>
      <Container isPadded>

        <ButtonList>
          <ActionButton
            href={'https://sjsugamedev.itch.io'}
            styles={{
              color: 'white',
              backgroundColor: '#fa5c5c'
            }}
          >
            <ItchioIcon alt={'itch.io'} width='28' height='28' />
            itch.io
          </ActionButton>
        </ButtonList>
      </Container>
    </div>
  )
}
