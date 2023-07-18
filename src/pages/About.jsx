export default function About() {
  return (
    <div className="h-[100%] w-full flex flex-col items-center justify-start rounded-b-[20px] lg:rounded-[50px] overflow-y-scroll scrollbar-hide gap-10">
    <div className="w-full h-full grid grid-cols-6 grid-rows-6 ">
        <img src="https://i.ibb.co/2Mkztqz/Untitled-850-650px-650-850px-650-700px-3.png" alt="david picture" className="row-start-2 row-span-3 col-start-2 mt-[-10%] md:w-[90%] lg:mt-[-20%] lg:w-[60%] lg:ml-[15%] col-span-3"/>
        <h1 className="text-3xl md:text-[3rem] font-Jost font-bold text-white text-right col-start-1 col-span-4 row-start-4 row-span-1 bg-blueBackground rounded-[25px] mb-[-5%] ml-[-50%] skew-y-[-2deg] p-6 shadow-inner">Who's David Lopez?</h1>
        <div className="rounded-[25px] col-start-2 col-span-4 row-span-4 mb-2  skew-x-[-4deg]  bg-blueBackground p-2 shadow-inner flex flex-col gap-4 items-center justify-center">
         <h1 className="text-xl md:text-[2rem] font-Jost font-bold text-white">Mi historia</h1>
         <p>
             Si tuviera un tercer apellido sería "ventas". Lo llevo en la sangre.
            Estudié, busqué trabajo y seguí el camino preestablecido… pero escapé a tiempo para diseñar un camino a mi medida. No soy nómada digital, pero tengo un negocio que me permite trabajar desde la playa (aunque no me guste). Vivir en El Puerto de Santa María (Cádiz) tiene sus ventajas.
         </p>
         <p>
             Y si me preguntas quién soy, te diré que «solo» soy un estratega. Dime qué quieres vender y yo te contaré cómo hacerlo.
         </p>
        </div>
      </div> 
      <div className="flex flex-col items-center gap-5">
      <div className="w-[60%] ml-[-20px] self-start bg-blueBackground rounded-[25px] p-6 shadow-inner mb-10 flex items-center justify-start gap-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, architecto!
        </p>
        <div className="flex flex-col items-center w-[20%]">
        <img src="https://i.ibb.co/DVYPFmd/Untitled-design-24.png" alt="image" className="w-[30%]" />
        <h3 className="lg:text-[2rem] text-[2rem] font-Jost row-start-2 col-start-5 col-span-1 text-center relative ">2012</h3>
        <div className="w-[100px] h-[10px] bg-white rounded-[20px] mt-[-10px] skew-y-[-5deg]">a</div>
        </div>
        </div>
      </div>
     
    </div>
  );
}
/*

 <div className="grid grid-cols-aboutLayout grid-rows-aboutLayout w-full">
        <h1 className="font-Jost text-3xl font-bold col-start-2 col-span-4 row-start-1 row-span-1 text-center">how did i got here?</h1>

        <div className="row-start-2 col-start-1 col-span-3 ml-[-20px] bg-blueBackground rounded-[25px] p-6 shadow-inner mb-10 flex items-center justify-start gap-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, architecto!
        </p>
        <img src="https://i.ibb.co/DVYPFmd/Untitled-design-24.png" alt="image" className="w-[15%]" />
        </div>
        <h3 className="lg:text-[3rem] text-[2rem] font-Jost row-start-2 col-start-5 col-span-1 text-center relative mt-[10%]">2012</h3>
        <div className="row-start-2 col-start-5 col-span-1 h-[18px] bg-blueBackground mt-[45px] rounded-md"></div>

        <div className="row-start-3 col-start-4 col-span-5 mr-[-20px] bg-blueBackground rounded-[25px] p-6 shadow-inner mb-10 flex flex-row-reverse justify-end gap-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, architecto!
        </p>
        <img src="https://i.ibb.co/DVYPFmd/Untitled-design-24.png" alt="image" className="w-[15%]" />
        </div>

        <div className="row-start-4 col-start-1 col-span-3 ml-[-20px] bg-blueBackground rounded-[25px] p-6 shadow-inner mb-10 flex items-center justify-start gap-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, architecto!
        </p>
        <img src="https://i.ibb.co/DVYPFmd/Untitled-design-24.png" alt="image" className="w-[15%]" />
        </div>

        <div className="row-start-5 col-start-4 col-span-5 mr-[-20px] bg-blueBackground rounded-[25px] p-6 shadow-inner mb-10 flex flex-row-reverse justify-end gap-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, architecto!
        </p>
        <img src="https://i.ibb.co/DVYPFmd/Untitled-design-24.png" alt="image" className="w-[15%]" />
        </div>

        <div className="row-start-6 col-start-1 col-span-3 ml-[-20px] bg-blueBackground rounded-[25px] p-6 shadow-inner mb-10 flex items-center justify-start gap-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, architecto!
        </p>
        <img src="https://i.ibb.co/DVYPFmd/Untitled-design-24.png" alt="image" className="w-[15%]" />
        </div>

        <div className="row-start-7 col-start-4 col-span-5 mr-[-20px] bg-blueBackground rounded-[25px] p-6 shadow-inner mb-10 flex flex-row-reverse justify-end gap-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, architecto!
        </p>
        <img src="https://i.ibb.co/DVYPFmd/Untitled-design-24.png" alt="image" className="w-[15%]" />
        </div>
      </div>
      <div className="grid grid-cols-6 grid-rows-6 w-full mt-[-20%]">
        <div className="row-start-2 col-start-1 col-span-3 ml-[-20px] bg-blueBackground rounded-[25px] p-6 shadow-inner mb-10 flex items-center justify-start gap-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, architecto!
        </p>
        <img src="https://i.ibb.co/DVYPFmd/Untitled-design-24.png" alt="image" className="w-[15%]" />
        </div>
        <div className="row-start-3 col-start-4 col-span-5 mr-[-20px] bg-blueBackground rounded-[25px] p-6 shadow-inner mb-10 flex flex-row-reverse justify-end gap-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, architecto!
        </p>
        <img src="https://i.ibb.co/DVYPFmd/Untitled-design-24.png" alt="image" className="w-[15%]" />
        </div>
      </div>


*/
