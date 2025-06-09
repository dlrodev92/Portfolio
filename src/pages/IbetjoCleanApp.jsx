import { motion } from "framer-motion";
import SkillBouble from './../components/SkillBouble';
import Carrousel from "./../components/Carrousel";
import { data } from "../data/IbetjoCleanApp.data";
import { useEffect, useState } from "react";

export default function IbetjoCleanApp() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  console.log(data);
  
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
    const imageElements = data.carouselImages.map((image, index) => {
      return (
        <motion.div 
          className="item min-w-[550px] min-h-[250px] rounded-[25px] p-5" 
          key={index} 
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1}}
          transition={{ duration: 2 }}
        >
          <img 
            src={image} 
            className="w-[100%] h-[100%] rounded-[25px] pointer-events-none object-cover" 
            alt="IbetjoCleanApp screenshot" 
            loading="lazy" 
          />
        </motion.div>
      );
    });
    return imageElements;
  }

  function getSkills() {
    const skillElements = data.stackInfo.map((skill, index) => {
      return (
        <SkillBouble
          key={index}
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
    const takeawayElements = data.takeaways.map((takeaway, index) => {
      return (
        <li key={index} className='lg:text-[1.1rem] text-[1rem] font-Jost italic mb-3'>
          &quot;{takeaway}&quot;
        </li>
      );
    });
    return takeawayElements;
  }

  function getFeatures() {
    const featureElements = data.features.map((feature, index) => {
      return (
        <li key={index} className='lg:text-[1rem] text-[0.9rem] font-Jost mb-2'>
          {feature}
        </li>
      );
    });
    return featureElements;
  }

  function getBusinessImpact() {
    const impactElements = data.businessImpact.map((impact, index) => {
      return (
        <li key={index} className='lg:text-[1rem] text-[0.9rem] font-Jost mb-2 text-green-700 font-semibold'>
          {impact}
        </li>
      );
    });
    return impactElements;
  }

  return (
    <motion.div 
      className="h-[100%] w-full flex flex-col items-center justify-start rounded-b-[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide"
      key="ibetjoCleanApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className='lg:text-[3.5rem] text-[2.5rem] font-Jost relative border-b-8 mb-5 border-blueBackground text-center px-4'
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.7 }}
      >
        {data.title}
      </motion.h1>
      
      <motion.img 
        src={data.heroImage} 
        alt='IbetjoCleanApp hero image' 
        className='w-[100%] bg-fixed max-h-[400px] object-cover' 
        loading="lazy"
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.7 }}
      />
      
      <motion.div 
        className='w-full bg-slate-200 flex flex-col justify-start md:justify-center items-center rounded-lg p-3'
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.7 }}
      >
        <h2 className='lg:text-[3rem] text-[2rem] font-Jost border-b-8 border-blueBackground text-center mb-5'>
          Project Overview
        </h2>
        
        <motion.div 
          className='w-full flex flex-col justify-center items-center'
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.7 }}
        >
        
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            Summary
          </h3>
          <p className='text-[1rem] text-center w-4/5 font-Jost mb-6'>
            {data.summary}
          </p>

 
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold mt-5 text-center'>
            Tech Stack
          </h3>
          <div className="w-[75%] grid grid-cols-6 grid-rows-4 gap-2 p-5">
            {getSkills()}
          </div>


          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center mt-5'>
            Key Features
          </h3>
          <div className="flex justify-center items-center w-[90%] mb-6">
            <ul className="list-disc flex flex-col justify-start items-start p-5 columns-1 md:columns-2 gap-x-8">
              {getFeatures()}
            </ul>
          </div>

          
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            Business Impact
          </h3>
          <div className="flex justify-center items-center w-[90%] mb-6">
            <ul className="list-disc flex flex-col justify-start items-start p-5">
              {getBusinessImpact()}
            </ul>
          </div>

          
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            Technical Takeaways
          </h3>
          <div className="flex justify-center items-center w-[100%] mb-6">
            <ul className="list-disc flex flex-col justify-center items-center p-5">
              {getTakeaways()}
            </ul>
          </div>

          {/* Gallery Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            Application Gallery
          </h3>
          <Carrousel images={getImages()}/>

          {/* Links Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center mt-5'>
            Links & Resources
          </h3>
          <motion.div 
            className="flex w-full justify-around items-center flex-wrap gap-4 mb-6"
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1 }}
          >
         
          
            <a 
              href="https://ibetjocleanapp-production.up.railway.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-110 duration-500 cursor-pointer"
            >
              <img 
                src={screenWidth > 1023 ? "https://i.ibb.co/02vpKcw/senales-3.webp" : "https://i.ibb.co/wMBT2b7/senales-4.webp"} 
                alt="Live Demo" 
                className="w-[40px] h-[40px]"
              />
              <span className="font-Jost font-semibold">Live Demo</span>
            </a>

          
          </motion.div>

          {/* Technology Highlights */}
          <div className="w-full bg-gray-100 rounded-lg p-4 mt-4">
            <h4 className="text-[1.5rem] font-Jost font-bold text-center mb-3">
              Technology Highlights
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.techHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-Jost text-[0.9rem]">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}