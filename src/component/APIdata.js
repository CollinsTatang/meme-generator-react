import { useState } from "react"

const APIdata = () => {
    const [StarWarsData, setStarWarsData] = useState({})
    fetch("https://swapi.dev/api/people/")
        .then(res => res.json())
        .then(data => setStarWarsData(data))

    return(
        <div>
            <pre>{JSON.stringify(StarWarsData, null, 2)}</pre>
        </div>
    )
}

export default APIdata