import {motion} from "framer-motion"
import SkillBouble from "../components/SkillBouble"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faHtml5, faCss3, faReact, faSquareJs,faNode } from '@fortawesome/free-brands-svg-icons'
import{faTruckFast, faTextHeight, faDatabase} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <div className="h-full w-[100%] flex flex-col rounded:[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide">
            <div className="col-start-1 row-start-1 col-span-4 flex flex-col justify-center items-center">
                 <motion.h1 
                 className="md:text-[300%] text-[200%] font-Jost break-normal mt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                        duration: 1, 
                        delay: 0.5 
                    }}
                 >
                <motion.span
                    style={{ marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, repeat: 6, delay: 0.5}}
                >
                    D
                </motion.span>
                <motion.span
                    style={{ marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 ,repeat: 6 }}
                >
                    a
                </motion.span>
                <motion.span
                    style={{ marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 ,repeat: 6 }}
                >
                    v
                </motion.span>
                <motion.span
                    style={{ marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 ,repeat: 6 }}
                >
                    i
                </motion.span>
                <motion.span
                    style={{ marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 ,repeat: 6 }}
                > 
                d
                </motion.span>
                <motion.span
                    style={{ marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 ,repeat: 6 }}
                >
                    &nbsp;
                </motion.span>
                <motion.span
                    style={{ marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 ,repeat: 5 }}
                >
                    L
                </motion.span>
                <motion.span
                    style={{ marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 ,repeat: 5 }}
                >
                    ó
                </motion.span>
                <motion.span
                    style={{ marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 ,repeat: 5}}
                >
                    p
                </motion.span>
                <motion.span
                    style={{ marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 ,repeat: 5 }}
                >
                    e
                </motion.span>
                <motion.span
                    style={{ marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 ,repeat: 5 }}
                >
                    z
                </motion.span>
                <motion.span
                    style={{ marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.2 ,repeat: 4 }}
                >
                    &nbsp;
                </motion.span>
                
                </motion.h1>
                <motion.img 
                src="https://i.ibb.co/9HFf4fK/2.png" 
                alt="dave_face" 
                className="lg:w-[20%] w-[30%] rounded-2xl mt-[-20px] "
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.7 }}
                />
            </div>
            <motion.div className="flex flex-col justify-around items-center p-5 mt-5"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.7 }}>
                <h1 className="lg:text-[1.8rem] text-[1.4rem] font-Jost -bold relative border-b-8 border-blueBackground text-center">
                    I'm a junior web developer specializing in the MERN stack.
                </h1>
                <li className="list-none">
                   <h3 className="lg:text-[1.3rem] text-[1rem] italic font-Jost">- "I develop dynamic and responsive web applications using React".</h3>
                </li>
                <li className="list-none">
                   <h3 className="lg:text-[1.3rem] text-[1rem] italic font-Jost">- "I create secure backend applications using NodeJs and SQL".</h3>
                </li>
                <li className="list-none">
                   <h3 className="lg:text-[1.3rem] text-[1rem] italic font-Jost">- "I'm currently learning PHP/Laravel to expand my knowledge of the web".</h3>
                </li>
            </motion.div>
            <motion.div className="flex flex-col justify-start items-center mt-[-25px]"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.7 }}
            >
                <h1 className="lg:text-[1.8rem] text-[1.4rem] font-Jost -bold relative border-b-8 border-blueBackground mt-9"
                >
                    My Skills
                </h1>
            <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-2 p-5 ">
                    <SkillBouble
                    name="HTML"
                    icon={<FontAwesomeIcon icon={faHtml5} />}
                    grid="col-start-2 xs:col-span-2 col-span-1 row-start-1 row-span-1"
                    text="text-[85%] lg:text-[100%] "
                    color="bg-html"
                    />
                    <SkillBouble
                    name="Typescript"
                    icon={<FontAwesomeIcon icon={faTextHeight} />}
                    grid="col-start-4 xs:col-span-2 col-span-1 row-start-1 row-span-1"
                    text="text-[65%] lg:text-[100%]"
                    color="bg-ts"
                    />
                    <SkillBouble
                    name="JavaScript"
                    icon={<FontAwesomeIcon icon={faSquareJs} />}
                    grid="col-start-1 col-span-1 xs:col-span-2 row-start-2 row-span-1"
                    text="text-[65%] lg:text-[100%]"
                    color="bg-js"
                    />
                    <SkillBouble
                    name="NodeJs"
                    icon={<FontAwesomeIcon icon={faNode} />}
                    grid="col-start-3 col-span-1 row-start-2 row-span-1 xs:row-start-4 xs:col-span-2 xs:col-start-3"
                    text="text-[85%] lg:text-[100%] xs:text-[70%]"
                    color="bg-node"
                    />
                    <SkillBouble
                    name="CSS"
                    icon={<FontAwesomeIcon icon={faCss3} />}
                    grid="col-start-2 col-span-1 xs:col-span-2 row-start-3 row-span-1"
                    text="text-[85%] lg:text-[100%] xs:text-[70%]"
                    color="bg-tailwind"
                    />
                    <SkillBouble
                    name="Express"
                    icon={<FontAwesomeIcon icon={faTruckFast} />}
                    grid="col-start-4 col-span-1 xs:col-span-2 row-start-3 row-span-1"
                    text="text-[85%] xs:text-[70%]"
                    color="bg-express"
                    />
                    <SkillBouble
                    name="React"
                    icon={<FontAwesomeIcon icon={faReact} />}
                    grid="ml-[25%] mr-[25%] col-start-2 col-span-2 xs:mr-[0%] xs:ml-[0%] xs:col-start-1 xs:row-start-4 row-span-1"
                    text="text-[85%] lg:text-[100%] xs:text-[70%]"
                    color="bg-react"
                    />
                    <SkillBouble
                    name="SQL"
                    icon={<FontAwesomeIcon icon={faDatabase} />}
                    grid=" ml-[25%] mr-[25%] xs:mr-[0%] xs:ml-[0%]  col-start-3 col-span-2 row-start-2 row-span-1"
                    text="text-[85%] xs:text-[70%] lg:text-[100%]"
                    color="bg-yellow-300"
                    />
                   
            </div>
            </motion.div>


            </div>
                )
            }
