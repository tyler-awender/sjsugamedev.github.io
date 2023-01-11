import Container from '../components/Container'
import Arcade from './Arcade'

// import welcomeImage from '../images/welcome.png'
import { useEffect } from 'react'

const games = [
  {
    name: 'Featured games',
    games: [
      // {
      //   name: 'Example Game',
      //   author: 'Your Name',
      //   thumbnailUrl: welcomeImage,
      //   link: 'https://sjsugamedev.com',
      //   embedUrl: 'https://sjsugamedev.com',
      //   desc: 'Your game description goes here.\nIt will be displayed in this modal.'
      // },
      {
        name: 'Repairapy',
        author: 'PuntasticSadness',
        link: 'https://puntasticsadness.itch.io/repairapy',
        thumbnailUrl: 'https://img.itch.zone/aW1nLzEwNjU5NTI1LnBuZw==/original/hCyfzB.png',
        embedUrl: 'https://itch.io/embed-upload/6929590?color=000000',
        embedAspectRatio: '16/9',
        desc: `An antique shop on the brink of closing, the player offers to help the owner in rebuilding the customer’s satisfaction; by doing so, the player ends up connecting with the customers on a personal level. 

        Play through this visual novel and repair broken items as you unlock hidden mysteries of the people in town and store.  

        Will you be the one to save this store?`
      },
      {
        name: 'Canis Major',
        author: 'Canis Major Group',
        link: 'https://canis-major-group.itch.io/canis-major',
        thumbnailUrl: 'https://img.itch.zone/aW1hZ2UvMTc3NzAyNy8xMDY2ODcyNS5qcGc=/original/j6Zb38.jpg',
        embedUrl: 'https://v6p9d9t4.ssl.hwcdn.net/html/6935995/WebGLCanisMajor_0.5/index.html',
        embedAspectRatio: '16/9',
        desc: `Canis Major is a narrative-driven action-adventure role-playing video game set in the dark fantasy world of Slyphora. The goal of Canis Major is to complete a series of missions to advance the game’s plot of saving the kingdom from the tyranny of its new ruler.

        Play as Sirius, the youngest and newest member of the Canisapian Guild, Canis Major. His agility, adaptability, and his unique affinity for the mystic arts make him their most versatile member. However, his eagerness puts him on edge with some of the more short-tempered and senior members.`
      },
      {
        name: 'Draw',
        author: 'Draw Dev Team',
        link: 'https://jaygantic.itch.io/draw',
        thumbnailUrl: 'https://img.itch.zone/aW1nLzc1NDQ4MDgucG5n/original/ZWjYiF.png',
        embedUrl: 'https://itch.io/embed-upload/6929319?color=000000',
        embedAspectRatio: '3/2',
        desc: `Welcome to the doodle world! Armed with only a pencil, play as Stickman as you explore this brand new world. Solve intricate puzzles by drawing into the game, dodging scribble monsters, meeting interesting characters, and making new friends that will last a lifetime!

        "Draw" is a story-rich 2D platformer and an artistic journey of grief and acceptance through the stick-figure doodles of Nathan, a high schooler dealing with the grief of a recently lost friend. Play as "Stickman" and navigate this world of lined paper with puzzles, monsters, and interesting characters, each representing a different person in Nathan's life and a role in his journey of self-sabotage, isolation, depression, eventual acceptance, and recovery.`
      },
      {
        name: 'Hallegen',
        author: 'CheesiMoon',
        thumbnailUrl: 'https://img.itch.zone/aW1nLzQ3MTc3NDUucG5n/original/fgPL6Y.png',
        link: 'https://kodota.itch.io/hallegenold',
        desc: 'Hallegen is a 2D Action-Platformer starring Acro, a nimble melee spellcaster. Explore three levels, while attacking monsters that threaten you, and utilize his powerful spells to aid in progression. '
      },
      {
        name: 'Grungeon',
        thumbnailUrl: 'https://img.itch.zone/aW1hZ2UvMzAxMzA4LzE0NzMxMTYucG5n/315x250%23c/DLboCg.png',
        link: 'https://taylormax.itch.io/gmtk2018',
        embedUrl: 'https://itch.io/embed-upload/3924966?color=000000',
        desc: `Grungeon is a roguelike where you cannot die.

        We focused on this genre's principle of "no checkpoints." If you take enough damage, your character will fall down to the bottom floor of the level, dropping any magical purple keys you may have picked up during your adventure. However, falling does not affect your gold or items; the game was too frustrating for new players otherwise.
        
        Aside from being a roguelike, Grungeon is a highly-mobile platformer with rewarding jump mechanics designed to make your trip through the procedurally-generated level as fluid as possible. Use the Friendly Ghosts, or the less friendly Ogres and Goblins, as stepping stones to reach overhangs, or purchase a limited-use jetpack from the Wizard.
        
        Defeat enemies by jumping on them, search for the purple key, and use it to open the door to your freedom.`
      },
      {
        name: 'Planturi',
        thumbnailUrl: 'https://img.itch.zone/aW1nLzgzODkwNzcuanBlZw==/347x500/lQEeza.jpeg',
        link: 'https://planturi.itch.io/planturi'
      }
    ]
  }
  // },
  // {
  //   name: 'Fall 2022',
  //   games: []
  // },
  // {
  //   name: 'Summer Workshop 2022',
  //   games: []
  // },
  // {
  //   name: 'Spring 2022',
  //   games: []
  // },
  // {
  //   name: 'Fall 2021',
  //   games: []
  // }
]

export default function Games () {
  useEffect(() => {
    document.title = 'Games'
  })

  return (
    <div>
      <Container isPadded>
        <h1>GAMES</h1>
        <p>Explore games created by members of the club!</p>
      </Container>

      {/* Arcade */}
      <Arcade games={games} />
    </div>
  )
}
