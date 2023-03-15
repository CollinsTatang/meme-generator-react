import { useEffect, useState } from "react"

const WindowTracker = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(prevWindowWidth => !prevWindowWidth)
        } )
    }, [windowWidth])

    return(
        
        <div>
           <p>Window width: {windowWidth && window.innerWidth}</p>
        </div>
    )
}

export default WindowTracker