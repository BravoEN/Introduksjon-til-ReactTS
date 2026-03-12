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

    const [totalCatFacts, setTotalCatFacts]=useState<number>(0)
    const [goingBack, setGoingBack]=useState<boolean>(false)
    const [factOn, setFactOn]=useState<number>(0)

    const numberOfFacts:number=1

    const {data, refetch, error} = useQuery({
        queryKey:["cats", numberOfFacts],
        queryFn:() => getCatFact(numberOfFacts) //Bruker arrow function for å sende parameteret
    })
    /*
    const {catPictureData, error} = useQuery({
        queryKey:["cats"],
        queryFn: getCatPicture
    })*/



    if (error) {
        alert("Feil med API kallet.")
    }
    

    return (
        <div className="oppgaveFordeling">
            <div>
                <h3>OMG JEG ELSKER KATTER!!!</h3>
                <div>
                    <h4>Kattefakta:</h4>
                    <p>{ data?.data?.[0]}</p>
                    <div>
                        <button>Tilbake</button>
                        {!goingBack? 
                            <button onClick={() => refetch()}>Ny fakta!</button>:
                            <button>Neste</button>
                        }
                        
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

/*
const getCatPicture = async () => {
    const response = await axios.get(`https://cataas.com/cat`)
    return await response.data
}
    */