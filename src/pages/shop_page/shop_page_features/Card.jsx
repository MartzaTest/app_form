import '../../shop_page/shop_page_features/shop_features.scss'
import Cart from '../../../assets/images/cart.png'

function Card(card) {

  return (
    <div className="Card">
      <div className='Card_img'>
            <img onClick={card.click} src={card.img} alt="product image" />
            <img className='cart' src={Cart} alt="product image" />
      </div>
            <h3>{card.title}</h3>
            <p>€{card.price}</p>
            <button onClick={card.click}>Select Options</button>
    </div>
  )
}

export default Card