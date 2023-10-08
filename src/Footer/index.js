import Socials from './Socials'
import FooterNav from './FooterNav'

function Footer (props) {
  return (
    <div className='footer'>
      <Socials />
      <FooterNav tabs={props.tabs} />
    </div>
  )
}

export default Footer
