import  { useQuery } from "@tanstack/react-query"
import {useState} from "react"
import axios from "axios"
import React from "react"

import "./Pages.css"
//import "../components/ComponentsExamples.css"

export default function Oppg1(){

    const {data, refetch, error} = useQuery({
        queryKey:["cats"],
        queryFn:() => getCatFact(), //bruker arrow function for å sende parameteret
        staleTime: Infinity,
    })

    const [faktaCounter, setFaktaCounter] = useState<number>(1)

    if (error) {
        alert("Noe gikk galt, prøv igjen senere")
    }

    const nyFakta = () => {
        refetch()
        setFaktaCounter(faktaCounter + 1) // er en bug med funksjonen
    }
    
    return(
        <div>
            <p>Fakta Counter: {faktaCounter}</p>
            <p>{data?.data}</p>
            <button onClick={nyFakta}>Ny kattefakta!</button>
        </div>
    )
}

const getCatFact = async () => {
    const response = await axios.get("https://meowfacts.herokuapp.com/")
    return await response.data
}