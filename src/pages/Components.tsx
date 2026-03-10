import React from "react";
import "./Pages.css"
import ButtonsExample from "../components/ButtonsExample";
import FormsExample from "../components/FormsExample";
import ListExample from "../components/ListExample";

export default function Components() {
    return (
        <div>
            <div className="intro">
                <h1>"Component Cheatsheet"</h1>
                <p>
                    Her har du en kort oversikt over noen eksempler for bruk av UseState og UseEffect i React. Dette er funksjoner brukt for å re-rendere
                    siden slik at endringer skjer sømløst.
                </p>
            </div>
            <div className="oppgave">
                <ButtonsExample />
            </div>
            <div className="oppgave">
                <FormsExample/>
            </div>
            <div className="oppgave">
                <ListExample/>
            </div>
        </div>
    )
}