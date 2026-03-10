import React from "react";
import {useState} from "react";
import "./ComponentsExamples.css"

export default function ButtonsExample() {

    type Theme="light"|"dark"

    const [appearance, setAppearance]=useState<Theme>("light");

    function modeChange() {
        if (appearance=="light") {
            setAppearance("dark")
        } else {
            setAppearance("light")
        }
    }
    
    return (
        <div>
            <h2>Buttons</h2>
            <div className="exampleComponent">
                <p className={appearance}>
                    Her er et eksempel på hvordan man kan bytte mellom
                    dag- og nattmodus!
                </p>
                <button onClick={modeChange} className="button">{appearance}</button>
            </div>
        </div>
    )
}