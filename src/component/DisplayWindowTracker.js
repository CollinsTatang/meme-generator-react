import { useState } from "react"
import WindowTracker from "./WindowTracker"

const DisplayWindowTracker = () => {

    const [show, setShow] = useState(true)

    function troggle(){
        setShow(prevShow => !prevShow)
    }
    return(
        <div>
            <button onClick={troggle}>
                Toggle Windows Tracker.
            </button>
            {show && <WindowTracker />}
        </div>
        
    )
}

export default DisplayWindowTracker