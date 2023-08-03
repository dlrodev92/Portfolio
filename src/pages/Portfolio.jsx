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
        <div className="w-full h-full flex justify-center flex-wrap gap-5 p-5 mb-[300px]">
        <ProjCard
        title="Mighty Mini Minds"
        image="https://i.ibb.co/mHxVXVB/mmm-hero.png"
        linkPage="/MigthyMiniMinds"
        overlay="bg-mmm"
        />
        <ProjCard
        title="R S P L S"
        image="https://i.ibb.co/74GLC8G/2.png"
        linkPage="/bigBang"
        overlay="bg-bigbang"
        />
        <ProjCard
        title="This.Portfolio"
        image="https://i.ibb.co/k5W5fqW/this-Portfolio.png"
        linkPage="/ThisPortfolio"
        overlay="bg-blueBackground"
        />
        <ProjCard
        title="Comming Soon..."
        image="https://i.ibb.co/7zYV5w1/this-Portfolio-2.png"
        linkPage="/Portfolio"
        overlay="bg-black"
        />
        </div>
        </div>
    )
}
