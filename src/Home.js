import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_1x._CB419795291_.jpg"
          alt="banner"
          className="home__image"
        />
        <div className="home__row">
          <Product
            key={1}
            id={1}
            title="Xbox Wireless Controller - Black"
            image="https://images-na.ssl-images-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg"
            price={44.9}
            rating={3}
          />
          <Product
            key={2}
            id={2}
            title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
            image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SX679_.jpg"
            price={274.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            key={3}
            id={3}
            title="AmazonBasics Hardside Spinner, Carry-On, Expandable Suitcase Luggage with Wheels, 21 Inch, Black"
            image="https://images-na.ssl-images-amazon.com/images/I/71s7HbyqzEL._AC_SY879_.jpg"
            price={57.19}
            rating={4}
          />
          <Product
            key={4}
            id={4}
            title="Apple iPhone 11 Pro Max (64GB, Midnight Green) [Locked] + Carrier Subscription"
            image="https://m.media-amazon.com/images/I/81j2j9x-KWL.jpg"
            price={1000}
            rating={4}
          />
          <Product
            key={5}
            id={7}
            title="Acer Nitro 5 Gaming Laptop, NVIDIA GeForce RTX 2060, 15.6' Full HD 144Hz Display, 16GB DDR4, 256GB NVMe SSD"
            image="https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SX679_.jpg"
            price={630.54}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            key={6}
            id={5}
            title="Sceptre 30-Inch 21: 9 Curved Creative Monitor C305W-2560UN 2560x1080p Ultra Wide Ultra Slim HDMI DisplayPort Up to 85Hz Mprt 1ms FPS-RTS Build-in Speakers, Machine Black 2020"
            image="https://images-na.ssl-images-amazon.com/images/I/81uNJ%2B-LyJL._AC_SX679_.jpg"
            price={228.87}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
