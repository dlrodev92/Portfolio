
import { motion } from "framer-motion";
import SkillBouble from './../components/SkillBouble';
import Carrousel from "./../components/Carrousel";
import { data } from "../data/aiInterviewer.data";
import { useEffect, useState } from "react";

export default function AIInterviewer() {
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
            alt="AI Interviewer screenshot" 
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

  function getAIFeatures() {
    const aiFeatureElements = data.aiFeatures.map((feature, index) => {
      return (
        <li key={index} className='lg:text-[1rem] text-[0.9rem] font-Jost mb-2 text-purple-700 font-medium'>
          {feature}
        </li>
      );
    });
    return aiFeatureElements;
  }

  function getInterviewTypes() {
    const typeElements = data.interviewTypes.map((type, index) => {
      return (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
          <h5 className="font-Jost font-bold text-lg mb-2 text-gray-800">{type.name}</h5>
          <p className="font-Jost text-gray-600 mb-3">{type.description}</p>
          <ul className="list-disc list-inside space-y-1">
            {type.features.map((feature, fIndex) => (
              <li key={fIndex} className="text-sm font-Jost text-gray-700">{feature}</li>
            ))}
          </ul>
        </div>
      );
    });
    return typeElements;
  }

  return (
    <motion.div 
      className="h-[100%] w-full flex flex-col items-center justify-start rounded-b-[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide"
      key="aiInterviewer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className='lg:text-[3.2rem] text-[2.2rem] font-Jost relative border-b-8 mb-5 border-blueBackground text-center px-4'
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.7 }}
      >
        {data.title}
      </motion.h1>
      
      <motion.img 
        src={data.heroImage} 
        alt='AI Interviewer hero image' 
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

          {/* MVP Strategy & Development Approach Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center mt-5'>
            MVP Development Strategy
          </h3>
          <div className="w-[95%] bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                <h5 className="font-Jost font-bold text-lg mb-2 text-gray-800">🎯 Ambitious Vision</h5>
                <p className="font-Jost text-gray-600 text-sm">
                  Originally envisioned as a comprehensive AI-powered interview preparation platform with extensive features, 
                  analytics, and advanced AI capabilities for the developer community. The scope was massive - covering every aspect of interview preparation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                <h5 className="font-Jost font-bold text-lg mb-2 text-gray-800">⚡ Strategic MVP Focus</h5>
                <p className="font-Jost text-gray-600 text-sm">
                  Due to time constraints, I strategically pivoted to an MVP approach, focusing on core functionality and technical proof-of-concept. 
                  This demonstrates effective project scope management and prioritization skills.
                </p>
              </div>
            </div>
          </div>

          {/* AI-Assisted Development Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            AI-Assisted Development Workflow
          </h3>
          <div className="w-[95%] bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
                <h5 className="font-Jost font-bold text-lg mb-2 text-purple-700">🤖 Claude MCP Server</h5>
                <p className="font-Jost text-gray-600 text-sm">
                  Integrated Claude Model Context Protocol server with VSCode for AI-assisted development, 
                  code generation, and rapid prototyping that significantly accelerated development.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                <h5 className="font-Jost font-bold text-lg mb-2 text-blue-700">🔍 RAG Implementation</h5>
                <p className="font-Jost text-gray-600 text-sm">
                  Built custom Retrieval-Augmented Generation system for intelligent interview question generation 
                  and contextual content delivery based on job roles and interview types.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
                <h5 className="font-Jost font-bold text-lg mb-2 text-green-700">🎙️ Multi-AI Integration</h5>
                <p className="font-Jost text-gray-600 text-sm">
                  Orchestrated multiple AI services (OpenAI for content, Ultravox for voice, Claude for development) 
                  into a cohesive interview simulation system.
                </p>
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

          {/* MVP Interview Categories Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            MVP Interview Categories
          </h3>
          <div className="w-[95%] grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {getInterviewTypes()}
          </div>

          {/* AI-Powered Features Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            AI-Powered Features
          </h3>
          <div className="flex justify-center items-center w-[90%] mb-6">
            <ul className="list-disc flex flex-col justify-start items-start p-5 columns-1 md:columns-2 gap-x-8">
              {getAIFeatures()}
            </ul>
          </div>

          {/* MVP Features Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            MVP Core Features
          </h3>
          <div className="flex justify-center items-center w-[90%] mb-6">
            <ul className="list-disc flex flex-col justify-start items-start p-5 columns-1 md:columns-2 gap-x-8">
              {getFeatures()}
            </ul>
          </div>

          {/* Future Vision & Impact Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center'>
            Future Vision & Impact
          </h3>
          <div className="flex justify-center items-center w-[90%] mb-6">
            <ul className="list-disc flex flex-col justify-start items-start p-5">
              {getBusinessImpact()}
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
            MVP Showcase
          </h3>
          <Carrousel images={getImages()}/>

          {/* Links Section */}
          <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold text-center mt-5'>
            Project Resources
          </h3>
          <motion.div 
            className="flex w-full justify-around items-center flex-wrap gap-4 mb-6"
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1 }}
          >
            {/* GitHub Repository Link */}
            <a 
              href="https://github.com/dlrodev92/ai_interviewer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:scale-110 duration-500 cursor-pointer"
            >
              <img 
                src={screenWidth > 1023 ? "https://i.ibb.co/02vpKcw/senales-3.webp" : "https://i.ibb.co/wMBT2b7/senales-4.webp"} 
                alt="GitHub Repository" 
                className="w-[40px] h-[40px]"
              />
              <span className="font-Jost font-semibold">View Code</span>
            </a>

            {/* MVP Demo Link */}
            <a 
              href="https://ummrb2itde.eu-west-2.awsapprunner.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:scale-110 duration-500 cursor-pointer"
            >
              <img 
                src={screenWidth > 1023 ? "https://i.ibb.co/02vpKcw/senales-3.webp" : "https://i.ibb.co/wMBT2b7/senales-4.webp"} 
                alt="Try MVP Demo" 
                className="w-[40px] h-[40px]"
              />
              <span className="font-Jost font-semibold">Try MVP Demo</span>
            </a>

            
          </motion.div>

          {/* Technology Highlights */}
          <div className="w-full bg-gray-100 rounded-lg p-4 mt-4">
            <h4 className="text-[1.5rem] font-Jost font-bold text-center mb-3">
              Technology Stack Highlights
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

          {/* MVP Project Metrics */}
          <div className="w-full bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mt-4">
            <h4 className="text-[1.5rem] font-Jost font-bold text-center mb-4">
              MVP Development Highlights
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">MVP</div>
                <div className="text-sm font-Jost text-gray-600">Strategic Approach</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-2xl font-bold text-green-600">RAG</div>
                <div className="text-sm font-Jost text-gray-600">Custom System</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-2xl font-bold text-purple-600">MCP</div>
                <div className="text-sm font-Jost text-gray-600">Claude Integration</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-2xl font-bold text-orange-600">Multi-AI</div>
                <div className="text-sm font-Jost text-gray-600">Service Stack</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}