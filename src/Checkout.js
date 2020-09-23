import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://m.media-amazon.com/images/G/01/shazam/US-GC-EN-Birthday-House-Ads-980x55--CB444703821--hf8Uf._V445557662_.jpg"
          className="checkout__ad"
          alt="ad"
        />
        <div>
          <h3>Hello,{user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
        {basket.map((item, i) => (
          <CheckoutProduct
            key={i}
            id={item.id}
            price={item.price}
            rating={item.rating}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
