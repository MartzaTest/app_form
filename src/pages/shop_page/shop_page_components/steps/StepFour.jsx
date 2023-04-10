/* import React, { useState } from 'react';
import '../../shop_page_components/steps/steps.scss'

import close from '../../../../assets/images/close.webp'
import open from '../../../../assets/images/Add-Button.png'

import contact from '../../../../assets/images/social_icons/small/Save-Contact.png'
import whatsApp from '../../../../assets/images/social_icons/small/Whatsapp.png'
import skype from '../../../../assets/images/social_icons/small/skype.png'
import email from '../../../../assets/images/social_icons/small/Email.png'
import youtube from '../../../../assets/images/social_icons/small/Youtube.png'
import revolut from '../../../../assets/images/social_icons/small/Revolut.png'
import messenger from '../../../../assets/images/social_icons/small/Messenger.png'
import telegram from '../../../../assets/images/social_icons/small/Telegram.png'
import website from '../../../../assets/images/social_icons/small/Website.png'
import customLink from '../../../../assets/images/social_icons/small/Custom-Link.png'



function StepFour() {
const [showStepFourMain, setShowStepFourMain] = useState([1]);
const [clickedIcon, setClickedIcon] = useState(null);
const initialState = {
  showContact: false,
  showWhatsApp: false,
  showSkype: false,
  showEmail: false,
  showYoutube: false,
  showRevolut: false,
  showMessenger: false,
  showTelegram: false,
  showWebsite: false,
  showCustomLink: false,
};
const [stateArray, setStateArray] = useState([initialState]);
const handleIconClick = (key, index) => {
  const newStateArray = [...stateArray];
  newStateArray[index] = { ...initialState, [key]: true };
  setStateArray(newStateArray);
  setClickedIcon(key);
};
//add new card handler click
const handleOpenIconClick = () => {
  if (showStepFourMain.length < 5) {
    setShowStepFourMain([...showStepFourMain, 'stepFourMain']);
    setStateArray([...stateArray, initialState]);
  } else {
    alert('you can add maximum 5 buttons');
  }
};
//delete one card handler click
const handleCloseIconClick = (index) => {
  setShowStepFourMain((prevShowStepFourMain) =>
    prevShowStepFourMain.filter((_, i) => i !== index)
  );
  setStateArray((prevStateArray) =>
    prevStateArray.filter((_, i) => i !== index)
  );
};

     return (
        <div className="StepFour">

            <h2>Add customized buttons to your Landing</h2>
            {showStepFourMain.map((_, index) => (<div key={index} className='StepFour_main'>
                <div className='close'>
                    <img src={close} alt="contact icon" onClick={() => handleCloseIconClick(index)} style={{ display: showStepFourMain.length === 1 ? 'none' : 'block' }}/>
                </div>
                <div className='icons'>
                    <img className={`icon ${clickedIcon === "showContact" ? "shadow" : ""}`} src={contact} alt="contact icon" onClick={() => handleIconClick('showContact' , index)}/>
                    <img className={`icon ${clickedIcon === "showWhatsApp" ? "shadow" : ""}`} src={whatsApp} alt="whatsApp icon" onClick={() => handleIconClick('showWhatsApp' , index)}/>
                    <img className={`icon ${clickedIcon === "showSkype" ? "shadow" : ""}`} src={skype} alt="skype icon" onClick={() => handleIconClick('showSkype' , index)}/>
                    <img className={`icon ${clickedIcon === "showEmail" ? "shadow" : ""}`} src={email} alt="email icon" onClick={() => handleIconClick('showEmail')}/>
                    <img className={`icon ${clickedIcon === "showYoutube" ? "shadow" : ""}`} src={youtube} alt="youtube icon" onClick={() => handleIconClick('showYoutube' , index)}/>
                    <img className={`icon ${clickedIcon === "showRevolut" ? "shadow" : ""}`} src={revolut} alt="revolut icon" onClick={() => handleIconClick('showRevolut' , index)}/>
                    <img className={`icon ${clickedIcon === "showMessenger" ? "shadow" : ""}`} src={messenger} alt="messenger icon" onClick={() => handleIconClick('showMessenger' , index)}/>
                    <img className={`icon ${clickedIcon === "showTelegram" ? "shadow" : ""}`} src={telegram} alt="telegram icon" onClick={() => handleIconClick('showTelegram' , index)}/>
                    <img className={`icon ${clickedIcon === "showWebsite" ? "shadow" : ""}`} src={website} alt="website icon" onClick={() => handleIconClick('showWebsite' , index)}/>
                    <img className={`icon ${clickedIcon === "showCustomLink" ? "shadow" : ""}`} src={customLink} alt="customLink icon" onClick={() => handleIconClick('showCustomLink' , index)}/>
                </div>
                <div  className='inputs'>
                    {stateArray[index].showContact && <div className='inputs_div'>
                            <input className='input_cntact' type="text" placeholder='Display text (Button Title)' name='saveContact_displayName'/>
                            <div className='inputs_div_in'>
                            <input className='input_support' type="number"  placeholder="Prefix" name='saveContact_prefix'/>
                            <input className='input_contact' type="text"  placeholder="Phone Number" name='saveContact_phoneNumber'/>
                            </div>
                        </div>}
                    {stateArray[index].showWhatsApp && <div className='inputs_div'>
                        <input className='input_whatsApp' type="text" placeholder='Display text (Button Title)' name='whatsApp_displayName'/>
                        <div className='inputs_div_in'>
                            <input className='input_support' type="number"  placeholder="Prefix" name='whatsApp_prefix'/>
                            <input className='input_whatsApp' type="text"  placeholder="Phone Number" name='whatsApp_phoneNumber'/>
                            </div>
                        </div>}
                    {stateArray[index].showSkype && <div className='inputs_div'>
                        <input className='input_skype' placeholder='Display text (Button Title)' type="text" name='skype_displayName'/>
                        <input className='input_skype' type="text" placeholder='Skype "invite friends" link' name='skype_link'/>
                        </div>}
                    {stateArray[index].showEmail && <div className='inputs_div'>
                        <input className='input_email' type="text" placeholder='Display text (Button Title)'  name='email_displayName'/>
                        <input className='input_email' type="text" placeholder='E-mail'  name='email_link'/>
                        </div>}
                    {stateArray[index].showYoutube && <div className='inputs_div'>
                        <input className='input_youtube' type="text" placeholder='Display text (Button Title)'  name='youtube_displayName'/>
                        <input className='input_youtube' type="text" placeholder='YouTube video or page link'  name='youtube_link'/>
                        </div>}
                    {stateArray[index].showRevolut && <div className='inputs_div'>
                        <input className='input_revolut' type="text"  placeholder='Display text (Button Title)'  name='revolut_displayName'/>
                        <input className='input_revolut' type="text"  placeholder='Revolut userName or Link'  name='revolut_link'/>
                        </div>}
                    {stateArray[index].showMessenger && <div className='inputs_div'>
                        <input className='input_messenger' type="text" placeholder='Display text (Button Title)'  name='messenger_displayName'/>
                        <input className='input_messenger' type="text" placeholder='FaceBook username or page link'  name='messenger_link'/>
                        </div>}
                    {stateArray[index].showTelegram && <div className='inputs_div'>
                        <input className='input_telegram' type="text" placeholder='Display text (Button Title)'  name='telegram_displayName'/>
                        <input className='input_telegram' type="text" placeholder='Telegram USerName'  name='telegram_link'/>
                        </div>}
                    {stateArray[index].showWebsite && <div className='inputs_div'>
                        <input className='input_website' type="text" placeholder='Display text (Button Title)'  name='website_displayName'/>
                        <input className='input_website' type="text" placeholder='https://www.website.com'  name='website_link'/>
                        </div>}
                    {stateArray[index].showCustomLink && <div className='inputs_div'>
                        <input className='input_customLink' type="text" placeholder='Display text (Button Title)'  name='customLink_displayName'/>
                        <input className='input_customLink' type="text" placeholder='https://www.website.com'  name='customLink_link'/>
                        </div>}
                </div>
                
                
            </div>))}
                <img src={open} alt="open icon" onClick={handleOpenIconClick} />


            
           
        </div>
    )
}

export default StepFour
 */

import React, { useState } from 'react';
import '../../shop_page_components/steps/steps.scss'

import close from '../../../../assets/images/close.webp'
import open from '../../../../assets/images/Add-Button.png'

import contact from '../../../../assets/images/social_icons/small/Save-Contact.png'
import whatsApp from '../../../../assets/images/social_icons/small/Whatsapp.png'
import skype from '../../../../assets/images/social_icons/small/skype.png'
import email from '../../../../assets/images/social_icons/small/Email.png'
import youtube from '../../../../assets/images/social_icons/small/Youtube.png'
import revolut from '../../../../assets/images/social_icons/small/Revolut.png'
import messenger from '../../../../assets/images/social_icons/small/Messenger.png'
import telegram from '../../../../assets/images/social_icons/small/Telegram.png'
import website from '../../../../assets/images/social_icons/small/Website.png'
import customLink from '../../../../assets/images/social_icons/small/Custom-Link.png'



function StepFour() {
const [showStepFourMain, setShowStepFourMain] = useState([1]);
const [clickedIcon, setClickedIcon] = useState([null]);
const initialState = {
  showContact: false,
  showWhatsApp: false,
  showSkype: false,
  showEmail: false,
  showYoutube: false,
  showRevolut: false,
  showMessenger: false,
  showTelegram: false,
  showWebsite: false,
  showCustomLink: false,
};
const [stateArray, setStateArray] = useState([initialState]);
const handleIconClick = (key, index) => {
    const newStateArray = [...stateArray];
    newStateArray[index] = { ...initialState, [key]: true };
    setStateArray(newStateArray);
  
    const newClickedIcon = [...clickedIcon];
    newClickedIcon[index] = key;
    setClickedIcon(newClickedIcon);
};
//add new card handler click
const handleOpenIconClick = () => {
  if (showStepFourMain.length < 5) {
    setShowStepFourMain([...showStepFourMain, "stepFourMain"]);
    setStateArray([...stateArray, initialState]);
    setClickedIcon([...clickedIcon, null]);
  } else {
    alert('you can add maximum 5 buttons');
  }
};
//delete one card handler click
const handleCloseIconClick = (index) => {
    setShowStepFourMain((prevShowStepFourMain) =>
    prevShowStepFourMain.filter((_, i) => i !== index)
  );
  setStateArray((prevStateArray) =>
    prevStateArray.filter((_, i) => i !== index)
  );
  setClickedIcon((prevClickedIcon) =>
    prevClickedIcon.filter((_, i) => i !== index)
  );
};

     return (
        <div className="StepFour">

            <h2>Add customized buttons to your Landing</h2>
            {showStepFourMain.map((_, index) => (<div key={index} className='StepFour_main'>
                <div className='close'>
                    <img src={close} alt="contact icon" onClick={() => handleCloseIconClick(index)} style={{ display: showStepFourMain.length === 1 ? 'none' : 'block' }}/>
                </div>
                <div className='icons'>
                    <img className={`icon ${clickedIcon[index] === "showContact" ? "shadow" : ""}`} src={contact} alt="contact icon" onClick={() => handleIconClick('showContact' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showWhatsApp" ? "shadow" : ""}`} src={whatsApp} alt="whatsApp icon" onClick={() => handleIconClick('showWhatsApp' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showSkype" ? "shadow" : ""}`} src={skype} alt="skype icon" onClick={() => handleIconClick('showSkype' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showEmail" ? "shadow" : ""}`} src={email} alt="email icon" onClick={() => handleIconClick('showEmail' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showYoutube" ? "shadow" : ""}`} src={youtube} alt="youtube icon" onClick={() => handleIconClick('showYoutube' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showRevolut" ? "shadow" : ""}`} src={revolut} alt="revolut icon" onClick={() => handleIconClick('showRevolut' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showMessenger" ? "shadow" : ""}`} src={messenger} alt="messenger icon" onClick={() => handleIconClick('showMessenger' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showTelegram" ? "shadow" : ""}`} src={telegram} alt="telegram icon" onClick={() => handleIconClick('showTelegram' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showWebsite" ? "shadow" : ""}`} src={website} alt="website icon" onClick={() => handleIconClick('showWebsite' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showCustomLink" ? "shadow" : ""}`} src={customLink} alt="customLink icon" onClick={() => handleIconClick('showCustomLink' , index)}/>
                </div>
                <div  className='inputs'>
                    {stateArray[index].showContact && <div className='inputs_div'>
                            <input className='input_cntact' type="text" placeholder='Display text (Button Title)' name='saveContact_displayName'/>
                            <div className='inputs_div_in'>
                            <input className='input_support' type="number"  placeholder="Prefix" name='saveContact_prefix'/>
                            <input className='input_contact' type="text"  placeholder="Phone Number" name='saveContact_phoneNumber'/>
                            </div>
                        </div>}
                    {stateArray[index].showWhatsApp && <div className='inputs_div'>
                        <input className='input_whatsApp' type="text" placeholder='Display text (Button Title)' name='whatsApp_displayName'/>
                        <div className='inputs_div_in'>
                            <input className='input_support' type="number"  placeholder="Prefix" name='whatsApp_prefix'/>
                            <input className='input_whatsApp' type="text"  placeholder="Phone Number" name='whatsApp_phoneNumber'/>
                            </div>
                        </div>}
                    {stateArray[index].showSkype && <div className='inputs_div'>
                        <input className='input_skype' placeholder='Display text (Button Title)' type="text" name='skype_displayName'/>
                        <input className='input_skype' type="text" placeholder='Skype "invite friends" link' name='skype_link'/>
                        </div>}
                    {stateArray[index].showEmail && <div className='inputs_div'>
                        <input className='input_email' type="text" placeholder='Display text (Button Title)'  name='email_displayName'/>
                        <input className='input_email' type="text" placeholder='E-mail'  name='email_link'/>
                        </div>}
                    {stateArray[index].showYoutube && <div className='inputs_div'>
                        <input className='input_youtube' type="text" placeholder='Display text (Button Title)'  name='youtube_displayName'/>
                        <input className='input_youtube' type="text" placeholder='YouTube video or page link'  name='youtube_link'/>
                        </div>}
                    {stateArray[index].showRevolut && <div className='inputs_div'>
                        <input className='input_revolut' type="text"  placeholder='Display text (Button Title)'  name='revolut_displayName'/>
                        <input className='input_revolut' type="text"  placeholder='Revolut userName or Link'  name='revolut_link'/>
                        </div>}
                    {stateArray[index].showMessenger && <div className='inputs_div'>
                        <input className='input_messenger' type="text" placeholder='Display text (Button Title)'  name='messenger_displayName'/>
                        <input className='input_messenger' type="text" placeholder='FaceBook username or page link'  name='messenger_link'/>
                        </div>}
                    {stateArray[index].showTelegram && <div className='inputs_div'>
                        <input className='input_telegram' type="text" placeholder='Display text (Button Title)'  name='telegram_displayName'/>
                        <input className='input_telegram' type="text" placeholder='Telegram USerName'  name='telegram_link'/>
                        </div>}
                    {stateArray[index].showWebsite && <div className='inputs_div'>
                        <input className='input_website' type="text" placeholder='Display text (Button Title)'  name='website_displayName'/>
                        <input className='input_website' type="text" placeholder='https://www.website.com'  name='website_link'/>
                        </div>}
                    {stateArray[index].showCustomLink && <div className='inputs_div'>
                        <input className='input_customLink' type="text" placeholder='Display text (Button Title)'  name='customLink_displayName'/>
                        <input className='input_customLink' type="text" placeholder='https://www.website.com'  name='customLink_link'/>
                        </div>}
                </div>
                
                
            </div>))}
                <img src={open} alt="open icon" onClick={handleOpenIconClick} />


            
           
        </div>
    )
}

export default StepFour
