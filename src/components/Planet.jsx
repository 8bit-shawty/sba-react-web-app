import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Planet = () => {
    const {id} = useParams()

    const [name, setName] = useState('')
    const [population, setPopulation] = useState('')
    const [terrain, setTerrain] = useState('')
    const [diameter, setDiameter] = useState('')
    const [climate, setClimate] =useState('')

    const [err, setErr] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(({data}) => {
            setErr(false);
            console.log(data)
            const {name, population, terrain, diameter, climate} = data
            setName(name)
            setPopulation(population)
            setTerrain(terrain)
            setDiameter(diameter)
            setClimate(climate)
        })
        .catch(({message}) => {
            console.log(message)
            setErr(true)
        })
    }, [id])

    return (
        <>
            {
                err ? <p style={{color: 'red'}}>This planet is not in your quadrant...</p> 
                : <></>
            }
            <h2>Planet Name: {name}</h2>
            <p>Population: {population}</p>
            <p>Terrain Type: {terrain}</p>
            <p>Diameter: {diameter}</p>
            <p>Climate: {climate}</p>
        </>
    )
}

export default Planet