import Container from '../components/Container'
import NextEvent from './NextEvent'
import UpcomingEvents from './UpcomingEvents'

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

const events = [
  {
    name: 'Intro Meeting + Showcase',
    date: 'Sept. 1st',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Come join us for our first meeting of the year! We will be discussing our plans for the year and what we want to accomplish. We will be meeting on Discord and in the Lower Level of SJSU Library. We hope to see you there!'
  },
  {
    name: 'Game Night',
    date: 'Sept. 8th',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: '7th Street Tabling',
    date: 'Sept. 13th',
    time: '1:00 PM PST',
    type: [EVENT_TYPES.outreach],
    style: EVENT_STYLE.inPerson,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: 'Sept. 15th',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: 'Sept. 22nd',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: 'Sept. 29th',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: 'Oct. 6th',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: 'Oct. 13th',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: 'Oct. 20th',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: 'Oct. 27th',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: 'Nov. 3rd',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: 'Nov. 10th',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: 'Nov. 17th',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: 'Nov. 24th',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: 'Dec. 1st',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  },
  {
    name: 'Meeting',
    date: 'Dec. 8th',
    time: '7:30 PM PST',
    type: [EVENT_TYPES.meeting],
    style: EVENT_STYLE.hybrid,
    desc: 'Stay tuned for more information about this event.'
  }
]

function Events () {
  return (
    <div>

      <Container isPadded>
        <h1>EVENTS</h1>
        All events are subject to change.
      </Container>

      <NextEvent event={events[0]} />

      <UpcomingEvents events={events.slice(1)} />
    </div>
  )
}

export default Events
