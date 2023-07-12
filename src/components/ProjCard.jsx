import React, { useState } from 'react';
import Modal from '../components/Modal'; 
export default function ProjCard (){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };
    return(
        <div className="w-[45%] min-w-[400px] h-auto aspect-video flex flex-col items-center gap-3 border-4 border-blueBackground rounded-[25px] shadow-xl p-2">
            <h1 className="text-[1.5rem] font-Jost -bold relative">Titulo</h1>
            <img src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg" className="w-full h-[90%]"/>
            <button className="font-Jost tracking-wider text-white border-2 bg-blueBackground font-bold p-1 w-[30%] rounded-[35px] h-[65px] flex items-center justify-center hover:scale-110 duration-500 cursor-pointer shadow-lg"
            onClick={toggleModal}
            >More Info
            </button>
            {isModalOpen && (
            <Modal toggleModal={toggleModal}/>
            )}
        </div>
    )
}