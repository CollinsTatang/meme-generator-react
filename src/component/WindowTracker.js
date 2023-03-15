import { useEffect, useState } from "react"

const WindowTracker = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
        } )
    }, [])

    return(
        
        <div>
           <p>Window width: {windowWidth}</p>
        </div>
    )
}

export default WindowTracker