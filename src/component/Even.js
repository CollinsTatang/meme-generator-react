import { useState } from "react"

const Event = () => {

    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

    const addItem = () => setThingsArray(
        prevthingsArray => {
            return [...prevthingsArray, `Thing ${prevthingsArray.length + 1}`]
        } 
       
    )

    
    const getArrayThings = thingsArray.map(item => <p key={item}> {item} </p> )
    return(
        <div>
            <img src="./images/logo.png" alt="Not logo" />
            <button onClick={addItem}>Add item</button>
            {getArrayThings}
        </div>
    )
}
export default Event;