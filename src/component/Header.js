import "./css/Header.css"
const Header = () => {

    return(
        <header className="header">
           <img src="./images/logo.png" alt="Not logo" className="header--logo"/>
           <h2 className="header--title">Meme Generator</h2>
           <h4 className="header--project">React Project</h4>
        </header>
    )
}

export default Header;