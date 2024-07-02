import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

interface CardData {
    title: string;
    description: string;
  }
  
  export const TiltCard: React.FC<CardData> = ({ title, description }) => {
    const tiltOptions = {
      scale: 1.1,
      max: 25,
      perspective: 1000,
      speed: 300,
      transition: true,
    };
  
    return (
      <>
        <motion.div>
          <Tilt
            optoins={tiltOptions}
            className=" shadow-lg p-[1.5px] ml-10 bg-gradient-to-r from-[#24647f] to-[#203a43] to-[#2c5364] rounded-2xl"
          >
            <div className=" bg-[#110c26] w-full rounded-2xl min-h-[250px] flex flex-col p-5 justify-evenly items-center">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </Tilt>
        </motion.div>
      </>
    );
  };