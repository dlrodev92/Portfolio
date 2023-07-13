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
        <div className="w-full h-full flex justify-center flex-wrap gap-5 p-5 ">
        <ProjCard
        title="Migthy Mini Minds"
        image="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"
        linkPage="/MigthyMiniMinds"
        />
        <ProjCard
        title="Rock,Scissors,Papper"
        image="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"
        linkPage="/bigBang"
        />
        </div>
        </div>
    )
}