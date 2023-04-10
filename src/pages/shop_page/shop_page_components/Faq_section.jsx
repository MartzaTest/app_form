import '../../shop_page/shop_page_components/Shop_components.scss'
import FAQ_Card from '../shop_page_features/FAQ_card'
import data from "../../../assets/API/FAQ_API.json";


function FAQ_section() {
 
 

  return (
    <div className="FAQ_section">
        
        <div className='FAQ_section_display'>
        <div className='FAQ_section_Title'>
                <h2>FAQs</h2>
                <p>Frequently Asked Questions</p>
        </div>
            <div className='FAQ_section_display__'>
                
            {data.map((item) => (
<FAQ_Card key={item.id} title={item.title} content={item.content} />
))}
                
                
            </div>
        </div>
    </div>
  )
}

export default FAQ_section
