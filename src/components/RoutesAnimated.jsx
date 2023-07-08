import AppLayout from "../pages/AppLayout";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import About from "../pages/About";
import {
    Route,
    Routes,
    useLocation
  } from "react-router-dom";
  
  

export default function RoutesAnimated(){
   const location = useLocation();
    return (
    <Routes location={location} key={location.pathname}>
        <Route path="/"element={<AppLayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="Portfolio" element={<Portfolio/>} />
            <Route path="Contact" element={<Contact/>} />
            <Route path="About" element={<About/>} />
        </Route>
      </Routes>
    )
}