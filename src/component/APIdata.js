import { useState, useEffect } from "react"

const APIdata = () => {
    const [StarWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(1)

    const addCourt = () => {
        setCount((count) => count + 1)
    }

        useEffect( () => {
            fetch(`https://swapi.dev/api/people/${count}`)
                .then(res => res.json())
                .then(data => setStarWarsData(data))
        }, [count])

    return(
        <div>
             <button onClick={addCourt}>Get Next</button>
            <pre>{JSON.stringify(StarWarsData, null, 2)}</pre>
                <button onClick={addCourt}>Get Next API Call</button>
        </div>
    )
}

export default APIdata