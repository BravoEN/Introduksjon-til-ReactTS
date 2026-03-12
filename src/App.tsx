//Imports:
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Components from "./pages/Components";
import Oppg1 from "./pages/Oppg1";
import Oppg2 from "./pages/Oppg2";

/*
Dette er rooten til prosjektet.

Her har jeg brukt noe som kalles react-router. Dette er et react bibliotek som
blant annet gjør det mulig å navigere mellom ulike sider/pages/views inne på nettsiden.
For å bruke den, må man pakke appen inn i <browserRouter> tags. Deretter, kan man
legge inn ulike "routes" med spesifiserte stier (path) og koble dem opp mot
ulike sider (elements).

Noe jeg har pleid å gjøre siden APP2000 er å legge inn en overordnet side (mainLayout).
Dette gjør at alle sider kan ha den samme navigasjonsbaren, footeren, og padding,
noe som gjør layout design enklere.
*/

export default function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/Components"} element={<Components />} />
                    <Route path={"/Oppg1"} element={<Oppg1 />} />
                    <Route path={"/Oppg2"} element={<Oppg2 />} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    </>
  )
}
