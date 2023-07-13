import { motion } from "framer-motion";
import SkillBouble from './../components/SkillBouble';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MigthyMiniMinds() {
    return (
        <motion.div className="h-[100%] w-full flex flex-col items-center justify-start rounded-b-[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide"
        key="migthyMiniMinds"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}>
          <h1 className='lg:text-[4rem] text-[3rem] font-Jost relative border-b-8 mb-5 border-blueBackground text-center'>
            Title
          </h1>
          <img src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg" alt='project image' className='w-[100%] lg:w-[100%] bg-fixed'/>
          <div className='w-full bg-slate-200 flex flex-col justify-start md:justify-center items-center rounded-lg p-3'>
            <h2 className='lg:text-[3rem] text-[2rem] font-Jost border-b-8 border-blueBackground text-center mb-5'>
              Project Overview
            </h2>
            <div className='w-full flex flex-col justify-center items-center'>
              <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold  text-center'>
                Summary
              </h3>
              <p className='text-[1rem] text-center w-4/5 font-Jost'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minus alias dolorem, quis doloremque culpa beatae, quas ipsam optio facilis nesciunt officiis deserunt voluptatum repudiandae dolorum eius quidem architecto rem debitis quod. Blanditiis ad reprehenderit expedita nesciunt laudantium accusamus corrupti, quidem vitae consequatur dignissimos dolore eum magni quae rerum. Ullam praesentium labore, repellat quam nihil soluta natus repellendus quisquam, sequi aspernatur suscipit illo. Exercitationem, omnis pariatur? Obcaecati consequatur officia nemo molestiae eos aliquam corporis aliquid voluptas! Accusantium eligendi placeat corporis. Quam dolores ex facere repellat. Vel architecto doloremque reiciendis voluptas accusantium ipsa impedit. Quam neque vel voluptate ipsam temporibus exercitationem provident, cupiditate ad! In expedita sunt ad dignissimos totam quia veniam exercitationem aperiam eaque consequatur ipsam reiciendis, iste necessitatibus quas saepe quo magnam fugit sequi unde, delectus tenetur! Totam amet tenetur inventore  Dignissimos, modi.
              </p>
              <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold mt-5  text-center'>
                Stack
              </h3>
              <div className="w-[75%] h-full grid grid-cols-6 grid-rows-4 gap-2 p-5 ">
                    <SkillBouble
                    name="HTML"
                    icon="icon"
                    grid="col-start-2 col-span-2 row-start-1 row-span-1"
                    text="text-[85%] lg:text-[100%]"
                    color="bg-html"
                    />
                    <SkillBouble
                    name="Typescript"
                    icon="icon"
                    grid="col-start-4 col-span-2 row-start-1 row-span-1"
                    text="text-[65%] lg:text-[100%]"
                    color="bg-ts"
                    />
                    <SkillBouble
                    name="JavaScript"
                    icon="icon"
                    grid="col-start-1 col-span-2 row-start-2 row-span-1"
                    text="text-[65%] lg:text-[100%]"
                    color="bg-js"
                    />
                    <SkillBouble
                    name="NodeJs"
                    icon="icon"
                    grid="col-start-5 col-span-2 row-start-2 row-span-1"
                    text="text-[85%] lg:text-[100%]"
                    color="bg-node"
                    />
                    <SkillBouble
                    name="CSS"
                    icon="icon"
                    grid="col-start-2 col-span-2 row-start-3 row-span-1"
                    text="text-[85%] lg:text-[100%]"
                    color="bg-tailwind"
                    />
                    <SkillBouble
                    name="Express"
                    icon="icon"
                    grid="col-start-4 col-span-2 row-start-3 row-span-1"
                    text="text-[85%]"
                    color="bg-express"
                    />
                    <SkillBouble
                    name="SQL"
                    icon="icon"
                    grid=" ml-[25%] mr-[25%]  col-start-3 col-span-2 row-start-2 row-span-1"
                    text="text-[85%] lg:text-[100%]"
                    color="bg-yellow-300"
                    />
                   
            </div>
            <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold  text-center'>
                Take Away
            </h3>
            <div className="flex justify-around w-[100%]">
                <ul className="list-disc">
                    <li className='lg:text-[1.5rem] text-[1rem] font-Jost'>TakeAway</li>
                    <li className='lg:text-[1.5rem] text-[1rem] font-Jost'>TakeAway</li>
                    <li className='lg:text-[1.5rem] text-[1rem] font-Jost'>TakeAway</li>
                    <li className='lg:text-[1.5rem] text-[1rem] font-Jost'>TakeAway</li>
                    <li className='lg:text-[1.5rem] text-[1rem] font-Jost'>TakeAway</li>
                </ul>
                <ul className="list-disc">
                    <li className='lg:text-[1.5rem] text-[1rem] font-Jost'>TakeAway</li>
                    <li className='lg:text-[1.5rem] text-[1rem] font-Jost'>TakeAway</li>
                    <li className='lg:text-[1.5rem] text-[1rem] font-Jost'>TakeAway</li>
                    <li className='lg:text-[1.5rem] text-[1rem] font-Jost'>TakeAway</li>
                    <li className='lg:text-[1.5rem] text-[1rem] font-Jost'>TakeAway</li>
                </ul>
            </div>
            <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold  text-center'>
                Gallery
            </h3>
            <h3 className='lg:text-[2rem] text-[1.8rem] font-Jost font-bold  text-center'>
                Links
            </h3>
            <div className="flex w-full justify-around items-center">
                <a href="/"><img src="https://i.ibb.co/2jQ7Ngg/4.png" alt="migthywebsite" className="w-[200px] p-5 hover:scale-110  duration-500 cursor-pointer "/></a>
                <a href="/"><img src="https://i.ibb.co/zhD6KVZ/Untitled-design-20.png" alt="github" className="w-[125px] h-[125px]  p-5 hover:scale-110  duration-500 cursor-pointer " /></a>
            </div>
            </div>
          </div>
        </motion.div>
    )
}