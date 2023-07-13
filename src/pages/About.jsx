import { motion } from "framer-motion";
import { images } from "../assets/images.js";
import Carrousel from "../components/Carrousel";
export default function About() {
  function getImages() {
    const imageElements = images.map((image) => {
      return (
        <img src={image} className="w-[100%] rounded-[25px] " alt="img" />
      );
    });
    return imageElements;
  }

  return (
    <div className="h-[100%] w-full flex flex-row items-center justify-center rounded:[20px] lg:rounded-[50px]">
      <Carrousel images={getImages()} />
    </div>
  );
}