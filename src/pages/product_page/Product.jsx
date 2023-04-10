import './Product.scss'
import FAQ_section from '../shop_page/shop_page_components/Faq_section'

import correct from '../../assets/images/correct.png'
import card from '../../assets/images/Bamboo200.png'
import close from '../../assets/images/close_small.png'

function Product() {
  

  return (
    <div className="Product">
        <div className='Product_info'>
            <h1>Review Your order</h1>
            <div className='info'>
                <img src={correct} alt="correct icon" />
                <p>“Black Bamboo - Business Card Malta” removed. <a href='#'>Undo?</a></p>
            </div>
        </div>
        <div className='Product_content'>
            <div className='Product_content_left'>
                <div className='Product_card_one'>
                    <div className='title'>
                        <p className='Product_title_main'>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                    <div className='content'>
                        <div className='content__'>
                            <img className='x' src={close} alt="" />
                            <img src={card} alt="card image" />
                            <div className='subcontent'>
                                <a href="#">Black Bamboo - Business Card Malta</a>
                                <p>Full Name: Jhon</p>
                            </div>
                        </div>
                        <p className='p'>€29.95</p>
                        <p className='p'>counter</p>
                        <p className='p'>€29.95</p>
                    </div>
                    <div className='under_content'>
                        <p>Update Card</p>
                    </div>
                    
                </div>
                <div className='Product_card_two'>
                    <div className='cupon'>
                        <input type="text" name="cupon"  placeholder='Coupon code'/>
                        <button>Apply coupon</button>
                    </div>
                </div>
            </div>
            <div className='Product_content_right'>
                <div className='Product_card_three'>
                        <p>Cart Totals</p>
                        <div className='subtotal'>
                            <p>Subtotal</p>
                            <p>€29.95</p>
                        </div>
                        <p>Shipping</p>
                        <p>    Free shipping
                            Shipping to <br/> ert, 45, ert, XLN1104. </p>
                            <p><a href="#">Change address</a></p>
                        <div className='total'>
                            <p>Total</p>
                            <p>€29.95</p>
                        </div>
                        <p className='center'>-OR-</p>
                        <button>Proceed to Checkout</button>
                    
                    <div className='Product_card_three_right'></div>
                </div>
        </div>
            
        </div>
            <FAQ_section />
    </div>
  )
}

export default Product
