import  { useQuery } from "@tanstack/react-query"
import {useState} from "react"
import axios from "axios"
import React from "react"

import "./pages.css"
//import "../components/ComponentsExamples.css"

export default function Oppg1(){

    /*
    Det som er spesielt med React, er 
    */

    /*
    For å bruke Tanstack Query må man ha en variabel som henter inn funksjonen useQuery fra main.tsx. 
    Denne funksjonen tar et objekt (bestående av queryKey og Query function) som parameter. 
    Query key er en array som brukes for refetching og caching data. Denne trenger å være unik i
        programmet.
    Query function er en funksjon som kjører når man kjører spørringen med denne nøkkelen. Dette
        er hvor api kallet går.
    */

    const numberOfFacts:number=1

    const {data, refetch, error} = useQuery({
        queryKey:["cats", numberOfFacts],
        queryFn:() => getCatFact(numberOfFacts) //Bruker arrow function for å sende parameteret
    })

    const [count, setCount] = useState<number>(1);

    const fetchNyFakta = () => {
        refetch()
        setCount(count+1)
    };


    if (error) {
        alert("Feil med API kallet.")
    }
    

    return (
        <div>
            <div>
                <h3>OMG JEG ELSKER KATTER!!!</h3>
                <div>
                    Antall fakta hentet: {count}
                </div>
                <div>
                    <h4>Kattefakta:</h4>
                    <p>{ data?.data?.[0]}</p>
                    <div>
                            <button onClick={fetchNyFakta}>Ny fakta!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const getCatFact = async (numberOfFacts:number) => {
    const response = await axios.get(`https://meowfacts.herokuapp.com/?count=${numberOfFacts}`)
    return await response.data
}
