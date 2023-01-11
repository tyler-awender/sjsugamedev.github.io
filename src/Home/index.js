import Greeter from './Greeter/Greeter'
import Meetings from './Meetings/Meetings'
import About from './About/About'
import Officers from './Officers/Officers'
import FAQs from './FAQs/FAQs'

import { useEffect } from 'react'

function Home () {
  useEffect(() => {
    document.title = 'Game Dev Club @ SJSU'
  })

  return (
    <div>
      <Greeter />
      <Meetings />
      <About />
      <Officers />
      <FAQs />
    </div>
  )
}

export default Home
