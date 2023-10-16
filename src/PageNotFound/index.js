import styles from './index.module.css'

import Container from '../components/Container'

import { useEffect } from 'react'

function PageNotFound () {
  useEffect(() => {
    document.title = 'Page Not Found'
  })

  return (
    <div>
      <Container isPadded>
        <p className={styles.errorCode}>404</p>
        <p className={styles.errorDesc}>Page Not Found</p>
      </Container>
    </div>
  )
}

export default PageNotFound
