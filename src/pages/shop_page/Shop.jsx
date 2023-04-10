import '../pages_style/Shop.scss'
import Content_section from './shop_page_components/Content_section'
import WhyUsing_section from './shop_page_components/WhyUsing_section'
import FAQ_section from './shop_page_components/Faq_section'
import Footer from '../../global_components/Footer'
import Header from '../../global_components/Header'
import Form from './shop_page_components/Form'

import React, { useState } from 'react';

function Shop() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className="Shop">
      <Header />
      {!showForm && <div className='Shop_button_wrapper'><button onClick={handleButtonClick}>Click here</button></div> }
      {showForm && <Form />}
      <Content_section />
      <WhyUsing_section />
      <FAQ_section />
      <Footer />
    </div>
  )
}

export default Shop
