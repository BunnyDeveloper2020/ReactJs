import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ cart }, dispatch] = useStateValue();
  console.log(cart);
  const addToCart = () => {
    // Add item to cart...
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon className="product__star" />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="product img" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
