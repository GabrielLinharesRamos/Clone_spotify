import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./pages/Home"
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import UserHome from "./pages/UserHome"; 
import Usuario from "./pages/usuario";


import Header from "./components/Header";
import HeaderHome from "./components/HeaderHome";
import Footer from "./components/Footer";
import Private from "./components/Private";
import ContainerEsquerdo from "./components/ContainerEsquerdo";


function RoutesApp(){
    
    return(
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<><HeaderHome/><Home/><Footer/></>}/>
                <Route path="/Faq" element={<><Header /><Faq/><Footer/></>}/>
                <Route path="/Login" element={<><Header /><Login /><Footer/></>}/>
                <Route path="/Cadastro" element={<><Header/><Cadastro/><Footer/></>}/>
                <Route path="/userHome" element={<Private><><ContainerEsquerdo/><UserHome/></></Private>}/>
                <Route path="/user" element={<Private><><ContainerEsquerdo/><Usuario/></></Private>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp