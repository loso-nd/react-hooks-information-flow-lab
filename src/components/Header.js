import React from "react"

function Header({isDarkMode, onDarkModeClick}){

    // function handleClick = () => onDarkModeClick() 
    //  or I can invoke the function passed in from the parent directly to the onClick

    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header;