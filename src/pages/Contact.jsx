import {motion} from 'framer-motion'

export default function Contact() {
    return (
        <motion.div className="h-[100%] w-full flex flex-row items-center justify-center rounded:[20px] lg:rounded-[50px]"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0.2, transition:{duration: 0.9}}}>
        <h1 className='text-4xl font-bold underline w-1/2 h-1/2 bg-blueBackground'>Contact</h1>
        </motion.div>
    )
}