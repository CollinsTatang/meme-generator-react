import { useState } from "react"
import Count from "./Count"

const Event = () => {

    const [count, setCount] = useState(0)

    const addCourt = () => {
        setCount((count) => count + 1)
    }
    
    return (
        <div>
            <button onClick={addCourt}>+</button>
            <Count number={count} />
        </div>
    )
}
export default Event;