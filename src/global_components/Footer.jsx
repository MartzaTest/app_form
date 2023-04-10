import './global_components_style/Footer.scss'
import Star from '../assets/images/star.svg'
import Phone from '../assets/images/phone.svg'
import Chat from '../assets/images/chat.svg'
import Facebook from '../assets/images/facebook.svg'
import Instagram from '../assets/images/instagram.svg'
import Linkedin from '../assets/images/linkedin.svg'




function Footer() {
  

  return (
    <div className="Footer">
        <div className='Footer_link'>
         <a href="#"><img src={Star} alt="star icon" /> Provided by TagMYLink</a>
        </div>
        <h1>Don't just store your social <br/> media links. Do more!</h1>
        <p>All of our fully-custom products use NFC technology to seamlessly share data to any smartphone.</p>
        <div className='Footer_socialIcons'>
            <a target="_blank" href="https://www.facebook.com/businesscardsmalta"><img src={Facebook} alt="facebook icon" /></a>
            <a target="_blank" href="https://www.instagram.com/businesscards_malta/"><img src={Instagram} alt="instagram icon" /></a>
            <a target="_blank" href="https://www.linkedin.com/showcase/business-cards-malta/?_l=en_US"><img src={Linkedin} alt="linkedin icon" /></a>
        </div>
        <div className='Footer_buttons'>
        <button>
        <svg className='svg' width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.54546 17.2727H8.18182V16.3636H4.54546V17.2727ZM1.81818 20C1.31818 20 0.890001 19.8218 0.533638 19.4655C0.177274 19.1091 -0.000604517 18.6812 1.54345e-06 18.1818V1.81818C1.54345e-06 1.31818 0.178183 0.890001 0.534547 0.533638C0.89091 0.177274 1.31879 -0.000604517 1.81818 1.54345e-06H10.9091C11.4091 1.54345e-06 11.8373 0.178183 12.1936 0.534547C12.55 0.890911 12.7279 1.31879 12.7273 1.81818V18.1818C12.7273 18.6818 12.5491 19.11 12.1927 19.4664C11.8364 19.8227 11.4085 20.0006 10.9091 20H1.81818ZM1.81818 15.4545V18.1818H10.9091V15.4545H1.81818ZM1.81818 13.6364H10.9091V4.54546H1.81818V13.6364ZM1.81818 2.72727H10.9091V1.81818H1.81818V2.72727Z" fill="#005FB3"/>
</svg>
        CREATE YOUR CARD
    </button>
            <button><svg className='svg' width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1111 0C5 0 0 3.97778 0 8.88889C0.0278983 10.0697 0.316252 11.2297 0.844456 12.2861C1.37266 13.3425 2.12768 14.2692 3.05556 15C3.05556 15.6667 2.58889 17.4111 0 20C2.63333 19.8778 5.15556 18.8889 7.18889 17.2222C8.45556 17.5889 9.78889 17.7778 11.1111 17.7778C17.2222 17.7778 22.2222 13.8 22.2222 8.88889C22.2222 3.97778 17.2222 0 11.1111 0ZM11.1111 15.5556C6.2 15.5556 2.22222 12.5667 2.22222 8.88889C2.22222 5.21111 6.2 2.22222 11.1111 2.22222C16.0222 2.22222 20 5.21111 20 8.88889C20 12.5667 16.0222 15.5556 11.1111 15.5556Z" fill="#005FB3"/>
</svg>Contact Us</button>
        </div>
        <div className='Footer_signature'>
            <a target="_blank" href="https://martza-tech.com/">Developed by Martza-Tech. © 2022 BusinessCardsMalta – All rights reserved</a>
            <a className='aHover' target="_blank" href="">Terms Of Use</a>
        </div>
    </div>
  )
}

export default Footer
