import { useState } from "react"

const Event = () => {
    let [count, setCount] = useState(0)

    const thingsArray = ["Thing 1", "Thing 2"]
    

    const addItem = () => {
        const newThings = `Thing ${thingsArray.lenght = 1}`
        thingsArray.push(newThings)
        console.log(thingsArray)
    }

    const addCount = () => {
        setCount(preCount => {return preCount + 1})
       
    }
    const substractCount = () => {
        setCount(preCount => {return preCount - 1})
       
    }

    const handleClick = () => {

    }

    const getArrayThings = thingsArray.map((item) => <p key={item}>{item}</p> )
    return(
        <div>
            <img src="./images/logo.png" alt="Not logo" />
            <button onClick={addItem}>Add item</button>
            <button onClick={handleClick}>Add item</button>
            {getArrayThings}
            <button onClick={addCount}>+</button>
            <p>{count}</p>
            <button onClick={substractCount}>-</button>
        </div>
    )
}
export default Event;