import Container from '../components/Container'
import NextEvent from './NextEvent'
import UpcomingEvents from './UpcomingEvents'

import { useEffect } from 'react'

const EVENT_TYPES = {
  meeting: 'Meeting',
  workshop: 'Workshop',
  outreach: 'Outreach'
}

const EVENT_STYLE = {
  inPerson: 'In-person',
  hybrid: 'Hybrid',
  online: 'Online'
}

// Note:
// Date objects follow the format: new Date(year, monthIndex, day, hours, minutes)
// where monthIndex is 0-based (0 = January, 1 = February, etc.)
const events = [
  {
    name: 'Pre-Showcase',
    date: new Date(2023, 9, 20, 19, 0),
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Workshop 2',
    date: new Date(2023, 9, 27, 19, 0),
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Showcase 1',
    date: new Date(2023, 10, 3, 19, 0),
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Guest Speaker: Adrian (Blizzard)',
    date: new Date(2023, 10, 10, 19, 0),
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: new Date(2023, 10, 17, 19, 0),
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: new Date(2023, 10, 24, 19, 0),
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Final Showcase',
    date: new Date(2023, 11, 1, 19, 0),
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  }
]

function Events () {
  useEffect(() => {
    document.title = 'Events'
  })

  // Filter out past events
  const filteredEvents = events.filter(event => {
    return event.date >= new Date()
  })

  return (
    <div>
      <Container isPadded>
        <h1>EVENTS</h1>
        <p>All events are subject to change.</p>
      </Container>

      <NextEvent event={filteredEvents[0]} />

      {/* Show the upcoming events section if we have at least one event */}
      {filteredEvents.length >= 1 &&
        <UpcomingEvents events={filteredEvents.slice(1)} />}
    </div>
  )
}

export default Events
