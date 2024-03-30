import './Cart.css'
import {AiOutlineShoppingCart } from "react-icons/ai";
import Button from '../Button/Button'
import { useState } from 'react';
import CartCard from '../CartCard/CartCard';

const Cart = ({cartText}) => {

    const [cart,setCart] = useState(false)

    const removeCart = () => {
        setCart(false)
    }
    const addCart = () => {
        setCart(true)
    }

  return (
    <div className='cart'>
        <Button funcClick={addCart} className={'cart-btn'} btnType={'ghost'}><AiOutlineShoppingCart/> <span>{cartText && cartText}</span></Button>

        <div className={`cart-wrapper ${!cart ? 'hideCart' : '' }`}>
            <div className="cart-viewer">
                <header>
                    <h2>Shipping Bag</h2>
                    <Button funcClick={removeCart} className={'cart-btn'} btnType={'ghost'}>x</Button>
                </header>
                <main>
                    <small>5 items</small>
                    <div>
                    <CartCard/>
                    <CartCard/>
                    <CartCard/>
                    <CartCard/>
                    </div>
                </main>
                <footer>
                    <div className="total">
                        <span>Subtotal(5 items)</span>
                        <span>$100.00</span>
                    </div>
                    <Button className={'viewCart'} btnType={'ghostBlack'}>View Cart</Button>
                </footer>
            </div>
        </div>
    </div>
  )
}

export default Cart