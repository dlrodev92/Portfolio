import {motion} from "framer-motion"
export default function Carrousel (props){
    return(
        <div className="relative">
            <motion.div className="w-[80%]  overflow-hidden"
            initial={{scale:0, rotation:-180}}
            animate={{
                scale:1,
                rotation:0,
            }}
            transition={{
                type:"spring",
                stiffness: 260,
                damping: 20}}
            >
               {props.images}
            </motion.div>
        </div>
    )
}