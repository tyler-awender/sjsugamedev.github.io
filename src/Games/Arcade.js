import styles from './Arcade.module.css'

import { useState } from 'react'
import CardHolder from '../components/CardHolder'
import Card from '../components/Card'
import ActionButton from '../components/ActionButton'
import Container from '../components/Container'
import ButtonList from '../components/ButtonList'
import Modal from '../components/Modal'

import { ReactComponent as PlayIcon } from '../images/icons/play-fill.svg'

export default function Arcade(props) {
  function playGame(game) {
    // Hide the modal and update the selected game
    setModalSelection(null)
    setEmbedSelection(game)

    // Scroll to the game embed viewport and focus it
    const viewport = document.getElementById('viewport')
    if (viewport) {
      viewport.scrollIntoView({ behavior: 'smooth', block: 'center' })
      viewport.focus()
    }
  }

  const [embedSelection, setEmbedSelection] = useState(null)
  const [modalSelection, setModalSelection] = useState(null)

  return (
    <div>
      {/* Game embed viewport */}
      <Container isPadded>
        <div className={styles.viewport} id='viewport'>

          {/* Empty state */}
          {
            !embedSelection?.embedUrl &&
            (
              <div className={styles.viewportMessage}>
                <h2>Select a game below to play!</h2>
              </div>
            )
          }

          {/* Game embed */}
          {
            embedSelection?.embedUrl &&
            (
              <iframe
                title={embedSelection.name}
                style={{ aspectRatio: embedSelection.embedAspectRatio || '16/9' }}
                width='100%'
                height='100%'
                src={embedSelection.embedUrl}
                frameBorder='0'
                allowFullScreen
              />
            )
          }
        </div>

      </Container>

      {/* Game selection cards */}
      {props.games.map((section, i) =>

        <Container isPadded key={i}>
          <h2>{section.name}</h2>

          {/* No games in this section */}
          {section.games.length === 0 &&
            <p>There are no games in this section.</p>}

          {/* There are games in this section */}
          {section.games.length > 0 &&
            <CardHolder>
              {
                section.games.map((game, i) => {
                  return (
                    <Card
                      key={i}
                      img={game.thumbnailUrl}
                      imgStyles={{ aspectRatio: '16/9' }}
                      title={game.name}
                      className={styles.game}
                      onClick={() => setModalSelection(game)}
                    >
                      {game.author && <p><i>{game.author}</i></p>}
                      {game.embedUrl &&
                        <ButtonList>
                          <ActionButton
                            onClick={(e) => {
                              e.stopPropagation()
                              playGame(game)
                            }}
                          >
                            <PlayIcon alt='Play' width='28' height='28' />
                            Play
                          </ActionButton>
                        </ButtonList>}
                    </Card>
                  )
                })
              }
            </CardHolder>}
        </Container>
      )}

      {/* Modal */}
      {modalSelection && (
        <Modal small onClose={() => setModalSelection(null)}>

          {/* Header container with picture, name, author, and buttons */}
          <Container
            isPadded
            styles={{
              ...(modalSelection.thumbnailUrl && {
                backgroundImage:
                  `linear-gradient(
                      to right,
                      rgba(var(--secondary-background-color-rgb), 0.85),
                      rgba(var(--secondary-background-color-rgb), 0.67)
                    ), 
                    url(${modalSelection.thumbnailUrl})`
              }),
              ...(!modalSelection.thumbnailUrl && {
                backgroundColor: 'var(--secondary-background-color)'
              })
            }}
          >
            <h1>{modalSelection.name}</h1>
            <h3>{modalSelection.author}</h3>
            <ButtonList>
              {/* Show "Play" only if the game has an embed link */}
              {modalSelection.embedUrl &&
                <ActionButton
                  styles={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'white'
                  }}
                  onClick={() => { playGame(modalSelection) }}
                >
                  <PlayIcon alt='Play' width='28' height='28' />
                  Play
                </ActionButton>}

              {/* Show "Visit page" only if the game has a webpage link */}
              {modalSelection.link &&
                <ActionButton
                  styles={{
                    backgroundColor: 'var(--background-color)',
                    color: 'var(--text-color)'
                  }}
                  href={modalSelection.link}
                  target='_blank'
                >
                  Visit page
                </ActionButton>}
            </ButtonList>
          </Container>

          {/* Description container */}
          {modalSelection.desc &&
            <Container isPadded styles={{ backgroundColor: 'var(--background-color' }}>
              {/* Split string by line breaks */}
              {modalSelection.desc.split('\n').map((line, i) => <p key={i}>{line}</p>)}
            </Container>}
        </Modal>
      )}

    </div>

  )
}
