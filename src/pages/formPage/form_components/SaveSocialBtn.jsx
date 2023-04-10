import React, { useState } from 'react';

import './form_components.scss'

import close from '../../../assets/images/save_contact/close.webp'
import add from '../../../assets/images/save_contact/add.webp'

import addressBook from '../../../assets/images/save_contact/addressBook.webp'
import whatsapp from '../../../assets/images/save_contact/whatsapp.webp'
import mail from '../../../assets/images/save_contact/mail.webp'
import telegram from '../../../assets/images/save_contact/telegram.webp'
import skype from '../../../assets/images/save_contact/skype.webp'
import link from '../../../assets/images/save_contact/link.webp'


import linkedin from '../../../assets/images/social_icons/linkedin.webp'
import instagram from '../../../assets/images/social_icons/instagram.webp'
import facebook from '../../../assets/images/social_icons/facebook.webp'
import tikTok from '../../../assets/images/social_icons/tikTok.webp'
import github from '../../../assets/images/social_icons/github.webp'
import soundcloud from '../../../assets/images/social_icons/soundcloud.webp'
import youtube from '../../../assets/images/social_icons/youtube.webp'
import spotify from '../../../assets/images/social_icons/spotify.webp'
import dribbble from '../../../assets/images/social_icons/dribbble.webp'
import pinterest from '../../../assets/images/social_icons/pinterest.webp'




function SaveSocialBtn() {
  const [selectedIcon, setSelectedIcon] = useState('linkedin');

  const [containerCount, setContainerCount] = useState(0);
  const [containers, setContainers] = useState([]);

  const [showMoreIcons, setShowMoreIcons] = useState(false);

  const handleAddClick = () => {
    if (containerCount < 5) {
      setContainerCount(containerCount + 1);
      setContainers([...containers, containerCount]);
    }else{
      alert("you are allowed to add up to 5 buttons")
    }
  };

  const handleCloseClick = (index) => {
    setContainers(containers.filter((_, i) => i !== index));
    setContainerCount(containerCount - 1);
  };

  //show more or show less icons
  const showMore = () => {
    setShowMoreIcons(true);
  };

  const showLess = () => {
    setShowMoreIcons(false);
  };

  return (
    <div className="SaveContact">
         {containers.map((_, index) =>  (<div className='SaveContact_container' key={index}>
          <div className='SaveContact_container_content'>
            <div className='content'>
              <h2>Select one option</h2>
              <h3>You can add more links with the + button below </h3>
            </div>
            <div className='close'>
              <img src={close} alt="close button" onClick={() => handleCloseClick(index)}/>
            </div>
          </div>
          <div className='contact_icons'>
            <a className={selectedIcon === 'linkedin' ? 'selected' : ''} onClick={() => setSelectedIcon('linkedin')}><img src={linkedin} alt="linkedin icon" /></a>
            <a className={selectedIcon === 'instagram' ? 'selected' : ''} onClick={() => setSelectedIcon('instagram')}><img src={instagram} alt="instagram icon" /></a>
            <a className={selectedIcon === 'facebook' ? 'selected' : ''} onClick={() => setSelectedIcon('facebook')}><img src={facebook} alt="facebook icon" /></a>
            
            <a className={selectedIcon === 'tikTok' ? 'selected' : ''} onClick={() => setSelectedIcon('tikTok')}><img src={tikTok} alt="tikTok icon" /></a>
            <a className={selectedIcon === 'github' ? 'selected' : ''} onClick={() => setSelectedIcon('github')}><img src={github} alt="github icon" /></a>
            <a className={selectedIcon === 'soundcloud' ? 'selected' : ''} onClick={() => setSelectedIcon('soundcloud')}><img src={soundcloud} alt="soundcloud icon" /></a>
            <a className={selectedIcon === 'youtube' ? 'selected' : ''} onClick={() => setSelectedIcon('youtube')}><img src={youtube} alt="youtube icon" /></a>
            <a className={selectedIcon === 'spotify' ? 'selected' : ''} onClick={() => setSelectedIcon('spotify')}><img src={spotify} alt="spotify icon" /></a>
            <a className={selectedIcon === 'dribbble' ? 'selected' : ''} onClick={() => setSelectedIcon('dribbble')}><img src={dribbble} alt="dribbble icon" /></a>
            <a className={selectedIcon === 'pinterest' ? 'selected' : ''} onClick={() => setSelectedIcon('pinterest')}><img src={pinterest} alt="pinterest icon" /></a>
            
          </div>
          <div className='openCloseBtn'>
          {!showMoreIcons &&<button onClick={showMore} className='openBtn'>open</button>}
                <button className='closeBtn'>close</button>
          </div>
          <div className='inputs'>
          {selectedIcon === 'linkedin' && (
              <>
                <input placeholder='https://www.linkedin.com/...' type="text" name="linkedin"/>
              </>
            )}
            {selectedIcon === 'instagram' && (
              <>
                <input placeholder='https://www.instagram.com/...' type="text" name="instagram"/>
              </>
            )}
             {selectedIcon === 'facebook' && (
              <>
                <input placeholder='https://www.facebook.com/...' type="text" name="facebook"/>
              </>
            )}
             {selectedIcon === 'tikTok' && (
              <>
                <input placeholder='https://www.tiktok.com/...' type="text" name="tikTok"/>
              </>
            )}
            {selectedIcon === 'github' && (
              <>
                <input placeholder='https://github.com/...' type="text" name="github"/>
              </>
            )}
             {selectedIcon === 'soundcloud' && (
              <>
                <input placeholder='https://soundcloud.com/...' type="text" name="soundcloud"/>
              </>
            )}
              {selectedIcon === 'youtube' && (
              <>
                <input placeholder='https://youtube.com/...' type="text" name="youtube"/>
              </>
            )}
              {selectedIcon === 'spotify' && (
              <>
                <input placeholder='https://open.spotify.com/...' type="text" name="spotify"/>
              </>
            )}
              {selectedIcon === 'dribbble' && (
              <>
                <input placeholder='https://dribbble.com/...' type="text" name="dribbble"/>
              </>
            )}
              {selectedIcon === 'pinterest' && (
              <>
                <input placeholder='https://www.pinterest.com/...' type="text" name="pinterest"/>
              </>
            )}
           
          </div>
          
        </div>))}
        <div className='add-wrapper'>
          <h4>Add another button:</h4>
          <img src={add} alt="add icon" onClick={handleAddClick }/>
        </div>
    </div>
  )
}

export default SaveSocialBtn
