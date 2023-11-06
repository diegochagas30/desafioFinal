import React, { useState } from "react";
import './Item.css'


function Item(props){
    const [visible, setVisible]= useState(true)

    return(
        <>
            <div id="item-container">
                <div id="number">{props.number}</div>
                <div id="title">
                    <div id="music-name">{props.musicName}</div>
                    <div id="author">{props.author}</div>
                </div>
                <div id="album">{props.album}</div>
                <div id="icons">
                    <span class="material-symbols-outlined" id='favorite'>favorite</span>
                    <span class="material-icons" id='delete' >delete</span>
                </div>
            </div>
        </>
    )
} 

export default Item 