import React, { useState } from "react";
import "./css/Meme.css";
import memesData from "./memesData.js";


const Meme= () => {
    
    const [meme, setMeme] = useState({
        topText: " ",
        bottomText: " ",
        randomImage: "./images/note.jpg"
    })

    const [allMemeImages] = useState(memesData)
      
//Get a Random image in every new state instance
const getMemeImage = () => {
     const memeArray = allMemeImages.data.memes
     const randomNumber = Math.floor(Math.random() * memeArray.length)
     const url = memeArray[randomNumber].url

     setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
     })) 
}

    return(
        <main>
            <img src={meme.randomImage} alt="No Meme Avialable" width="400" height="250" className="meme--image" />
            <div className="form">
                <input type="text" placeholder="Shut up" className="form--inputs" />
                <input type="text" placeholder="and take my money" className="form--inputs"/>
                <button onClick={getMemeImage} className="form--btn">Get a new meme image  🖼</button>
            </div>   
        </main>
    )
}

export default Meme;