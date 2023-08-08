import React, { useState } from "react";

function Item({ name, category }) {
const [isItem, setIsItem] = useState(true)
console.log(isItem)
function handleCart(){
  setIsItem(!true)
}

  return (
    <li className={isItem ? '' : 'in-cart'}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isItem ? 'add' : 'remove'} onClick={handleCart}>{isItem ? 'Add to Cart' : 'Remove From Cart'}</button>
    </li>
  );
}

export default Item;
