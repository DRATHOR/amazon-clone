import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://m.media-amazon.com/images/I/71l9eDRj2iL._SX3000_.jpg"
                alt=""
                />
                <div className="home__row">
                        <Product 
                        title="Atomic Habits: The life-changing"
                        rating={5}
                        image={"https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY400_.jpg"}
                        price={29.99}
                        />
                        <Product
                        title="The Psychology of Money"
                        rating={5}
                        image={" https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_SY400_.jpg"}
                        price={29.99}
                        />
                       
                        {/* <Product/> */}
                        {/* product */}
                </div>

                <div className="home__row">
                <Product
                        title="(Renewed) Honor 2 BT Watch 2 with Battery- Charcoal Black (14-Days Battery Battery Life_Compatible with Android and iOS)"
                        rating={5}
                        image={" https://m.media-amazon.com/images/I/81Gmv-2eNqL._SL1500_.jpg"}
                        price={29.99}
                        /> 

                        <Product
                        title="Redmi 9 Activ (Carbon Black, 4GB RAM, 64GB Storage)"
                        rating={5}
                        image={"https://m.media-amazon.com/images/I/911TJ1CDbLL._AC_UL480_QL65_.jpg"}
                        price={29.99}
                        />
                        
                        <Product
                        title="OnePlus Bullets Bluetooth Wireless Z Bass Edition in Ear Earphones with Mic (Black)"
                        rating={5}
                        image={"https://m.media-amazon.com/images/I/51R4FJdgbMS._AC_UL480_QL65_.jpg"}
                        price={29.99}
                        />
                        {/* product */}
                        {/* product */}
                        {/* product */}
                </div>

                <div className="home__row">
                <Product
                        title="OnePlus Bullets Bluetooth Wireless Z Bass Edition in Ear Earphones with Mic (Black)"
                        rating={5}
                        image={"https://m.media-amazon.com/images/I/81N8UlFd0kL._AC_UL480_QL65_.jpg"}
                        price={29.99}
                        />
                        {/* product 
                       https://m.media-amazon.com/images/I/81N8UlFd0kL._AC_UL480_QL65_.jpg 
                        */}
                </div>


            </div>
        </div>
    )
}

export default Home
