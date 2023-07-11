import {motion} from "framer-motion"
import SkillBouble from "../components/SkillBouble"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import{faHtml5, faCss3Alt, faCss3, faReact, faSquareJs,faNode } from '@fortawesome/free-brands-svg-icons'
export default function Home() {
    return (
        <div className="h-[100%] w-full grid grid-cols-4 grid-rows-4 rounded:[20px] lg:rounded-[50px]">
            <div className="col-start-1 row-start-1 col-span-4 flex flex-col items-start relative">
                 <motion.h1 
                 className="text-[5rem] font-Jost w-full h-1/2 break-normal text-center absolute"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                        duration: 1, 
                        delay: 0.5 
                    }}
                 >
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, repeat: 6, delay: 0.5}}
                >
                    D
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 ,repeat: 6 }}
                >
                    a
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 ,repeat: 6 }}
                >
                    v
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 ,repeat: 6 }}
                >
                    i
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 ,repeat: 6 }}
                > 
                d
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 ,repeat: 6 }}
                >
                    &nbsp;
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 ,repeat: 5 }}
                >
                    L
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 ,repeat: 5 }}
                >
                    ó
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 ,repeat: 5}}
                >
                    p
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 ,repeat: 5 }}
                >
                    e
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 ,repeat: 5 }}
                >
                    z
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.2 ,repeat: 4 }}
                >
                    &nbsp;
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.4 ,repeat: 4 }}
                >
                    R
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.6 ,repeat: 4 }}
                >
                    o
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.8 ,repeat: 4 }}
                >
                    d
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3 ,repeat: 4 }}
                >
                   r
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.2 ,repeat: 3 }}
                >
                   í
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.4 ,repeat: 3 }}
                >
                    g
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.6 ,repeat: 3 }}
                >
                    u
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.8 ,repeat: 3 }}
                >
                    e
                </motion.span>
                <motion.span
                    style={{ display: 'inline-block', marginRight: '0.1em' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 4 ,repeat: 3 }}
                >
                    z
                </motion.span>
                </motion.h1>
                <motion.img 
                src="https://i.ibb.co/9HFf4fK/2.png" 
                alt="dave_face" 
                className="w-[30%] absolute self-end mr-[50px] mt-16 rounded-2xl "
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 1 }}
                />
            </div>
            <motion.div className="col-start-1 col-span-4 row-start-2 row-span-1 flex flex-col justify-around items-start ml-16"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 1 }}>
                <h1 className="text-[1.8rem] font-Jost -bold relative border-b-8 border-blueBackground">
                    I'm a junior web developer specializing in the MERN stack. 
                </h1>

                <li className="list-none">
                   <h3 className="text-[1.2rem] italic font-Jost">- "I develop dynamic and responsive web applications using React".</h3>
                </li>
                <li className="list-none">
                   <h3 className="text-[1.2rem] italic font-Jost">- "I create secure backend applications using NodeJs and SQL".</h3>
                </li>
                <li className="list-none">
                   <h3 className="text-[1.2rem] italic font-Jost">- "I'm currently learning PHP/Laravel to expand my knowledge of the web".</h3>
                </li>
            </motion.div>
            <div className="col-start-1 col-span-4 row-start-3 row-span-4 flex flex-col justify-start items-center">
                <h1 className="text-[1.8rem] font-Jost -bold relative border-b-8 border-blueBackground mt-9">
                    My Skills
                </h1>
            <div className="w-full h-full grid grid-cols-5 grid-rows-4 gap-2 p-5 ">
                    <SkillBouble
                    name="HTML"
                    icon={<FontAwesomeIcon icon={faHtml5} />}
                    grid="col-start-2 col-span-1 row-start-1 row-span-1"
                    text="text-[100%]"
                    color="lime-400"
                    />
                    <SkillBouble
                    name="CSS"
                    icon={<FontAwesomeIcon icon={faCss3Alt} />}
                    grid="col-start-4 col-span-1 row-start-1 row-span-1"
                    text="text-[100%]"
                    color="blueBackground"
                    />
                    <SkillBouble
                    name="JavaScript"
                    icon={<FontAwesomeIcon icon={faSquareJs} />}
                    grid="col-start-1 col-span-1 row-start-2 row-span-1"
                    text="text-[100%]"
                    color="yellow-400"
                    />
                    <SkillBouble
                    name="TailwindCSS"
                    icon={<FontAwesomeIcon icon={faCss3} />}
                    grid="col-start-5 col-span-1 row-start-2 row-span-1"
                    text="text-[100%]"
                    color="violet-500"
                    />
                    <SkillBouble
                    name="Node"
                    icon={<FontAwesomeIcon icon={faNode} />}
                    grid="col-start-2 col-span-1 row-start-3 row-span-1"
                    text="text-[100%]"
                    color="green-400"
                    />
                    <SkillBouble
                    name="Express"
                    icon={<FontAwesomeIcon icon={faUser} />}
                    grid="col-start-4 col-span-1 row-start-3 row-span-1"
                    text="text-[100%]"
                    color="indigo-400"
                    />
                    <SkillBouble
                    name="React"
                    icon={<FontAwesomeIcon icon={faReact} />}
                    grid="ml-[25%] mr-[25%] col-start-2 col-span-2 row-start-2 row-span-1"
                    text="text-[100%]"
                    color="red-500"
                    />
                    <SkillBouble
                    name="React"
                    icon={<FontAwesomeIcon icon={faReact} />}
                    grid=" ml-[25%] mr-[25%]  col-start-3 col-span-2 row-start-2 row-span-1"
                    text="text-[100%]"
                    color="red-500"
                    />
                    
            </div>
            </div>
            </div>
                )
            }