import React from "react";
import {Link} from "react-router-dom";
import "./Pages.css"

export default function Home() {
    return(
        <div>
            <div className="oppgaveFordeling">
                <div className="intro">
                    <h1>Introduksjon til ReactTS!</h1>
                    <p>
                        Her er en kort samling av informasjon og oppgaver brukt i introkurset til ReactTS.
                        Prosjektet har to branches:
                    </p>
                    <ul>
                        <li>Main - et rent oppsett for å komme fort i gang med kodingen</li>
                        <li>Solution - vårt "svar" på oppgaven</li>
                    </ul>
                    <p>Nedenfor er en beskrivelse av de to oppgavene som vi har brukt.</p>
                </div>
                <div className="oppgave">
                    <h2><Link to="">Oppgave 1: Katteentusiast nettside 😸</Link></h2>
                    <p>Lag en nettside som passer en skikkelig katteentusiast. Denne nettsiden skal inneholde to hovedkomponenter:</p>
                    <h3>Komponent A: Daglige fakta om katter</h3>
                    <ul>
                        <li>Hent en daglig kattefakta fra <Link to="https://github.com/wh-iterabb-it/meowfacts">https://github.com/wh-iterabb-it/meowfacts</Link> og vis den frem på nettsiden.</li>
                    </ul>
                    <h3>Komponent B: Counter</h3>
                    <ul>
                        <li>Lag en counter over hvor mange fakta man har hentet.</li>
                    </ul>
                </div>
                <div className="oppgave">
                    <h2><Link to="">Oppgave 2: Finance bro nettside 🪙</Link></h2>
                    <p>
                        Kari Vilikke har blitt hektet på crypto og valutakurser. Hun trenger en nettside som lar henne regne om fra 
                        norske kroner til dollar. Hun setter stor pris på brukergrensesnitt som er inspirert av bitcoin, siden dette 
                        er favoritt valutaen hennes.
                    </p>
                </div>
            </div>
        </div>
    )
}