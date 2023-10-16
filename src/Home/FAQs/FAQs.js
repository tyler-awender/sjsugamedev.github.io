import styles from './FAQs.module.css'

import { useState } from 'react'

import Container from '../../components/Container'
import Question from './Question'
import ActionButton from '../../components/ActionButton'

const questions = [
  {
    question: 'Who is allowed to join this club?',
    answer: <span><b>Anybody with a passion for playing and developing video games!</b> You do not have to be a student at SJSU; we’ve even had middle and high school students join us in the past.</span>
  },
  {
    question: 'Do I need experience in game development to join the club?',
    answer: <span><b>Nope!</b> You do not need any art, programming, or game development experience to join us. We will guide you in the right direction, and we will teach you the basics of what you need to know.</span>
  },
  {
    question: 'How do I join?',
    answer: 'Join one of our meetings and get acquainted with the officers! Most announcements are sent through Discord and emails, so conisder joining our Discord server and email list! Stay connected by following us on our social media platforms at the bottom of this webpage.'
  },
  {
    question: 'When and where does Game Dev Club meet?',
    answer: 'Our meetings are in the Innovation Center, located in the Lower Level of SJSU Library. We meet every Thursday at 7:30 pm during the fall and spring semesters.'
  },
  {
    question: 'How will you help me develop a game?',
    answer: 'TODO'
  },
  {
    question: 'When are teams formed?',
    answer: 'We form teams in the first few weeks of the semester.'
  },
  {
    question: 'How do I form or join a team?',
    answer: 'You may ask groups if you can join them, or we can help place you in a group. You may also invite others to work with you for any upcoming game jams.'
  },
  {
    question: 'I work alone. Is that a problem?',
    answer: <span><b>Not at all!</b> However, we highly encourage you to work with a team to lessen your workload and gain experience working with a team.</span>
  },
  {
    question: 'What is a game jam?',
    answer: 'A game jam is a multiday event in which you or your team develop a video game catering to a given theme. '
  },
  {
    question: 'What happens if my team and/or I cannot finish developing a video game in the time span of the game jam?',
    answer: 'Don’t worry about it! The purpose is to help you gain experience in any form we can, regardless of completion.'
  },
  {
    question: 'What are the rules of the club?',
    answer: <span>Our rules are listed in our <a href='https://sjsugamedev.com/sjsugdc_constitution_2019-20.pdf'>code of conduct</a>.</span>
  },
  {
    question: 'Is there a membership fee for the club?',
    answer: <span><b>Nope!</b> There is no cost to joining our club.</span>
  }
]

function FAQs () {
  const [open, setOpen] = useState([])

  const toggleOpen = (index) => {
    const newOpen = [...open]
    newOpen[index] = !newOpen[index]
    setOpen(newOpen)
  }

  return (
    <Container
      isPadded
      styles={{
        backgroundColor: 'var(--secondary-background-color)'
      }}
      className={styles.container}
    >
      <div>

        <h2>FAQ</h2>

        {/* Quick controls */}
        <div className={styles.controls}>
          {/* "Expand all" button */}
          <ActionButton
            onClick={() => setOpen(questions.map(() => true))}
            styles={{
              color: 'white',
              backgroundColor: '#0055a2'
            }}
          >
            Expand all
          </ActionButton>

          {/* "Collapse all" button */}
          <ActionButton
            onClick={() => setOpen(questions.map(() => false))}
            styles={{
              color: 'white',
              backgroundColor: '#0055a2'
            }}
          >
            Collapse all
          </ActionButton>
        </div>

      </div>

      {/* Questions */}
      {questions.map((question, index) => {
        return (
          <Question
            key={index}
            question={question.question}
            isOpen={open[index]}
            onClick={() => toggleOpen(index)}
          >
            {question.answer}
          </Question>
        )
      })}
    </Container>
  )
}

export default FAQs
