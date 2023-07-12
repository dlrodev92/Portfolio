import {motion} from 'framer-motion'
export default function Modal({ toggleModal }) {
    return (
      <motion.div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0, transition: { duration: 1, delay: 0.2 } }}
      transition={{duration: 0.5}}>
        <div className="bg-white w-[80%] h-[80%] p-4 rounded-[25px] lg:rounded-[45px]">
          <h2 className="text-2xl font-bold mb-2">Modal Title</h2>
          <p>Modal content goes here.</p>
          <button
            className="text-white bg-blue-500 px-4 py-2 rounded-lg mt-4"
            onClick={toggleModal}
          >
            Close
          </button>
        </div>
      </motion.div>
    );
  }