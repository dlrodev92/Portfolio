import {motion} from "framer-motion"
import ProjCard from "../components/ProjCard"

export default function Portfolio() {
    return (
    <div className="h-[100%] w-full flex flex-col items-center justify-start rounded:[20px] lg:rounded-[50px] gap-10 overflow-y-scroll scrollbar-hide">
        <motion.h1 className="lg:text-[4rem] text-[3rem] font-Jost -bold relative border-b-8 border-blueBackground text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.7, 
          }}>
            Projects
        </motion.h1>
        <div className="w-full h-auto flex justify-center flex-wrap gap-5 p-5">
            
        <ProjCard
        title="AI Interviewer MVP"
        image="https://i.ibb.co/p6m359YN/Screenshot-from-2025-06-09-19-05-02.png"
        linkPage="/portfolio/Ai_interviewer"
        overlay="bg-purple-600"
        />

        <ProjCard
        title="IbetjoCleanApp"
        image="https://i.ibb.co/tps3838G/Screenshot-from-2025-06-09-17-16-23.png"
        linkPage="/portfolio/IbetjoCleanApp"
        overlay="bg-green-600"
        />
        <ProjCard
        title="Iberosucre Web"
        image="https://i.ibb.co/Pr2Sg96/portada.png"
        linkPage="/portfolio/ShowsLatinos"
        overlay="bg-red-300"
        />

        <ProjCard
        title="El Dorado"
        image="https://i.ibb.co/QfrskwF/Screenshot-Capture-2023-09-24-00-43-22.webp"
        linkPage="/portfolio/ElDorado"
        overlay="bg-yellow-700"
        />
         <ProjCard
        title="Ibb Uploader Library"
        image="https://i.ibb.co/BsRxc80/UPLOADER-1.png"
        linkPage="/portfolio/IbbUploader"
        overlay="bg-red-500/80"
        />

        <ProjCard
        title="R S P L S"
        image="https://i.ibb.co/DDnpQhC/bigbang.webp"
        linkPage="/portfolio/BigBang"
        overlay="bg-bigbang"
        />

        <ProjCard
        title="This.Portfolio"
        image="https://i.ibb.co/XWGFLLD/this-Portfolio.webp"
        linkPage="/portfolio/ThisPortfolio"
        overlay="bg-blueBackground"
        />

        
        
        </div>
        </div>
    )
}
