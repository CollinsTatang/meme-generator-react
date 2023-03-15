import { useEffect, useState } from "react"

const WindowTracker = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function watchWidth(){
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)

        return function(){
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return(
        
        <div>
           <p>Window width: {windowWidth}</p>
        </div>
    )
}

export default WindowTracker