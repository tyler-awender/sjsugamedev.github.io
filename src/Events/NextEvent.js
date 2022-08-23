import Container from '../components/Container'

function NextEvent (props) {
  const event = props.event

  return (
    <Container isPadded>

      <h2>Next event</h2>

      <Container isPadded backgroundColor='#eee'>
        <h1>{event.name}</h1>
        <h3>{event.date} • {event.time}</h3>
        <p>{event.desc}</p>
      </Container>

    </Container>
  )
}

export default NextEvent
