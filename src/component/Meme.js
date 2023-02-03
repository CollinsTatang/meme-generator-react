import React, { useState } from "react";
import "./css/Meme.css";
import memesData from "./memesData.js";


const Meme= () => {
    
    const [memeImage, setMemeImage] = useState()
    
const getMemeImage = () => {
     const memeArray = memesData.data.memes
     const randomNumber = Math.floor(Math.random() * memeArray.length)
     setMemeImage(memeArray[randomNumber].url) 
}

    return(
        <main>
            <img src={memeImage} alt="No Meme Avialable"/>
            <div className="form">
                <input type="text" placeholder="Shut up" className="form--inputs" />
                <input type="text" placeholder="and take my money" className="form--inputs"/>
                <button onClick={getMemeImage} className="form--btn">Get a new meme image  🖼</button>
            </div>   
        </main>
    )
}

export default Meme;