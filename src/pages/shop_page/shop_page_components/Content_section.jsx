import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import '../../shop_page/shop_page_components/Shop_components.scss';
import DisplayImg from '../../../assets/images/environmental-conservation-garden-children.webp';
import SupportImg from '../../../assets/images/eco-greenbusiness-cards-malta--q3vp6imrdw5d7n802rkbsgymyz92fcvxn35zjaj0z6.webp';

function Content_section() {
  const [fadeIn, setFadeIn] = useState(false);

  const handleInViewChange = (inView, entry) => {
    if (inView) {
      setFadeIn(true);
    }
  };

  return (
    <div className="Content_section">
      <div className="Content_section__">
        <h2>Environment & Sustainability</h2>
        <p>
          Traditional business cards are outdated and harmful to the environment.<br />
          <a>BusinessCards Malta</a> enables a business to re-use and update the same car over and over again! Reducing the reliance on single-use paper cards.<br />
          Even our minimal packaging materials are recyclable or made from recycled materials.
        </p>
        <div className='Content_section__Img'>
          <img className='DisplayImg' src={DisplayImg} alt="" />
          <InView onChange={handleInViewChange} threshold={0.5}>
            <img
              className={`SupportImg ${fadeIn ? 'fadeInLeftAnimation' : ''}`}
              src={SupportImg}
              alt=""
            />
          </InView>
        </div>
      </div>
    </div>
  );
}

export default Content_section;


 