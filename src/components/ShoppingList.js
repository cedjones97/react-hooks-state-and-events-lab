import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState('All')
  //console.log(items)
   //selectedCategory.filter(selected => selected.category == category)
  function handleFilterChange(event) {
    setSelectedCategory(event.target.value)
  } 
  const newSelect = items.filter((selected) =>
    { if ( selectedCategory == "All") return true
    
      return selected.category === selectedCategory
  })
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newSelect.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
