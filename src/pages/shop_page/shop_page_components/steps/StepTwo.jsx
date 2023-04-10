import React, { useState } from 'react';
import '../../shop_page_components/steps/steps.scss'


import one from '../../../../assets/images/1.png'
import two from '../../../../assets/images/2.png'

import card_centred from '../../../../assets/images/cards/Card_Centered.webp'
import card_classic from '../../../../assets/images/cards/Card_Classic.webp'
import card_customized from '../../../../assets/images/cards/Card-Custom.webp'

function StepTwo() {
    const [formToShow, setFormToShow] = useState(null);

    const handleImgClick = (formName) => {
      setFormToShow(formName);
    }
    const boxShadowStyle = { boxShadow: '1px 1px 9px 3px rgba(36,112,182,0.75)' };
     return (
        <div className="StepTwo">

            <h2>Design your Card </h2>
            <h3>Select one of our pre-defined designs or simply send us yours!  </h3>
            <div className='StepTwo_container'>
                <div className='StepTwo_container_info'>
                              <div className='_info_number'>
                                    <img src={one} alt="number one png icon"  />
                                    <p>Design your landing page</p>
                              </div>
                              <div className='img_wrapper'>
                                <div className='img_container'>
                                    <img src={card_centred} alt="img card" onClick={() => handleImgClick('centred')}/>
                                    <h3>Centerd</h3>
                                </div>
                                <div className='img_container'>
                                    <img src={card_classic } alt="img card" onClick={() => handleImgClick('classic')}/>
                                    <h3>Classic</h3>
                                </div>
                                <div className='img_container'>
                                    <img src={card_customized} alt="img card" onClick={() => handleImgClick('customized')}/>
                                    <h3>Fully Customized</h3>
                                </div>
                              </div>
                </div>
                {formToShow === 'centred' && (
                    <div className='form_centred'>
                            <div className='_info_number'>
                                            <img src={two} alt="number one png icon" />
                                            <p>Design your landing page</p>
                            </div>
                            <div className='upload'>
                                <p>Upload your logo:</p>
                                <input type="file" name='centred_file'/>
                                <p className='supportP'>Size required: 1:1 (Squared) (only .png , .jpg or .webp formats max 3mb size) </p>
                            </div>
                            <div className='fullName'>
                                <p>Toitle & Company</p>
                                <input type="text" placeholder='e.g. Anna Smith' name='centred_name'/>
                            </div>
                            <div className='Company_title'>
                                <p>Full Name</p>
                                <input type="text" placeholder='e.g. Marketing Manager' name='centred_companyTitle'/>
                            </div>
                            <div className='Text_area'>
                                <p>Additional Requests or Clarifications (Optional)</p>
                                    <textarea  rows="4" cols="50" placeholder='Leave us here any comment about you think we should know about your Design' name='centred_textArea'>
                                    </textarea>
                            </div>
                    </div>
                )}
                {formToShow === 'classic' && (
                    <div className='form_classic'>
                        <div className='_info_number'>
                                        <img src={two} alt="number one png icon" />
                                        <p>Design your landing page</p>             
                        </div>
                            <div className='upload'>
                                <p>Upload your logo:</p>
                                <input type="file" name='classic_file'/>
                                <p className='supportP'>Size required: 1:1 (Squared) (only .png , .jpg or .webp formats max 3mb size) </p>
                            </div>
                            <div className='fullName'>
                                <p>Toitle & Company</p>
                                <input type="text" placeholder='e.g. Anna Smith' name='classic_name'/>
                            </div>
                            <div className='Company_title'>
                                <p>Full Name</p>
                                <input type="text" placeholder='e.g. Marketing Manager' name='classic_companyTitle'/>
                            </div>
                            <div className='Text_area'>
                                <p>Additional Requests or Clarifications (Optional)</p>
                                    <textarea  rows="4" cols="50" placeholder='Leave us here any comment about you think we should know about your Design' name='classic_textArea'>
                                    </textarea>
                            </div>
                    </div>
      )}
                {formToShow === 'customized' && (
                    <div className='form_customized'>
                        <div className='_info_number'>
                                        <img src={two} alt="number one png icon" />
                                        <p>Design your landing page</p>
                        </div>
                        <div className='upload'>
                                <p>Upload your design:</p>
                                <input type="file" name='customized_file'/>
                                <p className='supportP'>Size required: 1:1 (Squared) (only .png , .jpg or .webp formats max 3mb size) </p>
                        </div>
                        <div className='Text_area'>
                                <p>Additional Requests or Clarifications (Optional)</p>
                                    <textarea  rows="4" cols="50" placeholder='Leave us here any comment about you think we should know about your Design' name='customized_textArea'>
                                    </textarea>
                            </div>
                    </div>
                )}
                           
                           
                            
            </div>
        </div>
    )
}

export default StepTwo
