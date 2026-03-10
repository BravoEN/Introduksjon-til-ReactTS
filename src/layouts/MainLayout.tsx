//Imports:
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

/*
Nedenfor er hovedoppsettet/layouten av hver av sidene. Her legger vi til padding, maks høyde, 
footer og navigasjonsbar for alle sidene til nettsiden. Dette gjør det lettere for brukeren å
flytte seg rundt✨.
*/

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <main style={{minHeight:"100vh", padding:"0 4vw"}}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}