import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // console.log(items)
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleFilterChange(e) {
    // console.log(e.target.value)
    if (selectedCategory !== e.target.value) {
      return setSelectedCategory(e.target.value);
    }
  }
  function filterCategory(filterValue, items) {
    let filtered = [];
    for (let item of items) {
      if(filterValue === 'All'){
        return items
      } else if (item.category === filterValue) {
        filtered.push(item);
      }
    }
    return filtered
  }
  items = filterCategory(selectedCategory, items)
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
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
