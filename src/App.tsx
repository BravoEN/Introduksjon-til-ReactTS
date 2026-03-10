//Imports:
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Components from "./pages/Components";
import Oppg1 from "./pages/Oppg1";
import Oppg2 from "./pages/Oppg2";

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
