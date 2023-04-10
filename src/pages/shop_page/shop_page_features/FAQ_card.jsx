import '../../shop_page/shop_page_features/shop_features.scss'
import React, { useState } from "react";


function FAQ_Card(faq) {
const [showContent, setShowContent] = useState(false);

    const handleClick = () => {
      setShowContent(!showContent);
    };

  return (
    <div className="FAQ_Card">
       <div className="title" onClick={handleClick}>
       <h4 className={showContent ? "active" : "unActive"}>{faq.title}</h4>
        <span className={showContent ? "arrow up" : "arrow down"}></span>
        
      </div>
      
      <p className={showContent ? "show-content" : ""}>
        {faq.content}
      </p>
      <hr className='hr' />
    </div>
  )
}

export default FAQ_Card