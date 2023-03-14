import { useState, useEffect } from "react"

const APIdata = () => {
    const [StarWarsData, setStarWarsData] = useState({})

        useEffect( () => {
            fetch("https://swapi.dev/api/people/1")
                .then(res => res.json())
                .then(data => setStarWarsData(data))
        }, [])

    return(
        <div>
            <pre>{JSON.stringify(StarWarsData, null, 2)}</pre>
        </div>
    )
}

export default APIdata