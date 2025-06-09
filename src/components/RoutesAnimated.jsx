
import AppLayout from "../pages/AppLayout";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import About from "../pages/About";
import BigBang from "../pages/BigBang";
import ThisPortfolio from "../pages/ThisPortfolio";
import ElDorado from "../pages/ElDorado";
import ShowsLatinos from "../pages/ShowsLatinos";
import IbbUploader from "../pages/IbbUploader";
import AIInterviewer from "../pages/AiInterviewer";
import IbetjoCleanApp from "../pages/IbetjoCleanApp";

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
            
    
            <Route path="portfolio/ThisPortfolio" element={<ThisPortfolio/>} />
            <Route path="portfolio/BigBang" element={<BigBang/>} />
            <Route path="portfolio/ElDorado" element={<ElDorado/>} />
            <Route path="portfolio/ShowsLatinos" element={<ShowsLatinos/>} />
            <Route path="portfolio/IbbUploader" element={<IbbUploader/>} />
            <Route path="portfolio/Ai_interviewer" element={<AIInterviewer/>} />
            <Route path="portfolio/IbetjoCleanApp" element={<IbetjoCleanApp/>} />
        </Route>
      </Routes>
    )
}