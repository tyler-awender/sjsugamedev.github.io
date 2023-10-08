import Container from '../components/Container'
import formatDate from '../utils/formatDate'

function NextEvent (props) {
  const event = props.event

  return (
    <Container isPadded>

      <h2>Next event</h2>

      {props.event === undefined &&
        <p>No upcoming events.</p>}

      {props.event !== undefined &&
        <Container isPadded styles={{ backgroundColor: 'var(--secondary-background-color)' }}>
          <h1>{event.name}</h1>
          <h3>{formatDate(event.date)}</h3>
          {event.desc.split('\n').map((line, i) => <p key={i}>{line}</p>)}
        </Container>}

    </Container>
  )
}

export default NextEvent
