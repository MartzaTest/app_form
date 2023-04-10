import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../shop_page_components/steps/steps.scss'

import close from '../../../../assets/images/close.webp'
import open from '../../../../assets/images/Add-Button.png'

import Linkedin from '../../../../assets/images/social_icons/small_next/Linkedin.png'
import Instagram from '../../../../assets/images/social_icons/small_next/Instagram.png'
import facebook from '../../../../assets/images/social_icons/small_next/Facebook.png'
import Twitter from '../../../../assets/images/social_icons/small_next/Twitter.png'
import TikTok from '../../../../assets/images/social_icons/small_next/TikTok.png'
import GitHub from '../../../../assets/images/social_icons/small_next/GitHub.png'
import SoundCloud from '../../../../assets/images/social_icons/small_next/SoundCloud.png'
import Youtube from '../../../../assets/images/social_icons/small_next/YouTube.png'
import Spotify from '../../../../assets/images/social_icons/small_next/Sporify.png'
import Pinterest from '../../../../assets/images/social_icons/small_next/Pinterest.png'

import Cart from '../../../../assets/images/cart(1).svg'


function StepFive() {
const [showStepFourMain, setShowStepFourMain] = useState([1]);
const [clickedIcon, setClickedIcon] = useState([null]);
const initialState = {
  showLinkedin: false,
  showInstagram: false,
  showfacebook: false,
  showTwitter: false,
  showTikTok: false,
  showGitHub: false,
  showSoundCloud: false,
  showYoutube: false,
  showSpotify: false,
  showPinterest: false,
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
                    <img className={`icon ${clickedIcon[index] === "showLinkedin" ? "shadow" : ""}`} src={Linkedin} alt="contact icon" onClick={() => handleIconClick('showLinkedin' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showInstagram" ? "shadow" : ""}`} src={Instagram} alt="whatsApp icon" onClick={() => handleIconClick('showInstagram' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showfacebook" ? "shadow" : ""}`} src={facebook} alt="skype icon" onClick={() => handleIconClick('showfacebook' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showTwitter" ? "shadow" : ""}`} src={Twitter} alt="email icon" onClick={() => handleIconClick('showTwitter' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showTikTok" ? "shadow" : ""}`} src={TikTok} alt="youtube icon" onClick={() => handleIconClick('showTikTok' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showGitHub" ? "shadow" : ""}`} src={GitHub} alt="revolut icon" onClick={() => handleIconClick('showGitHub' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showSoundCloud" ? "shadow" : ""}`} src={SoundCloud} alt="messenger icon" onClick={() => handleIconClick('showSoundCloud' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showYoutube" ? "shadow" : ""}`} src={Youtube} alt="telegram icon" onClick={() => handleIconClick('showYoutube' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showSpotify" ? "shadow" : ""}`} src={Spotify} alt="website icon" onClick={() => handleIconClick('showSpotify' , index)}/>
                    <img className={`icon ${clickedIcon[index] === "showPinterest" ? "shadow" : ""}`} src={Pinterest} alt="customLink icon" onClick={() => handleIconClick('showPinterest' , index)}/>
                </div>
                <div  className='inputs'>
                    {stateArray[index].showLinkedin && <div className='inputs_div'>
                            <input className='input_Linkedin' type="text" placeholder='https://mt.linkedin.com/...' name='step_five_Linkedin'/> 
                        </div>}
                    {stateArray[index].showInstagram && <div className='inputs_div'>
                        <input className='input_Instagram' type="text" placeholder='https://www.instagram.com/...' name='step_five_Instagram'/>
                        </div>}
                    {stateArray[index].showfacebook && <div className='inputs_div'>
                        <input className='input_facebook' placeholder='https://www.facebook.com/...' type="text" name='step_five_facebook'/>
                        </div>}
                    {stateArray[index].showTwitter && <div className='inputs_div'>
                        <input className='input_Twitter' type="text" placeholder='https://twitter.com/...'  name='step_five_Twitter'/>
                        </div>}
                    {stateArray[index].showTikTok && <div className='inputs_div'>
                        <input className='input_TikTok' type="text" placeholder='https://www.tiktok.com/...'  name='step_five_TikTok'/>
                        </div>}
                    {stateArray[index].showGitHub && <div className='inputs_div'>
                        <input className='input_GitHub' type="text"  placeholder='https://github.com/...'  name='step_five_GitHub'/>
                        </div>}
                    {stateArray[index].showSoundCloud && <div className='inputs_div'>
                        <input className='input_SoundCloud' type="text" placeholder='https://soundcloud.com/...'  name='step_five_SoundCloud'/>
                        </div>}
                    {stateArray[index].showYoutube && <div className='inputs_div'>
                        <input className='input_Youtube' type="text" placeholder='https://www.youtube.com/...'  name='step_five_Youtube'/>
                        </div>}
                    {stateArray[index].showSpotify && <div className='inputs_div'>
                        <input className='input_Spotify' type="text" placeholder='https://open.spotify.com/...'  name='step_five_Spotify'/>
                        </div>}
                    {stateArray[index].showPinterest && <div className='inputs_div'>
                        <input className='input_Pinterest' type="text" placeholder='https://www.pinterest.com/...'  name='step_five_Pinterest'/>
                        </div>}
                </div>
                
                
            </div>))}
                <img src={open} alt="open icon" onClick={handleOpenIconClick} />
                <div className='addToCart'>
                    <Link to="/product">
                        <a className='cart'>
                            Add to Cart
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="cart"><path d="M84.1 28.5c-.5-.6-1.2-.9-1.9-.9h-61v-8.8c0-1.3-1.1-2.4-2.4-2.4-1.3 0-2.4 1.1-2.4 2.4v50c0 1.3 1.1 2.4 2.4 2.4h2.8c-1.9 3.5-1.5 7.9 1.5 10.9 1.7 1.7 4 2.7 6.4 2.7s4.7-.9 6.4-2.7c1.7-1.7 2.7-4 2.7-6.4 0-1.6-.4-3.1-1.2-4.4h11.3c-1.9 3.5-1.5 7.9 1.5 10.9 1.7 1.7 4 2.7 6.4 2.7 2.4 0 4.7-.9 6.4-2.7 1.7-1.7 2.7-4 2.7-6.4 0-1.6-.4-3.1-1.2-4.4h3.1c1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4H21.2v-4.7h53c1.1 0 2-.7 2.3-1.8l8-29.3c.2-1 0-1.7-.4-2.3zM32.6 78.6c-1.6 1.6-4.5 1.6-6.1 0-1.7-1.7-1.7-4.4 0-6.1.8-.8 1.9-1.3 3.1-1.3 1.2 0 2.2.4 3.1 1.3.8.8 1.3 1.9 1.3 3.1s-.5 2.2-1.4 3zm27.2 0c-1.6 1.6-4.5 1.6-6.1 0-1.7-1.7-1.7-4.4 0-6.1.8-.8 1.9-1.3 3.1-1.3 1.2 0 2.2.4 3.1 1.3.8.8 1.3 1.9 1.3 3.1s-.5 2.2-1.4 3zm12.5-21.8H21.2V32.3H79l-6.7 24.5z"></path></svg>
                        </a>
                    </Link>
                </div>

            
           
        </div>
    )
}

export default StepFive
