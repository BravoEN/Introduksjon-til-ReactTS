import React from "react";
import {useState} from "react";

import "./ComponentsExamples.css"
/*
Action er en URL eller en funksjon som blir kalt når tabellen blir sendt. Dataene
fra tabellen blir sendt som et parameter, slik at man kan bruke dataen fra brukeren.

Default-en til action er at felter i tabellen resettes når funksjonen er ferdig. Hvis man vil
forhindre dette som i brukernavn i eksempelet, er det mulig å sette value-parameteret til en useState variabel. 
Da må man huske å ha med en onChange arrow-funksjon, slik at variabelen oppdateres når brukeren 
skriver. Hvis ikke vil ikke verdien oppdateres, og det blir som at feltet er readOnly😅.
*/

export default function FormsExample() {

    const [username, setUsername]=useState<string>("PgAdmin");
    const [editing, setEditing]=useState<boolean>(false);

    function buttonClick(formData:any) {

        if (editing==false) {
            setEditing(true)
        } else {
            setEditing(false)

            //.replace kalles regex og er en lett måte å bearbeide strings. Dette brukes ofte når man jobber mot db.
            const newPassword=formData.get("password").replace(/./g,"*");

            //For å inkludere variabler i string må man skrive ${variabelnavn}
            alert(`Brukernavn har blitt byttet til ${username} og nytt passord er: ${newPassword}`);
        }
    }

    return(
        <div>
            <h2>Forms</h2>
            <div>
                <form action={buttonClick} className="exampleComponent">
                    <div className="formFields">
                        <div className="formColumn">
                            <label>Brukernavn: </label>
                            <input 
                                name="userId" 
                                readOnly={!editing} 
                                value={username}
                                onChange={e => {setUsername(e.target.value)}}
                            />
                        </div>
                        <div className="formColumn">
                            <label>Passord: </label>
                            <input 
                                name="password" 
                                readOnly={!editing}
                            />
                        </div>
                    </div>
                    <button type="submit" className="button">{editing? "Save":"Edit"}</button>
                </form>
                
            </div>
        </div>
    )
}