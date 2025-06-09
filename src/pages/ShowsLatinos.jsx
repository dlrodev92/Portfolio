import { motion } from "framer-motion";
import SkillBouble from '../components/SkillBouble.jsx';
import Carrousel from "../components/Carrousel.jsx";
import { data } from "../data/showsLatinos.data.js";
import { useEffect, useState } from "react";

export default function ShowsLatinos() {
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
            alt="ShowsLatinos platform screenshot" 
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
          "{takeaway}"
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

  function getDeliverables() {
    const deliverableElements = data.clientWork.deliverables.map((deliverable, index) => {
      return (
        <li key={index} className='lg:text-[1rem] text-[0.9rem] font-Jost mb-2 text-blue-700 font-medium'>
          {deliverable}
        </li>
      );
    });
    return deliverableElements;
  }

  function getFutureEnhancements() {
    const enhancementElements = data.futureEnhancements.map((enhancement, index) => {
      return (
        <li key={index} className='lg:text-[1rem] text-[0.9rem] font-Jost mb-2 text-purple-700 font-medium'>
          {enhancement}
        </li>
      );
    });
    return enhancementElements;
  }

  return (
    <motion.div 
      className="h-[100%] w-full flex flex-col items-center justify-start rounded-b-[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide"
      key="showsLatinos"
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
        alt='ShowsLatinos platform hero image' 
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
          {/* Summary Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            Summary
          </h3>
          <p className='text-[1rem] text-center w-4/5 font-Jost mb-6'>
            {data.summary}
          </p>

          {/* Freelance Project Details */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center mt-5'>
            Freelance Project Details
          </h3>
          <div className="w-[95%] bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                <h5 className="font-Jost font-bold text-lg mb-2 text-blue-700">🏢 Client</h5>
                <p className="font-Jost text-gray-700 font-semibold">{data.clientWork.company}</p>
                <p className="font-Jost text-gray-600 text-sm">{data.clientWork.industry}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
                <h5 className="font-Jost font-bold text-lg mb-2 text-green-700">👨‍💻 Role</h5>
                <p className="font-Jost text-gray-700 font-semibold">{data.clientWork.role}</p>
                <p className="font-Jost text-gray-600 text-sm">{data.clientWork.projectType}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-orange-500">
                <h5 className="font-Jost font-bold text-lg mb-2 text-orange-700">⏱️ Duration</h5>
                <p className="font-Jost text-gray-700 font-semibold">{data.clientWork.duration}</p>
                <p className="font-Jost text-gray-600 text-sm">Full project lifecycle</p>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold mt-5 text-center'>
            Technology Stack
          </h3>
          <div className="w-[75%] grid grid-cols-6 grid-rows-4 gap-2 p-5">
            {getSkills()}
          </div>

          {/* Platform Features Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            Platform Features
          </h3>
          <div className="flex justify-center items-center w-[90%] mb-6">
            <ul className="list-disc flex flex-col justify-start items-start p-5 columns-1 md:columns-2 gap-x-8">
              {getFeatures()}
            </ul>
          </div>

          {/* Project Deliverables Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            Project Deliverables
          </h3>
          <div className="flex justify-center items-center w-[90%] mb-6">
            <ul className="list-disc flex flex-col justify-start items-start p-5 columns-1 md:columns-2 gap-x-8">
              {getDeliverables()}
            </ul>
          </div>

          {/* Business Impact Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            Business Impact
          </h3>
          <div className="flex justify-center items-center w-[90%] mb-6">
            <ul className="list-disc flex flex-col justify-start items-start p-5">
              {getBusinessImpact()}
            </ul>
          </div>

          {/* Future Enhancements Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            Planned Future Enhancements
          </h3>
          <div className="flex justify-center items-center w-[90%] mb-6">
            <ul className="list-disc flex flex-col justify-start items-start p-5 columns-1 md:columns-2 gap-x-8">
              {getFutureEnhancements()}
            </ul>
          </div>

          {/* Technical Achievements Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            Technical Achievements
          </h3>
          <div className="flex justify-center items-center w-[100%] mb-6">
            <ul className="list-disc flex flex-col justify-center items-center p-5">
              {getTakeaways()}
            </ul>
          </div>

          {/* Gallery Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            Platform Showcase
          </h3>
          <Carrousel images={getImages()}/>

          {/* Links Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center mt-5'>
            Live Platform
          </h3>
          <motion.div 
            className="flex w-full justify-center items-center mb-6"
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1 }}
          >
            <a 
              href="https://showslatinos24-production.up.railway.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg hover:scale-110 duration-500 cursor-pointer shadow-lg"
            >
              <img 
                src={screenWidth > 1023 ? "https://i.ibb.co/2jQ7Ngg/4.png" : "https://i.ibb.co/DfpcBq4/2.png"} 
                alt="Visit Live Platform" 
                className="w-[50px] h-[50px] object-contain"
              />
              <div className="flex flex-col">
                <span className="font-Jost font-bold text-lg">Visit Live Platform</span>
                <span className="font-Jost text-sm opacity-90">ShowsLatinos Production</span>
              </div>
            </a>
          </motion.div>

          {/* Technology Highlights */}
          <div className="w-full bg-gray-100 rounded-lg p-4 mt-4">
            <h4 className="text-[1.5rem] font-Jost font-bold text-center mb-3">
              Technology Implementation Highlights
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.techHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="font-Jost text-[0.9rem]">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Freelance Project Stats */}
          <div className="w-full bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 mt-4">
            <h4 className="text-[1.5rem] font-Jost font-bold text-center mb-4">
              Freelance Project Highlights
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-2xl font-bold text-red-600">Solo</div>
                <div className="text-sm font-Jost text-gray-600">Full-Stack Dev</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-2xl font-bold text-green-600">3 Months</div>
                <div className="text-sm font-Jost text-gray-600">Development Time</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">Live</div>
                <div className="text-sm font-Jost text-gray-600">Production Site</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-2xl font-bold text-purple-600">CMS</div>
                <div className="text-sm font-Jost text-gray-600">Content Mgmt</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}