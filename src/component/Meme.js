import React, { useState } from "react";
import "./css/Meme.css";
import memesData from "./memesData.js";


const Meme= () => {
    
    const [meme, setMeme] = useState({
        topText: " ",
        bottomText: " ",
        randomImage: "./images/note.jpg"
    })

    function handleSubmit(event) {
        event.preventDefault();
        console.log(meme)

    }

    function handleChange(event){
        const {name, value} = event.target
         setMeme(prevMeme => {
             return {
                 ...prevMeme,
                 [name]: value
             }
         })
     }

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
            <h2>{meme.topText}</h2>
            <h2>{meme.bottomText}</h2>
            <form onSubmit={handleSubmit} className="form">
                <input 
                type="text"
                name="topText"
                value={meme.topText}
                placeholder="Shut up" 
                className="form--inputs"
                onChange={handleChange}
                 />
                <input 
                type="text"
                name="bottomText"
                value={meme.bottomText}
                placeholder="and take my money" 
                className="form--inputs"
                onChange={handleChange}
                />
                <button onClick={getMemeImage} className="form--btn">Get a new meme image  🖼</button>
            </form> 
              
        </main>
    )
}

export default Meme;