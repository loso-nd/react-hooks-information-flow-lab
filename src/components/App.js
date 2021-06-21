import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header  from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    console.log("Theme Setting Changed.")
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode}/>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
