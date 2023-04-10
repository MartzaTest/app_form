

import React, { useEffect, useState } from 'react';
import './global_components_style/Header.scss'
import Logo from '../../src/assets/images/Logo_business_cards_malta_Blue.webp'
import Sendwitch from '../../src/assets/images/sendwitch.png'
import Close from '../../src/assets/images/close.png'




function Header() {
 


  const [isHidden, setIsHidden] = useState(false);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  useEffect(() => {
    let lastScrollPosition = 0;

    const handleScroll = debounce(() => {
      const currentScrollPosition = window.pageYOffset;
      setIsHidden(currentScrollPosition > lastScrollPosition && currentScrollPosition > 0);
      lastScrollPosition = currentScrollPosition;
    }, 100);
    window.addEventListener('scroll', handleScroll);

return () => {
  window.removeEventListener('scroll', handleScroll);
};
}, []);


//drop down menu
const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`Header ${isHidden ? 'hidden-header' : ''}`}>
        <div className='deskTop_menu'>
            <a><img src={Logo} alt="businesscardsmalta Logo" /></a>
            <menu>
              <ul>
                <a><li>Home</li></a>
                <a><li>Features</li></a>
                <a><li>How It Works?</li></a>
                <a><li>For Teams</li></a>
              </ul>
            </menu>
            <button>
            <svg className='svg' width="200" height="100" viewBox="0 0 512 344" xmlns="http://www.w3.org/2000/svg">
<path d="M478.144 0H33.856C15.188 0 0 15.188 0 33.855V310.143C0 328.812 15.188 344 33.856 344H478.144C496.812 344 512 328.812 512 310.144V33.855C512 15.188 496.812 0 478.144 0ZM496 310.144C496 319.99 487.99 328 478.144 328H33.856C24.01 328 16 319.989 16 310.144V33.855C16 24.01 24.01 16 33.856 16H478.144C487.99 16 496 24.01 496 33.855V310.144ZM232.665 73.75H52.165C47.747 73.75 44.165 77.332 44.165 81.75V262.25C44.165 266.668 47.747 270.25 52.165 270.25H232.665C237.083 270.25 240.665 266.668 240.665 262.25V81.75C240.665 77.332 237.083 73.75 232.665 73.75ZM184.218 254.25H100.613V243.081C100.613 220.031 119.365 201.279 142.415 201.279C165.465 201.279 184.218 220.031 184.218 243.081V254.25ZM224.665 254.25H200.218V243.081C200.218 211.209 174.287 185.279 142.415 185.279C110.543 185.279 84.613 211.209 84.613 243.081V254.25H60.166V89.75H224.666V254.25H224.665ZM142.416 178.182C161.684 178.182 177.36 162.506 177.36 143.238C177.36 123.97 161.684 108.295 142.416 108.295C123.148 108.295 107.472 123.971 107.472 143.238C107.472 162.506 123.147 178.182 142.416 178.182ZM142.416 124.294C152.862 124.294 161.36 132.792 161.36 143.237C161.36 153.683 152.862 162.181 142.416 162.181C131.97 162.181 123.472 153.683 123.472 143.237C123.472 132.792 131.97 124.294 142.416 124.294ZM309.709 144.14C309.709 148.558 306.127 152.14 301.709 152.14H272.461C268.043 152.14 264.461 148.558 264.461 144.14C264.461 139.722 268.043 136.14 272.461 136.14H301.709C306.127 136.14 309.709 139.722 309.709 144.14ZM467.835 144.14C467.835 148.558 464.253 152.14 459.835 152.14H330.714C326.296 152.14 322.714 148.558 322.714 144.14C322.714 139.722 326.296 136.14 330.714 136.14H459.835C464.253 136.14 467.835 139.722 467.835 144.14ZM309.709 245.077C309.709 249.495 306.127 253.077 301.709 253.077H272.461C268.043 253.077 264.461 249.495 264.461 245.077C264.461 240.659 268.043 237.077 272.461 237.077H301.709C306.127 237.077 309.709 240.659 309.709 245.077ZM467.835 245.077C467.835 249.495 464.253 253.077 459.835 253.077H330.714C326.296 253.077 322.714 249.495 322.714 245.077C322.714 240.659 326.296 237.077 330.714 237.077H459.835C464.253 237.077 467.835 240.659 467.835 245.077ZM467.835 194.608C467.835 199.026 464.253 202.608 459.835 202.608H330.714C326.296 202.608 322.714 199.026 322.714 194.608C322.714 190.19 326.296 186.608 330.714 186.608H459.835C464.253 186.608 467.835 190.19 467.835 194.608ZM309.709 194.608C309.709 199.026 306.127 202.608 301.709 202.608H272.461C268.043 202.608 264.461 199.026 264.461 194.608C264.461 190.19 268.043 186.608 272.461 186.608H301.709C306.127 186.608 309.709 190.19 309.709 194.608ZM467.835 93.67C467.835 98.088 464.253 101.67 459.835 101.67H330.714C326.296 101.67 322.714 98.088 322.714 93.67C322.714 89.252 326.296 85.67 330.714 85.67H459.835C464.253 85.67 467.835 89.252 467.835 93.67ZM309.709 93.67C309.709 98.088 306.127 101.67 301.709 101.67H272.461C268.043 101.67 264.461 98.088 264.461 93.67C264.461 89.252 268.043 85.67 272.461 85.67H301.709C306.127 85.67 309.709 89.252 309.709 93.67Z" fill="white"/>
</svg>
        CREATE YOUR CARD
    </button>
        </div>
        <div className='Mobile_menu'>
            <a src="#"><img src={Logo} alt="businesscardsmalta Logo" /></a>
            
            { !isMenuOpen && (
          <img className='open' src={Sendwitch} alt="sendwitch button" onClick={handleOpenMenu} />
        )}
        { isMenuOpen && (
          <img className='close' src={Close} alt="close button" onClick={handleCloseMenu} />
        )}
        </div>
        { isMenuOpen && (
        <div className={`dropDown ${isMenuOpen ? 'show' : 'hide'}`}>
          <menu>
            <ul>
              <a><li>Home</li></a>
              <a><li>Features</li></a>
              <a><li>How It Works?</li></a>
              <a><li>For Teams</li></a>
              <a><li>Create Your Card</li></a>
            </ul>
          </menu>
        </div>
      )}
    </div>
  )
}

export default Header
