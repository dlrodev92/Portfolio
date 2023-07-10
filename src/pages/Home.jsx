import {motion} from "framer-motion"
export default function Home() {
    return (
        <div className="h-[100%] w-full grid grid-cols-4 grid-rows-3 rounded:[20px] lg:rounded-[50px]">
            <div className="col-start-1 col-span-2 row-start-1 row-span-2 bg-slate-500">

            </div>
            <div className="col-start-3 col-span-2 row-start-1 row-span-2 bg-violet-500">
                
            </div>
             <motion.h1 className="text-[100px] font-Jost col-start-1 row-start-3 col-span-4 w-full h-1/2 break-normal"
                initial={{ x: '10%' }}
                animate={{ x: '0%' }}
                transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'linear',
                }}
                 >David Lopez Rodriguez</motion.h1>
        </div>
    )
}