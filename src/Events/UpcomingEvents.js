import { useState } from 'react'

import Modal from '../components/Modal'
import Container from '../components/Container'
import Card from '../components/Card'
import CardHolder from '../components/CardHolder'
import formatDate from '../utils/formatDate'

function UpcomingEvents (props) {
  const [openModal, setOpenModal] = useState(-1)

  const event = props.events[openModal]

  let modalEventTimeText
  if (event) {
    modalEventTimeText = formatDate(event.date, true)
  }

  return (
    <Container isPadded>

      <h2>Upcoming events</h2>

      {props.events.length === 0 &&
        <p>No upcoming events.</p>}

      {props.events.length > 0 &&
        <CardHolder>
          {props.events.map(({ name, img, link, date, time }, i) => {
            return (

              <Card
                key={i}
                href={link}
                title={name}
                img={img}
                text={formatDate(date)}
                onClick={() => setOpenModal(i)}
              />

            )
          })}
        </CardHolder>}

      {/* Modal */}
      {openModal !== -1 && (
        <Modal small onClose={() => setOpenModal(-1)}>
          <Container isPadded styles={{ backgroundColor: 'var(--tertiary-background-color' }}>
            <h1>{event.name}</h1>
            <h3>{modalEventTimeText}</h3>
          </Container>
          <Container isPadded styles={{ backgroundColor: 'var(--background-color' }}>
            <p>{event.desc}</p>
          </Container>
        </Modal>
      )}

    </Container>
  )
}

export default UpcomingEvents
