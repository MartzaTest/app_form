import '../../shop_page/shop_page_features/shop_features.scss'

function WhyUsing_card(why_card) {
  

  return (
    <div className="WhyUsing_card">
        <div className='display'>
            <a href={why_card.link}><img src={why_card.img} alt={why_card.alt} /></a>
        </div>
        <p className='WhyUsing_card_title'>{why_card.title}</p>
        <p className='WhyUsing_card_content'>{why_card.content}</p>
    </div>
  )
}

export default WhyUsing_card