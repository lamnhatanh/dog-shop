import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../Contexts/CartContext'
import "./cart.css"

function Cart() {
    const {myCart, total, addToCart, setTotal} = useContext(CartContext)
    const navigate = useNavigate();
    const handleCheckout = () => {
        setTotal(0);
        addToCart([{}]);
    }

    const handleHome = () => {
        navigate('/')
    }
    return (
    <section className="cart-container">
        <div className="cart-header">
            Checkout: 
        </div>
        <div className="cart-items">
            {myCart.slice(1).map((item) => {
                return (
                    <div className="cart-item">
                        <img src={item.imageUrl} alt='error' className='cart-item-img'/>
                        {item.name} : {item.price}$
                    </div>
                )
            })}
            <div className="cart-total">Total: {total}$</div>
        </div>
        <button className="cart-checkout" onClick={handleCheckout}> DONE </button>
        <button className="cart-gohome" onClick={handleHome}> RETURN HOME </button>
    </section>
  )
}

export default Cart