import React from "react";
import {useState, useEffect} from "react";

import "./ComponentsExamples.css"

export default function ListExample() {

    

    const [groceryList, setGroceryList] = useState<string[]>([]);

    function addFoodToGet(formData:any) {
        const newFoodName=formData.get("name")

        setGroceryList([...groceryList,newFoodName])

    }

    return (
        <div>
            <h2>Lists</h2>
            <form action={addFoodToGet} className="exampleComponent">
                <div className="formFields">
                    <div className="formColumn">
                        <label>Matvare: </label>
                        <input
                        name="name"/>
                    </div>
                </div>
                <button type="submit" className="button">Legg til</button>
            </form>
            <div className="exampleComponent">
                <h4>Handleliste</h4>
                {groceryList.map(grocery => (<li>{grocery}</li>))}
            </div>
        </div>
    )
}