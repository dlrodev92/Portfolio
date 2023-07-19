import { motion } from "framer-motion";
import SkillBouble from './../components/SkillBouble';
import Carrousel from "./../components/Carrousel";
import {data} from "../data/bigBang.data";
import { useEffect, useState } from "react";

export default function MigthyMiniMinds() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  console.log(data)
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    function getImages() {
    const imageElements = data.carouselImages.map((image) => {
      return (
        <motion.div className="item min-w-[550px] min-h-[250px] rounded-[25px] p-5 " key={image}>
        <img src={image} className="w-[100%] h-[100%] rounded-[25px] pointer-events-none " alt="img" />
        </motion.div>
      );
    });
    return imageElements;
  }
function getSkills() {
  const skillElements = data.stackInfo.map((skill) => {
    return (
      <SkillBouble
        name={skill.name}
        grid={skill.grid}
        text={skill.text}
        color={skill.color}
      />
    );
  });
  return skillElements;
}
function getTakeaways() {
  const takeawayElements = data.takeaways.map((takeaway) => {
    return (
      <li className='lg:text-[1.1rem] text-[1rem] font-Jost'>{takeaway}</li>
    );
  });
  return takeawayElements;
}
    return (
        <motion.div className="h-[100%] w-full flex flex-col items-center justify-start rounded-b-[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide"
        key="migthyMiniMinds"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
          <h1 className='lg:text-[4rem] text-[3rem] font-Jost relative border-b-8 mb-5 border-blueBackground text-center'>
            {data.title}
          </h1>
          <img src={data.heroImage} alt='project image' className='w-[100%] bg-fixed'/>
          <div className='w-full bg-slate-200 flex flex-col justify-start md:justify-center items-center rounded-lg p-3'>
            <h2 className='lg:text-[3rem] text-[2rem] font-Jost border-b-8 border-blueBackground text-center mb-5'>
              Project Overview
            </h2>
            <div className='w-full flex flex-col justify-center items-center'>
              <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold  text-center'>
                Summary
              </h3>
              <p className='text-[1rem] text-center w-4/5 font-Jost'>
                {data.summary}
              </p>
              <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold mt-5  text-center'>
                Stack
              </h3>
              <div className="w-[75%]  grid grid-cols-6 grid-rows-4 gap-2 p-5 ">
                {getSkills()}
            </div>
            <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold  text-center'>
                Takeaways
            </h3>
            <div className="flex justify-center items-center w-[100%]">
                <ul className="list-disc flex flex-col justify-center items-center p-5">
                  {getTakeaways()}
                </ul>
            </div>
            <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold  text-center'>
                Gallery
            </h3>
            <Carrousel images={getImages()}/>
            <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold  text-center'>
                Links
            </h3>
            <div className="flex w-full justify-around items-center">
                <a href="https://darling-lebkuchen-bff735.netlify.app/" target="_blank"><img src={screenWidth > 1023 ? "https://i.ibb.co/1zSWFTt/3.png" : "https://i.ibb.co/kXpk9D0/1.png"} alt="migthywebsite" className="w-[200px] p-5 hover:scale-110  duration-500 cursor-pointer "/></a>
                <a href="https://github.com/dlrodev92/rock_scissors_papper" target="_blank"><img src="https://i.ibb.co/zhD6KVZ/Untitled-design-20.png" alt="github" className="w-[125px] h-[125px]  p-5 hover:scale-110  duration-500 cursor-pointer " /></a>
            </div>
            </div>
          </div>
        </motion.div>
    )
}