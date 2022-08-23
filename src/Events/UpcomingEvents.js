import { useState } from 'react'

import Modal from '../components/Modal'
import Container from '../components/Container'
import Card from '../components/Card'
import CardHolder from '../components/CardHolder'

function UpcomingEvents (props) {
  const [openModal, setOpenModal] = useState(-1)

  const event = props.events[openModal]

  let modalEventTimeText
  if (event) {
    modalEventTimeText = event.time ? `${event.date} • ${event.time}` : event.date
  }

  return (
    <Container isPadded>

      <h2>Upcoming events</h2>

      <CardHolder>
        {props.events.map(({ name, img, link, date, time }, i) => {
          const timeText = time ? `${date} • ${time}` : date
          return (

            <Card
              key={i}
              href={link}
              title={name}
              img={img}
              text={timeText}
              onClick={() => setOpenModal(i)}
            />

          )
        })}
      </CardHolder>

      {/* Modal */}
      {openModal !== -1 && (
        <Modal small onClose={() => setOpenModal(-1)}>
          <Container isPadded backgroundColor='#eeeeee'>
            <h1>{event.name}</h1>
            <h3>{modalEventTimeText}</h3>
          </Container>
          <Container isPadded backgroundColor='#ffffff'>
            <p>{event.desc}</p>
          </Container>
        </Modal>
      )}

    </Container>
  )
}

export default UpcomingEvents
