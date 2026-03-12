import  { useQuery } from "@tanstack/react-query"
import {useState} from "react"
import axios from "axios"
import React from "react"

export default function Oppg2(){
    const [nokAmount, setNokAmount] = useState<number>(0)

    const {data} = useQuery({
        queryKey:["dollar"],
        queryFn:() => getDollar()
    })

    const usdAmount = nokAmount * (data?.nok.usd || 0)

    return(
        <div>
            <p>Konversjons raten er(nok til usd): {data?.nok.usd}</p>
            <input
                onChange={(e) => setNokAmount(Number(e.target.value))}
                placeholder="Skriv inn NOK beløp"
            />
            <p>{nokAmount} NOK = {usdAmount.toFixed(2)} USD</p>
        </div>
    )
}

const getDollar = async () => {
    const response = await axios.get("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/nok.json")
    return await response.data
}