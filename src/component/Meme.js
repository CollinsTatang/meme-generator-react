import "./css/Meme.css";

const Meme= () => {
    return(
        <main>
            <form className="form">
                <input type="text" placeholder="Shut up" className="form--inputs" />
                <input type="text" placeholder="and take my money" className="form--inputs"/>
                <button className="form--btn">Get a new meme image  🖼</button>
            </form>   
        </main>
    )
}

export default Meme;