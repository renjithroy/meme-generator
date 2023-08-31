import React from "react"
import trollFace from "../images/troll-face.png";

export default function Header() {

    const handleHeaderClick = () => {
        window.location.reload();
    }

    return (
        <header className="header" onClick={handleHeaderClick} style={{cursor: "pointer"}}>
            <img 
                src={trollFace} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}