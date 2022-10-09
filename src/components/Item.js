import React, { useState } from "react";

function Item({ name, category }) {
  // console.log(`Item name: ${name}`)
  // console.log(`Item category: ${category}`)
  const [inCart, setInCart] = useState(false);
  // console.log(inCart)
  function handleClick() {
    setInCart(!inCart);
  }
  
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={!inCart ? "add" : "remove"}>
        {!inCart ? "Add to Cart" : "Remove from cart"}
      </button>
    </li>
  );
}

export default Item;
