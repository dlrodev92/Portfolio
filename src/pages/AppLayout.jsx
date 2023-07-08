import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
import {motion} from "framer-motion"
export default function AppLayout() {
    return (
      <>
      <div
       className='w-screen h-screen grid grid-cols-appLayout grid-rows-appLayout p-7 lg:p-1'
       >
        <div className='col-start-1 col-span-6 row-start-1 row-span-5 lg:col-start-2 lg:col-span-4 lg:row-start-2 lg:row-span-4  bg-blueBackground flex lg:justify-end lg:flex-row flex-col justify-end lg:rounded-[50px] rounded-[20px] lg:shadow-inner '>
          <motion.div className='bg-white lg:w-[75%] lg:h-full lg:rounded-[50px] shadow-inner w-full h-[88%] rounded-b-[20px]'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0, transition:{duration: 4}}}>
          <Outlet />
          </motion.div>
        </div>
        <div className='col-start-1 col-span-6 lg:col-start-6 lg:row-start-2 lg:row-span-2 flex items-center justify-center mt-3 lg:items-start lg:justify-start lg:mt-3 lg:ml-[20%] '>
          <NavBar/>
        </div>
      </div>
      </>
    )
}