import React from "react";
import {useState, useEffect} from "react";

import "./ComponentsExamples.css"

export default function ListExample() {

    class GroceriesList {
        private list:Array<Grocery>;

        public constructor() {
            this.list=[]
        }

        public addGrocery(name:string, amount:number) {
            const newGrocery=new Grocery(name,amount);
            this.list.push(newGrocery);
        }
        public getList():Array<Grocery> {
            return this.list;
        }
    }

    class Grocery {
        private name:string;
        private amount:number;

        public constructor(name:string, amount:number) {
            this.name=name;
            this.amount=amount;
        }
        public getName():string {
            return this.name;
        }
        public getAmount():number {
            return this.amount;
        }
    }

    useEffect(() => {
    
        /*HER!!!!!!!!*/

    })

    const foodToGet=new GroceriesList();

    function addFoodToGet(formData:any) {
        const newFoodName=formData.get("name");
        const newFoodAmount=formData.get("amount");

        foodToGet.addGrocery(newFoodName, newFoodAmount);

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
                    <div className="formColumn">
                        <label>Antall: </label>
                        <input
                        name="amount"/>
                    </div>
                </div>
                <button type="submit" className="button">Legg til</button>
            </form>
            <div className="exampleComponent">
            </div>
        </div>
    )
}