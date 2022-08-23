import Greeter from './Greeter/Greeter'
import Meetings from './Meetings/Meetings'
import About from './About/About'
import Officers from './Officers/Officers'
import FAQs from './FAQs/FAQs'

function Home () {
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
