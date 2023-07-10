import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import resume from '../assets/resume.pdf'

export default function AppLayout() {
  return (
    <>
      <div className='w-screen h-screen grid grid-cols-appLayout grid-rows-appLayout p-7 lg:p-1'>
        <div className='col-start-1 col-span-6 row-start-1 row-span-5 lg:col-start-2 lg:col-span-4 lg:row-start-2 lg:row-span-4 bg-blueBackground flex lg:justify-end lg:flex-row flex-col justify-end lg:rounded-[50px] rounded-[20px] lg:shadow-inner'>
          <div className="h-[10%] flex justify-center gap-10 items-center lg:flex-col lg:items-center lg:justify-center lg:w-[25%] lg:h-full lg:gap-5">
            <img className="w-[60px] lg:w-[60%] mb-1" src="https://i.ibb.co/df9j7n5/F2-F2-F2-8.png" alt="profile.pic" />
            <div className="flex flex-col gap-1 justify-center items-center">
              <h1 className="font-Jost tracking-wider hidden lg:block lg:text-[130%]  text-white font-bold">David Lopez Rodriguez</h1>
              <h2 className="font-Jost tracking-wider hidden lg:block lg:text-[95%] text-white">Junior Full Stack Developer</h2>
            </div>
            <div className=" flex items-start justify-center ml-[-40px] lg:ml-[1px] gap-3 lg:items-center lg:justify-center lg:gap-5 ">
            <a href="https://www.linkedin.com/in/dave-rodriguez-b27691216/">
              <FontAwesomeIcon icon={faLinkedin} className='text-[25px] lg:text-[30px] text-white hover:scale-125 duration-500 cursor-pointer'/>
              </a>
              <a href="https://github.com/dlrodev92">
              <FontAwesomeIcon icon={faGithub} className='text-[25px] lg:text-[30px] text-white hover:scale-125 duration-500 cursor-pointer' />
              </a>
            </div>
            <a href={resume} download="resume.pdf" className=" font-Jost tracking-wider text-white border-2 border-white font-bold p-1 w-[170px] rounded-2xl lg:rounded-[35px] lg:w-[60%] lg:h-[65px] flex items-center justify-center hover:scale-110  duration-500 cursor-pointer lg:shadow-xl">
              Resume
            <FontAwesomeIcon icon={faFileArrowDown} className='ml-4 lg:text-[30px] text-white animate-bounce'/>
            </a>
          </div>
          <motion.div className='bg-white lg:w-[75%] lg:h-full lg:rounded-[50px] shadow-inner w-full h-[88%] rounded-b-[20px]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 0.6,
            }}>
            <Outlet />
          </motion.div>
        </div>
        <div className='col-start-1 col-span-6 lg:col-start-6 lg:row-start-2 lg:row-span-2 flex items-center justify-center mt-3 lg:items-start lg:justify-start lg:mt-3 lg:ml-[20%] '>
          <NavBar />
        </div>
      </div>
    </>
  )
}