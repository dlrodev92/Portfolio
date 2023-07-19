import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
export default function About() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contact');
  }
  return (
    <div className="h-[100%] w-full flex flex-col items-center justify-start rounded-b-[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide gap-10">
    <div className="w-full grid grid-cols-6 grid-rows-6 ">
        <motion.img 
        src="https://i.ibb.co/2Mkztqz/Untitled-850-650px-650-850px-650-700px-3.png"
        alt="david picture" 
        className="row-start-1 row-span-3 col-start-2 md:col-start-3 w-[250px] col-span-3"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.7 }}
        />
        <motion.h1 
        className="text-3xl md:text-[3rem] font-Jost font-bold text-white text-right col-start-1 col-span-4 row-start-3 row-span-1 bg-blueBackground rounded-[25px] mb-[-5%] ml-[-50%] skew-y-[-20deg] p-6 shadow-inner"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.7 }}
        >
          Hi! I'm David Lopez
        </motion.h1>
        <motion.div 
        className="rounded-l-[25px] col-start-2 mr-[-25px] col-span-5 row-span-4 lg:row-start-4 h-[350px] mb-2 bg-blueBackground shadow-inner flex flex-col gap-4 items-start justify-start p-6"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.7 }}
        >
         <h1 className="text-xl md:text-[2rem] font-Jost font-bold text-white self-center">This Is My Story</h1>
         <p className='text-md md:text-md lg:text-lg font-jost text-white'>
            My journey started in the culinary world, where I spent six years honing my skills as a chef.
         </p>
          <p className='text-sm md:text-md lg:text-lg font-jost text-white'>
          But my passion didn't stop there—I ventured into the realm of hospitality and spent the next five years as head waiter and bartender in high-end restaurants.
          </p>
          <p className='text-sm md:text-md lg:text-lg font-jost text-white'>
          Along the way, I dabbled in marketing, exploring my creative side among other jobs.
          </p>
          <p className='text-sm md:text-md lg:text-lg font-jost text-white'>
          Now, I have my sights set on becoming thes best version of a full-stack web developer. My ultimate goal is to create applications that truly make a difference in people's lives.
          </p>

        </motion.div>
      </div> 
      <div className='w-full grid grid-cols-aboutLayout grid-rows-aboutLayout p-2 gap-5'>
        <h1 className="text-[2rem] md:text-[3rem] font-Jost font-bold text-blueBackground row-start-1 col-start-4 col-span-2 ml-[20%] mr-[20%]">
          Timeline
        </h1>
        <div className=' row-start-2 row-span-7 col-start-7 col-span-2 flex flex-col justify-center items-center'>
          <div className='bg-blueBackground w-[3%] h-full'></div>
        </div>
        <motion.h3 className='text-xl md:text-[2rem] font-Jost font-bold text-black row-start-2 col-start-8 '
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >2012
        </motion.h3>
        <motion.div className='bg-blueBackground flex justify-evenly items-center col-start-1 col-span-6 row-start-2 rounded-[20px] ml-[-25px] shadow-xl p-2'
        initial={{ x: -400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        > <p className='text-sm md:text-md lg:text-lg font-jost text-white ml-[50px]'>
          I finished my studies in the culinary arts and began my career in the hospitality industry.
          </p>
          <img src="https://i.ibb.co/CJd5Mdn/Untitled-design-25.png" alt="picture" className='w-[20%]' />
        </motion.div>
        <motion.h3 className='text-xl md:text-[2rem] font-Jost font-bold text-black row-start-3 col-start-8 '
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1}}
        >2014
        </motion.h3>
        <motion.div className='border-4 border-blueBackground flex justify-evenly items-center col-start-1 col-span-6 row-start-3 rounded-[20px] ml-[-25px] p-2 shadow-xl'
        initial={{ x: -400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        > <p className='text-sm md:text-md lg:text-lg font-jost text-black ml-[50px]'>
          I got married! and also started feeling compelled by moving abroad and exploring new opportunities. Started to learn English.
          </p>
          <img src="https://i.ibb.co/gwtBfPM/Untitled-design-26.png" alt="picture" className='w-[20%]' />
        </motion.div>
        <motion.h3 className='text-xl md:text-[2rem] font-Jost font-bold text-black row-start-4 col-start-8 '
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >2016
        </motion.h3>
        <motion.div className='bg-blueBackground flex justify-evenly items-center col-start-1 col-span-6 row-start-4 rounded-[20px] ml-[-25px] p-2 shadow-xl'
        initial={{ x: -400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        >
          <p className='text-sm md:text-md lg:text-lg font-jost text-white ml-[50px]'>
          I moved to Bournemouth where I worked as a waiter and bartender in a high-end hotel. I also started to learn Portuguese.
          </p>
          <img src="https://i.ibb.co/bHJJdpq/Untitled-design-27.png" alt="picture" className='w-[20%]' />
        </motion.div>
        <motion.h3 className='text-xl md:text-[2rem] font-Jost font-bold text-black row-start-5 col-start-8 '
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >2020
        </motion.h3>
        <motion.div className='border-4 border-blueBackground flex justify-evenly items-center col-start-1 col-span-6 row-start-5 rounded-[20px] ml-[-25px] p-2 shadow-xl'
        initial={{ x: -400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        >
          <p className='text-sm md:text-md lg:text-lg font-jost text-black ml-[50px]'>
          During the challenging times brought about by the Covid pandemic, I decided to explore new avenues of personal and professional development. Although my language studies at the Open University didn't progress as planned, I seized the opportunity to redirect my focus. I embarked on an exciting journey into the realms of marketing, copywriting, and email marketing.
          </p>
          <img src="https://i.ibb.co/2hYnf1p/Untitled-design-28.png" alt="picture" className='w-[20%]' />
        </motion.div>
        <motion.h3 className='text-xl md:text-[2rem] font-Jost font-bold text-black row-start-6 col-start-8 '
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >2021
        </motion.h3>
        <motion.div className='bg-blueBackground col-start-1 flex justify-evenly items-center col-span-6 row-start-6 rounded-[20px] ml-[-25px] p-2 shadow-xl'
        initial={{ x: -400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        >
          <p className='text-sm md:text-md lg:text-lg font-jost text-white ml-[50px]'>
          Moved to London. I found myself back in the vibrant world of restaurants and hotels. Alongside my work in the hospitality sector, I also ventured into the realm of freelancing, offering my expertise in email marketing for e-commerce sites and pursuing copywriting as a rewarding side hustle.
          </p>
          <img src="https://i.ibb.co/Hz2GNMD/Untitled-design-29.png" alt="picture" className='w-[20%]' />
        </motion.div>
        <motion.h3 className='text-xl md:text-[2rem] font-Jost font-bold text-black row-start-7 col-start-8 '
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >2022
        </motion.h3>
        <motion.div className='border-4 border-blueBackground flex justify-evenly items-center col-start-1 col-span-6 row-start-7 rounded-[20px] p-2 ml-[-25px] shadow-xl'
        initial={{ x: -400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        >
          <p className='text-sm md:text-md lg:text-lg font-jost text-black ml-[50px]'>
          Got hired at Harrods while exploring my next career move. It was during my time there that I stumbled upon the fascinating world of coding. Intrigued by the possibilities, I embarked on a journey of learning HTML, CSS, and JavaScript, immersing myself in the foundations of web development.
          </p>
          <img src="https://1000marcas.net/wp-content/uploads/2021/06/Harrods-Logo.png" alt="picture" className='w-[20%] font-color-blueBackground' />
        </motion.div>
        <motion.h3 className='text-xl md:text-[2rem] font-Jost font-bold text-black row-start-8 col-start-8 '
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >2023
        </motion.h3>
        <motion.div className='bg-blueBackground flex justify-evenly items-center col-start-1 col-span-6 row-start-8 rounded-[20px] ml-[-25px] p-2 shadow-xl'
        initial={{ x: -400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        >
          <p className='text-sm md:text-md lg:text-lg font-jost text-white ml-[50px]'>
          The moment has finally arrived! Armed with my graduation from the school of code boot camp and my self-taught skills, I am now fully prepared to launch my career as a developer. 
          </p>
          <img src="https://i.ibb.co/Gx4Q21j/Graphic-Design-2.png" alt="picture" className='w-[20%]' />
        </motion.div>
      </div>
      <div className='flex flex-col justify-center items-center w-full gap-3 mb-10'>
       <motion.h1 className='text-[1.5rem] md:text-[2.5rem] font-Jost font-bold text-blueBackground'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
       > Let's work together!
       </motion.h1>
       <motion.button
          className="font-Jost tracking-wider text-white border-2 bg-blueBackground font-bold p-1 w-[40%] lg:w-[30%] rounded-[35px] h-[65px] flex items-center justify-center hover:scale-110 duration-500 cursor-pointer lg:shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={handleNavigate}
        >
          Send Me A Message
        </motion.button>
      </div>
    </div>
    
  );
}
