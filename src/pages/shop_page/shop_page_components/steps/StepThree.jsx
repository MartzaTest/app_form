import React, { useState } from 'react';
import '../../shop_page_components/steps/steps.scss'


import one from '../../../../assets/images/1.png'
import two from '../../../../assets/images/2.png'

import card1 from '../../../../assets/images/cards/screen1.webp'
import card2 from '../../../../assets/images/cards/screen2.webp'
import card3 from '../../../../assets/images/cards/screen3.webp'
import card4 from '../../../../assets/images/cards/screen4.webp'

function StepThree() {
    const [formToShow, setFormToShow] = useState(null);

    const handleImgClick = (formName) => {
      setFormToShow(formName);
    }
     return (
        <div className="StepThree">

            <h2>Design your Card </h2>
            <h3>Select one of our pre-defined designs or simply send us yours!  </h3>
            <div className='StepThree_container'>
                <div className='StepThree_container_info'>
                              <div className='_info_number'>
                                    <img src={one} alt="number one png icon"  />
                                    <p>Select a design style</p>
                              </div>
                              <div className='img_wrapper'>
                                <div className='img_container'>
                                    <img src={card1} alt="img card" onClick={() => handleImgClick('first')}/>
                                </div>
                                <div className='img_container'>
                                    <img src={card2} alt="img card" onClick={() => handleImgClick('second')}/>
                                </div>
                                <div className='img_container'>
                                    <img src={card3} alt="img card" onClick={() => handleImgClick('third')}/>
                                </div>
                                <div className='img_container'>
                                    <img src={card4} alt="img card" onClick={() => handleImgClick('fourth')}/>
                                </div>
                              </div>
                </div>
                {formToShow === 'first' && (
                    <div className='design_form_first'>
                            <div className='_info_number'>
                                            <img src={two} alt="number one png icon" />
                                            <p>Customize your page!</p>
                            </div>
                            <div className='upload'>
                                <p>Upload your Logo:</p>
                                <input type="file" name='design_1_logo'/>
                                <p className='supportP'>Size required: 1:1 (Squared) (only .png , .jpg or .webp formats max 3mb size) </p>
                            </div>
                            <div className='upload'>
                                <p>Upload your profile picture:</p>
                                <input type="file" name='design_1_profile_img'/>
                                <p className='supportP'>Size required: 1:1 (Squared) (only .png , .jpg or .webp formats max 3mb size) </p>
                            </div>
                            <div className='fullName'>
                                <p>Toitle & Company</p>
                                <input type="text" placeholder='e.g. Anna Smith' name='design_1_name'/>
                            </div>
                            <div className='Company_title'>
                                <p>Full Name</p>
                                <input type="text" placeholder='e.g. Marketing Manager' name='design_1_companyTitle'/>
                            </div>
                            <div className='short_description'>
                                <p>Short Description</p>
                                <input type="text" placeholder='e.g. I will help you to encrese your sales' name='design_1_description'/>
                            </div>
                            <div className='Text_area'>
                                <p>Additional Requests or Clarifications (Optional)</p>
                                    <textarea  rows="4" cols="50" placeholder='Leave us here any comment about you think we should know about your Design' name='design_1_textArea'>
                                    </textarea>
                            </div>
                    </div>
                )}
                {formToShow === 'second' && (
                    <div className='design_form_second'>
                    <div className='_info_number'>
                                    <img src={two} alt="number one png icon" />
                                    <p>Customize your page!</p>
                    </div>
                    <div className='upload'>
                        <p>Upload your Logo:</p>
                        <input type="file" name='design_2_logo'/>
                        <p className='supportP'>Size required: 1:1 (Squared) (only .png , .jpg or .webp formats max 3mb size) </p>
                    </div>
                    <div className='upload'>
                        <p>Upload your profile picture:</p>
                        <input type="file" name='design_2_profile_img'/>
                        <p className='supportP'>Size required: 1:1 (Squared) (only .png , .jpg or .webp formats max 3mb size) </p>
                    </div>
                    <div className='fullName'>
                        <p>Toitle & Company</p>
                        <input type="text" placeholder='e.g. Anna Smith' name='design_2_name'/>
                    </div>
                    <div className='Company_title'>
                        <p>Full Name</p>
                        <input type="text" placeholder='e.g. Marketing Manager' name='design_2_companyTitle'/>
                    </div>
                    <div className='short_description'>
                        <p>Short Description</p>
                        <input type="text" placeholder='e.g. I will help you to encrese your sales' name='design_2_description'/>
                    </div>
                    <div className='Text_area'>
                        <p>Additional Requests or Clarifications (Optional)</p>
                            <textarea  rows="4" cols="50" placeholder='Leave us here any comment about you think we should know about your Design' name='design_2_textArea'>
                            </textarea>
                    </div>
            </div>
      )}
                {formToShow === 'third' && (
                    <div className='design_form_third'>
                    <div className='_info_number'>
                                    <img src={two} alt="number one png icon" />
                                    <p>Customize your page!</p>
                    </div>
                    <div className='upload'>
                        <p>Upload your Logo:</p>
                        <input type="file" name='design_3_logo'/>
                        <p className='supportP'>Size required: 1:1 (Squared) (only .png , .jpg or .webp formats max 3mb size) </p>
                    </div>
                    <div className='fullName'>
                        <p>Full Name</p>
                        <input type="text" placeholder='e.g. Anna Smith' name='design_3_name'/>
                    </div>
                    <div className='Company_title'>
                        <p>Company & Title</p>
                        <input type="text" placeholder='e.g. Marketing Manager' name='design_3_companyTitle'/>
                    </div>
                    <div className='short_description'>
                        <p>Short Description</p>
                        <input type="text" placeholder='e.g. I will help you to encrese your sales' name='design_3_description'/>
                    </div>
                    <div className='Text_area'>
                        <p>Additional Requests or Clarifications (Optional)</p>
                            <textarea  rows="4" cols="50" placeholder='Leave us here any comment about you think we should know about your Design' name='design_2_textArea'>
                            </textarea>
                    </div>
            </div>
                )}
                 {formToShow === 'fourth' && (
                    <div className='design_form_fourth'>
                    <div className='_info_number'>
                                    <img src={two} alt="number one png icon" />
                                    <p>Customize your page!</p>
                    </div>
                    <div className='upload'>
                        <p>Upload your profile picture:</p>
                        <input type="file" name='design_4_profile_img'/>
                        <p className='supportP'>Size required: 1:1 (Squared) (only .png , .jpg or .webp formats max 3mb size) </p>
                    </div>
                    <div className='fullName'>
                        <p>Full Name</p>
                        <input type="text" placeholder='e.g. Anna Smith' name='design_4_name'/>
                    </div>
                    <div className='Company_title'>
                        <p>Company & Title</p>
                        <input type="text" placeholder='e.g. Marketing Manager' name='design_4_companyTitle'/>
                    </div>
                    <div className='short_description'>
                        <p>Short Description</p>
                        <input type="text" placeholder='e.g. I will help you to encrese your sales' name='design_4_description'/>
                    </div>
                    <div className='Text_area'>
                        <p>Additional Requests or Clarifications (Optional)</p>
                            <textarea  rows="4" cols="50" placeholder='Leave us here any comment about you think we should know about your Design' name='design_4_textArea'>
                            </textarea>
                    </div>
            </div>
                )}           
                           
                            
            </div>
        </div>
    )
}

export default StepThree
