import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState(items)
  const tree = useState(false) 

  console.log("Tree", tree)

  console.log("Origional Item:", items)
  const handleCategoryChange = (event) => {
    const filteredItems = items.filter(item => {
      console.log(`${item.category} === ${event.target.value}`)
      return item.category === event.target.value})
    console.log("Filtered Items" , filteredItems)
    setSelectedCategory(filteredItems)
    console.log("Selected Category STATE", selectedCategory)
  }
  console.log("Selected Category STATE", selectedCategory)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
