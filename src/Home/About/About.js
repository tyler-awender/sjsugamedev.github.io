import styles from './About.module.css'

import Container from '../../components/Container'

function About () {
  return (
    <Container
      styles={{
        backgroundColor: 'var(--secondary-background-color)'
      }}
      isPadded
    >
      <h2>Why join?</h2>

      <div className={styles.description}>

        <div className={styles['scroll-left-1']}>
          <span className={styles.emphasize}>learn</span> game dev and design
        </div>

        <div className={styles['scroll-left-2']}>
          gain <span className={styles.emphasize}>inspiration</span> and <span className={styles.emphasize}>motivation</span>
        </div>

        <div className={styles['scroll-left-3']}>
          <span className={styles.emphasize}>network</span> with industry professionals
        </div>

        <div className={styles['scroll-left-4']}>
          leverage <span className={styles.emphasize}>resources</span>
        </div>

        <div className={styles['scroll-left-5']}>
          join <span className={styles.emphasize}>game jams</span> and <span className={styles.emphasize}>create games</span>
        </div>

      </div>
    </Container>
  )
}

export default About
