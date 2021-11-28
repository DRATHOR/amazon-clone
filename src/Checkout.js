import React from 'react'
import './Checkout.css'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                className="checkout__ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/Jupiter21/Phase4/Streamer_Strarter_Pack_Amazon_Banner-1500x300.jpg"
                alt=""
                />

                <h2 className="checkout__title">
                    Your shopping Basket</h2>

            </div>

            <div className="checkout__right">
                <h2>The subtotal will be here</h2>
            </div>
            
        </div>
    )
}

export default Checkout
