import '../../shop_page/shop_page_components/Shop_components.scss'
import WhyUsing_card from '../shop_page_features/WhyUsing_card'

import smile from '../../../assets/images/whyUsing_section/Smile.png'
import phone from '../../../assets/images/whyUsing_section/Phone.png'
import heand from '../../../assets/images/whyUsing_section/Heand.png'
import globe from '../../../assets/images/whyUsing_section/Globe.png'

function WhyUsing_section() {
 
  const title = {
    first: 'EASY TO USE',
    second: 'NO APP NEEDED',
    third: 'FULLY CUSTOM',
    fourth: 'ECO 100%'
  }
  const content = {
    first: 'Simply tap phones to share details',
    second: 'Immediate access using a simple URL',
    third: 'Build using your picture, logo and links',
    fourth: 'Re-use and share without limit'
  }

  return (
    <div className="WhyUsing_section">
        <h2>Why Using Our Digital Card Will Change The Way You Connect.</h2>
        <div className='WhyUsing_AllCards'>
          <WhyUsing_card link="#" img={smile} title={title.first} content={content.first}/>
          <WhyUsing_card link="#" img={phone} title={title.second} content={content.second}/>
          <WhyUsing_card link="#" img={heand} title={title.third} content={content.third}/>
          <WhyUsing_card link="#" img={globe} title={title.fourth} content={content.fourth}/>
        </div>
    </div>
  )
}

export default WhyUsing_section
