import React, { useState } from 'react';
import './form_components.scss'
import close from '../../../assets/images/save_contact/close.webp'
import addressBook from '../../../assets/images/save_contact/addressBook.webp'
import whatsapp from '../../../assets/images/save_contact/whatsapp.webp'
import mail from '../../../assets/images/save_contact/mail.webp'
import telegram from '../../../assets/images/save_contact/telegram.webp'
import skype from '../../../assets/images/save_contact/skype.webp'
import link from '../../../assets/images/save_contact/link.webp'
import add from '../../../assets/images/save_contact/add.webp'

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import 'react-phone-number-input/style.css'

function SaveContact() {
  const [selectedIcon, setSelectedIcon] = useState('addressBook');
  const [value, setValue] = useState();

  const [containerCount, setContainerCount] = useState(0);
  const [containers, setContainers] = useState([]);

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
            <a className={selectedIcon === 'addressBook' ? 'selected' : ''} onClick={() => setSelectedIcon('addressBook')}><img src={addressBook} alt="adress book icon" /></a>
            <a className={selectedIcon === 'whatsapp' ? 'selected' : ''} onClick={() => setSelectedIcon('whatsapp')}><img src={whatsapp} alt="whatsApp icon" /></a>
            <a className={selectedIcon === 'mail' ? 'selected' : ''} onClick={() => setSelectedIcon('mail')}><img src={mail} alt="mail icon" /></a>
            <a className={selectedIcon === 'telegram' ? 'selected' : ''} onClick={() => setSelectedIcon('telegram')}><img src={telegram} alt="telegram icon" /></a>
            <a className={selectedIcon === 'skype' ? 'selected' : ''} onClick={() => setSelectedIcon('skype')}><img src={skype} alt="skype icon" /></a>
            <a className={selectedIcon === 'link' ? 'selected' : ''} onClick={() => setSelectedIcon('link')}><img src={link} alt="link icon" /></a>
          </div>
          <div className='inputs'>
          {selectedIcon === 'addressBook' && (
              <>
                <input placeholder='Phone name' type="text" name="phoneName"/>
                <PhoneInput name="phoneNumber" placeholder="Enter phone number" defaultCountry="MT" value={value}  onChange={setValue}/>
              </>
            )}
            {selectedIcon === 'whatsapp' && (
              <>
                <input placeholder='whatsApp name' type="text" name="whatsAppName"/>
                <PhoneInput name="whatsAppNumber" placeholder="Enter whatsApp number" defaultCountry="MT" value={value}  onChange={setValue}/>
              </>
            )}
             {selectedIcon === 'mail' && (
              <>
                <input placeholder='mail name' type="text" name="whatsAppName"/>
                <input placeholder='E-mail' type="number" name="Email"/>
              </>
            )}
             {selectedIcon === 'telegram' && (
              <>
                <input placeholder='telegram name' type="text" name="whatsAppName"/>
                <PhoneInput name="telegramNumber" placeholder="Enter telegram number" defaultCountry="MT" value={value}  onChange={setValue}/>
              </>
            )}
            {selectedIcon === 'skype' && (
              <>
                <input placeholder='skype name' type="text" name="whatsAppName"/>
                <input placeholder='skype ID' type="text" name="skypeID"/>
              </>
            )}
             {selectedIcon === 'link' && (
              <>
                <input placeholder='link name' type="text" name="whatsAppName"/>
                <input placeholder='www.example.com' type="text" name="link"/>
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

export default SaveContact
