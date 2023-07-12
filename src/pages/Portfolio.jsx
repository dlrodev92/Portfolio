import {motion} from "framer-motion"
import ProjCard from "../components/projCard"

export default function Portfolio() {
    return (
        <div className="h-[100%] w-full flex flex-col items-center justify-start rounded:[20px] lg:rounded-[50px] gap-10 overflow-y-scroll scrollbar-hide">
            <motion.h1 className="lg:text-[4rem] text-[3rem] font-Jost -bold relative border-b-8 border-blueBackground text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
              duration: 1, 
              delay: 0.4
          }}>
        Projects
        </motion.h1>
        <div className="w-full h-full flex justify-center flex-wrap gap-5 p-5 ">
        <ProjCard/>
        <ProjCard/>
        <ProjCard/>
        <ProjCard/>
        </div>
        </div>
    )
}