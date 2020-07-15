import React from "react"


const Header = () => {
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2em",
    };
    return (
        <header>
            <h1 style={headerStyle}>Simple Todo App</h1>
            <p style={{ fontSize: "19px" }}>
                Please add to-dos item(s) through the input field
            </p>
        </header>
    )
}

export default Header