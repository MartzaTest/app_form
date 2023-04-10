import '../../shop_page_components/steps/steps.scss'

import screen from '../../../../assets/images/AnnaSmith.webp'
import card from '../../../../assets/images/BCMDesign.webp'

import one from '../../../../assets/images/1.png'
import two from '../../../../assets/images/2.png'
import three from '../../../../assets/images/3.png'
import four from '../../../../assets/images/4.png'


function StepOne() {
 
 

  return (
    <div className="StepOne">
        
                <h2>Let’s customize your card!</h2>
                <h3>Just 4 steps and you will have your own Digital Business Card </h3>
                <div className='content'>
                      <div className='content_left'>
                        <div className='info'>
                              <div className='number'>
                                <img src={one} alt="number one png icon" />
                                <p>Design your card</p>
                              </div>
                              <div className='titleUL'>
                              <ul>
                                  <li>Select your design style</li>
                                  <li>Provide the information to be engraved or printed in the card</li>
                              </ul>
                              </div>
                        </div>
                        <div className='info'>
                              <div className='number'>
                                <img src={two} alt="number two png icon" />
                                <p>Design your landing page</p>
                              </div>
                              <div className='titleUL'>
                              <ul>
                                  <li>Upload your profile picture</li>
                                  <li>Provide the profile information for your Landing Page</li>
                              </ul>
                              </div>
                        </div>
                        <div className='info'>
                              <div className='number'>
                                <img src={three} alt="number one three icon" />
                                <p>Add your buttons</p>
                              </div>
                              <div className='titleUL'>
                              <ul>
                                  <li>Save your contact, send a WhatsApp, send an e-mail, and much more!</li>
                                  <li>Add your own button links</li>
                              </ul>
                              </div>
                        </div>
                        <div className='info'>
                              <div className='number'>
                                <img src={four} alt="number four png icon" />
                                <p>Add your social media</p>
                              </div>
                              <div className='titleUL'>
                              <ul>
                                  <li>Instagram, Facebook, LinkedIn, Twitter...</li>
                                  <li>Add any social media link and let the people follow you!</li>
                              </ul>
                              </div>
                        </div>
                        
                        
                      </div>
                      <div className='content_right'>
                        <img className='card' src={card} alt="card img" />
                        <img className='screen' src={screen} alt="big card img" />
                      </div>
                </div>  
            
    </div>
  )
}

export default StepOne
