import React from "react";
import './Header.css'

function Header(){

    return(
        <>
            <div id="header-container">
                <img src="./images/headerImage.png" alt="Header Image" />
                <div id="texts-container">
                    <p>Playlist</p>
                    <h1>Daily Mix 1</h1>
                    <p>Red Hot Chili Peppers, Coldplay e mais</p>
                    <p>Spotify - 50 músicas <span id="time">1h 7min</span> </p>
                </div>
            </div>
        </>
    )
}

export default Header




