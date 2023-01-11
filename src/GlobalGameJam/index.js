import styles from './index.module.css'

import Container from '../components/Container'
import ActionButton from '../components/ActionButton'
import ButtonList from '../components/ButtonList'

import { ReactComponent as DiscordIcon } from '../images/socials/discord.svg'
import { ReactComponent as CheckIcon } from '../images/icons/check-circle-fill.svg'

import gamedevphoto1 from './img/gamedevphoto1.jpg'
import gamedevphoto2 from './img/gamedevphoto2.jpg'
import ggjphoto1 from './img/ggjphoto1.png'

import { useEffect } from 'react'

function GlobalGameJam (props) {
  useEffect(() => {
    document.title = 'Global Game Jam 2023'
  })

  return (
    <div>
      {/* Header */}
      <Container isPadded>
        <h1>GLOBAL GAME JAM 2023</h1>

        <h3>February 2nd ~ February 5th</h3>

        <br />

        <ButtonList>
          {/* Sign up button */}
          <ActionButton
            href='https://docs.google.com/forms/d/1EOK6DErgzh-SPwylO4GQsgY86VAo1TtOqnhmLWBBFZk/viewform?edit_requested=true'
            styles={{
              color: 'white',
              backgroundColor: 'var(--primary-color)'
            }}
          >
            <CheckIcon alt='Checkmark' width='28' height='28' />
            Check in
          </ActionButton>

          {/* Discord button */}
          <ActionButton
            href='https://discord.gg/xGv8qYA'
            styles={{
              color: 'white',
              backgroundColor: '#5865F2'
            }}
          >
            <DiscordIcon alt='Discord' width='28' height='28' />
            Discord
          </ActionButton>

          {/* Learn more button */}
          <ActionButton
            href='https://globalgamejam.org/'
            styles={{
              color: 'var(--text-color)',
              backgroundColor: 'var(--background-color)'
            }}
          >
            Learn more
          </ActionButton>
        </ButtonList>
      </Container>

      {/* What is Global Game Jam? */}
      <Container isPadded>
        <h2>What is Global Game Jam?</h2>
        <p>Join this year's Global Game Jam at SJSU hosted by the Game Dev Club at SJSU and the CADRE media labs.</p>
        <p>
          Global Game Jam is the largest game making event in the world! Regions from all around the world participate by hosting their own Game Jam site. The Game Dev Club at SJSU is working to bring Global Game Jam to San Jose. Our goal is to bring together the San Jose game development community through collaboration and design challenges. No experience is required and this jam will be hosted on the Game Dev Club Discord server. To join our jam site, follow the instructions at the bottom of the page.
        </p>
      </Container>

      {/* What can you expect? */}
      <Container isPadded>
        <h2>What can you expect?</h2>
        <ul>
          <li>Finish with a new project on your porfolio (Awesome!)</li>
          <li>Learn a new tool or a practical skill</li>
          <li>Connect with other developers with different backgrounds</li>
          <li>Participate in a global game making jam</li>
        </ul>
      </Container>

      {/* What is a game jam? */}
      <Container isPadded>
        <h2>What is a game jam?</h2>

        <p>Game jams are creative challenges to create a game under a certain amount of time. Jams are opportunities to jumpstart an idea, learn a new tool, improve skills, and meet other developers. By participating in a game jam, you're leveling up your game development experience in a short amount of time. People love jams because they aren't tied to their game afterwards. They can either expand on their finished game or start a new one. So join our game jams to connect with the community and finish a game!</p>
      </Container>

      {/* Photo 1 */}
      <Container isPadded>
        <img src={gamedevphoto1} className={styles.largeImage} alt='Club members gathering for a club meeting' />
      </Container>

      {/* Will this be your chance to get started in game development? */}
      <Container isPadded>
        <h2>Will this be your chance to get started in game development?</h2>

        <p>We encourage anyone who wants to start making games to try a game jam. In a short amount of time, newcomers can become familiar with a game engine and leave with a finished game. If you're new, join our Discord to connect with other students and stay up-to-date with our events.</p>
      </Container>

      {/* Photo 2 */}
      <Container isPadded>
        <img src={gamedevphoto2} className={styles.largeImage} alt='Club members gathering for a club meeting' />
      </Container>

      {/* Schedule */}
      <Container isPadded>
        <h2>Schedule</h2>
        <p> This schedule is subject to change. </p>
        <table>
          <thead>
            <tr>
              <th width='15%'>Date</th>
              <th width='10%'>Time</th>
              <th width='75%'>Agenda</th>
            </tr>
          </thead>
          <tbody>
            {/* 2/2 */}
            <tr>
              <th>Thursday, <br /> Feb. 2</th>
              <td>7:30 PM</td>
              <td>
                Jam kickoff on Discord and in-person, brainstorming day, Production/Trello workshop
                <ul>
                  <li>What to expect from a jam, tips and tricks, cover generalities</li>
                  <li>Afterwards is optional just in time tech talk</li>
                  <li>Team forming / pitching based on theme</li>
                  <li>All teams ready to go</li>
                </ul>
              </td>
            </tr>
            {/* 2/3 */}
            <tr>
              <th>Friday, <br /> Feb. 3</th>
              <td>7:30 PM</td>
              <td>Unity platformer workshop by Rafa, unity basics</td>
            </tr>
            {/* 2/4 */}
            <tr>
              <th>Saturday, <br /> Feb. 4</th>
              <td>1:00 PM</td>
              <td> Lunch time check in, "Brown Bag"</td>
            </tr>
            {/* 2/5 */}
            <tr>
              <th>Sunday, <br /> Feb. 5</th>
              <td>3:00 PM</td>
              <td>Upload</td>
            </tr>
            <tr>
              <th />
              <td>4:30 PM</td>
              <td>Presentations and Joy</td>
            </tr>
            <tr>
              <th />
              <td>5:00 PM</td>
              <td>Done</td>
            </tr>
          </tbody>
        </table>
      </Container>

      {/* Sign up */}
      <Container isPadded styles={{ backgroundColor: 'var(--secondary-background-color)' }}>
        <h2>Sign up</h2>
        <p>Follow the steps to join!</p>

        {/* Step 1 */}
        <h3>1. Join the Game Dev Club Discord server</h3>
        <ButtonList>
          <ActionButton
            href='https://discord.gg/xGv8qYA'
            styles={{
              color: 'white',
              backgroundColor: '#5865F2'
            }}
          >
            <DiscordIcon alt='Discord' width='28' height='28' />
            Discord
          </ActionButton>
        </ButtonList>
        <p>Follow the instructions to become verified. We will be using this server to meet and communicate during the jam.</p>
        {/* Step 2 */}
        <h3>2. Go to the SJSU Global Game Jam site</h3>
        <p>Click <a href='https://globalgamejam.org/2021/jam-sites/san-jos%C3%A9-state-university'>here</a> to go to the website.</p>
        {/* Step 3 */}
        <h3>3. Join this jam </h3>
        <p>
          Click <b>"Join This Jam Site."</b> Then login to your account, or create one if you don't have one already.
        </p>
        <img src={ggjphoto1} className={styles.largeImage} alt='An annotated screenshot of the Global Game Jam website' />
      </Container>

    </div>
  )
}

export default GlobalGameJam
