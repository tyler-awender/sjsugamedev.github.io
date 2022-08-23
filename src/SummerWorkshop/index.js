import styles from './SummerWorkshop.module.css'

import Container from '../components/Container'
import ActionButton from '../components/ActionButton'
import Card from '../components/Card'
import CardHolder from '../components/CardHolder'
import Profile from '../components/Profile'

// Games
import breakImg from './img/2022/break.png'
import coilCat from './img/2022/coil-cat.png'
import cyber20s from './img/2022/cyber-20s.jpg'
import hermes from './img/2022/hermes.png'
import middleIsle from './img/2022/middle-isle.png'
import planturi from './img/2022/planturi.png'
import restore from './img/2022/restore.png'
import tadpole from './img/2022/tadpole.png'
import tezca from './img/2022/tezca.png'
import summergame1 from './img/2022/summergame1.png'
import summergame2 from './img/2022/summergame2.png'
import summergame3 from './img/2022/summergame3.png'
import summergame4 from './img/2022/summergame4.png'

// Contacts
import logo from '../images/logo.png'
import rafaelImage from '../images/officers/rafael.png'
import joshImage from '../images/officers/josh.png'
import jamesImage from '../images/officers/james.webp'

const pastProjects = [
  {
    name: 'Break, Carry, Kill',
    img: breakImg,
    link: 'https://gocolumbia.itch.io/break-carry-kill',
    desc: '2022'
  },
  {
    name: 'Coil Cat',
    img: coilCat,
    link: 'https://lawegic.itch.io/coil-cat',
    desc: '2022'
  },
  {
    name: 'Cyber 20s',
    img: cyber20s,
    link: 'https://n810l3.itch.io/project-cyber-20s',
    desc: '2022'
  },
  {
    name: 'Hermes',
    img: hermes,
    link: 'https://rykwong.itch.io/hermes',
    desc: '2022'
  },
  {
    name: 'Middle Isle',
    img: middleIsle,
    link: 'https://middle-isle.itch.io/middle-isle',
    desc: '2022'
  },
  {
    name: 'Planturi',
    img: planturi,
    link: 'https://theplantgame.itch.io/planturi',
    desc: '2022'
  },
  {
    name: 'RESTORE MONK3',
    img: restore,
    link: 'https://rooksssss.itch.io/restore-monk3',
    desc: '2022'
  },
  {
    name: 'Tadpole\'s Pond',
    img: tadpole,
    link: 'https://pareot.itch.io/tadpoles-pond',
    desc: '2022'
  },
  {
    name: 'Algae Bandit',
    img: summergame1,
    link: 'https://mr-pergerson.itch.io/crab-life',
    desc: '2020'
  },
  {
    name: 'Via Light',
    img: summergame2,
    link: 'https://phalistafer.itch.io/via-light',
    desc: '2020'
  },
  {
    name: 'Irin and The Abyss',
    img: summergame4,
    link: 'https://kprakash.itch.io/irin-and-the-abyss',
    desc: '2020'
  },
  {
    name: 'Space Trader',
    img: summergame3,
    link: 'https://andrew-w-pierce.itch.io/space-trader',
    desc: '2020'
  }
]

const contacts = [
  {
    name: 'James Morgan',
    position: 'Art/CS',
    image: jamesImage,
    text: 'james.morgan@sjsu.edu'
  },
  {
    name: 'Tom Austin',
    position: 'AI',
    image: logo,
    text: 'tom.austin@sjsu.edu'
  },
  {
    name: 'Rafael Padilla Perez',
    position: 'Production Lead',
    image: rafaelImage,
    text: 'rafael.padillaperez@sjsu.edu'
  },
  {
    name: 'Josh Smith',
    position: 'Game Design Lead',
    image: joshImage,
    text: 'joshua.l.smith@sjsu.edu'
  }
]

function SummerWorkshop (props) {
  return (
    <div>
      {/* Header */}
      <Container isPadded>
        <h1>SUMMER WORKSHOP 2022</h1>
        <div className={styles.buttonList}>
          <ActionButton
            href='https://bit.ly/2022sjsugdw'
            styles={{
              color: 'white',
              backgroundColor: '#0055a2'
            }}
          >
            Sign up
          </ActionButton>
        </div>
      </Container>

      {/* About the workshop */}
      <Container isPadded>
        <h2>About the workshop</h2>

        <p>The summer game development workshop is an interdisciplinary group based project that focuses on game development. Teams are formed from the arts and animation, computer science and other disciplines interested in game development. These teams create a prototype over the 8-9 weeks of the workshop within the community of participants. </p>
        <p>This year we are focusing on the role of the producer on the small teams. That means that we are looking for people who want to take on the task of facilitating game production. This is often the creative lead, but that is not a requirement. Our producers will work to build teams that have the skills necessary to complete a prototype in 9 weeks. The Producer is not a boss but makes sure that every member has tasks that match their skillset and time available, organizes the execution of tasks so that no one is waiting on a task to complete to start/work. It is possible to learn how to be a good producer and we are looking for people to fill this role for each team.</p>
        <p>The organizers will focus on production, pipeline, design, prototyping, presentation, marketing and player feedback to create the most viable, fun prototype in the limited time. Participants are encouraged to experiment with genre, style, mechanics and any other aspect of game development within the team setting.</p>
        <p>If you are interested, please be prepared to work 10 hours a week during the project. We understand that this may change as the summer progresses, but be prepared to work closely with your producer and your team to complete a prototype.</p>
        <p>Facilitation team: James Morgan, Tom Austin, Rafa Padilla Perez.</p>
      </Container>

      {/* Past projects */}
      <Container isPadded>
        <h2>Past projects</h2>

        <CardHolder>
          {pastProjects.map(({ name, img, link, desc }) => (
            <Card
              key={name}
              href={link}
              title={name}
              img={img}
              text={desc}
            />
          ))}
        </CardHolder>

      </Container>

      {/* What could this workshop lead to? */}
      <Container isPadded>
        <h2>What could this workshop lead to?</h2>
        <p className={styles['card-text']}>This is an opportunity to prototype and recruit team members before fully committing to a game idea. For those looking to join a project, this can be a chance to be part of a BFA animation, Game Dev Club, or other student lead game project.</p>
        <p className={styles['card-text']}>Tezca: Hidden Below is an example of Animation BFA project. A team of 20 animation and 3 computer science students worked on this first person horror game for a year.</p>

        <Card
          key='Tezca: In the Shadows'
          href='https://tezcaintheshadows.itch.io/tezca-in-the-shadows'
          title='Tezca: In the Shadows'
          img={tezca}
        />

      </Container>

      {/* Create a game from start to finish */}
      <Container isPadded>

        <h2>Create a game from start to finish</h2>
        <div className={styles.intro_blocks}>
          <ul>
            <li>Execute a game idea that responds to the strengths of the team.</li>
            <li>Learn how to use agile principles to develop a playable vertical slice of a game within 6 weeks.</li>
            <li>Understand important tools such as game engines, Trello, and GitHub.</li>
            <li>Meet and work with  artists, programmers, and other developers.</li>
          </ul>
        </div>

      </Container>

      {/* Schedule */}
      <Container isPadded>
        <h2>Schedule</h2>
        <table>
          <thead>
            <tr>
              <th width='10%'>Week</th>
              <th width='75%'>Topic</th>
              <th width='15%'>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                Introduce workshop, requirements document, and prototyping.
              </td>
              <td>June 14</td>
            </tr>
            <tr>
              <th />
              <td>Creating a design document and understanding Trello, asset pipeline, and agile development..</td>
              <td>June 16</td>
            </tr>
            <tr>
              <th>2</th>
              <td>
                Learn about Git and verison control,
                initial team meetings (schedule, req doc, design doc)
              </td>
              <td>June 21</td>
            </tr>
            <tr>
              <th />
              <td>Design Doc reviews.</td>
              <td>June 23</td>
            </tr>
            <tr>
              <th />
              <td>Producer, programmer, artists and game designer meeting.</td>
              <td>schedule</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Production begins. What to do during this phase.</td>
              <td>June 28</td>
            </tr>
            <tr>
              <th>4</th>
              <td>How to playtest. Artist, programmer, designer, and producer meetings.</td>
              <td>July 5</td>
            </tr>
            <tr>
              <th>5</th>
              <td>First Sprint evaluation (how succssful was sprint 1)</td>
              <td>July 12</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Mid-Sprint evaluation. (how have you adjusted your process?)</td>
              <td>July 19</td>
            </tr>
            <tr>
              <th>7</th>
              <td>Second Sprint evaluation.</td>
              <td>July 26</td>
            </tr>
            <tr>
              <th>8</th>
              <td>Mid-Sprint evaluation</td>
              <td>August 2</td>
            </tr>
            <tr>
              <th>9</th>
              <td>Presentations.</td>
              <td>August 9</td>
            </tr>
            <tr>
              <th />
              <td>Public release of games.</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </Container>

      {/* Contact us */}
      <Container isPadded>
        <h2>Contact us</h2>

        <p>We are using the Game Dev Discord (@Game-Jammer role)</p>

        <div className={styles.contactsList}>
          {contacts.map(contact => (
            <Profile
              key={contact.name}
              name={contact.name}
              position={contact.position}
              image={contact.image}
            />
          ))}
        </div>

      </Container>
    </div>
  )
}

export default SummerWorkshop
