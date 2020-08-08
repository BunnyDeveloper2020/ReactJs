import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import ad from "./ad.JPG";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={ad} alt="add img" />
        {cart?.length === 0 ? (
          <div>
            <h2>Your Shoping Cart is empty</h2>
            <p>
              You have items saved to buy later. To buy one or more now, click
              "Move to cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shoping Cart</h2>

            {/* List out all of the Checkout Product */}
            {cart?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
