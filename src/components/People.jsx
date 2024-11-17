import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

const People = () => {

    const {id} = useParams();

    const [personName, setPersonName] = useState("")
    const [height, setHeight] = useState("")
    const [mass, setMass] = useState("")
    const [eyes, setEyes] = useState("")

    const [err, setErr] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(({data}) => {
            setErr(false);
            // console.log(data);
            const {name, mass, height, eye_color} = data;
            setPersonName(name);
            setMass(mass);
            setHeight(height);
            setEyes(eye_color);
        })
        .catch(({message}) => {
            console.log(message);
            setErr(true);
        })
    }, [id])

    return (
        // <p>This is people and you passed the id of {id}</p>
        <div>
            {
                err ? <p style={{color: 'red'}}>These arent the droids you're looking for</p> 
                : <></>
            }
            <h2>Name: {personName}</h2>
            <p>id: {id}</p>
            <p>Mass: {mass}</p>
            <p>Height: {height}</p>
            <p>Eyes: {eyes}</p>

        </div>
    )
}

export default People