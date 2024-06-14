import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  const cardAnimation = fadeIn("up", "spring", index * 0.5, 1);
  const imgStyles = {
    width: "270px",
    height: "250px",
    borderRadius: "32px",
    objectFit: "cover",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
  };
  const arrowStyles = {
    width: "40%",
    height: "40%",
    objectFit: "contain",
  };

  return (
    <motion.div
      variants={cardAnimation}
      className="flex md:flex-row flex-col gap-4 bg-gradient-to-r from-primary to-secondary rounded-lg overflow-hidden shadow-xl"
    >
      <img src={imgUrl} alt="planet-01" style={imgStyles} />
      <div className="w-full flex justify-between items-center p-6">
        <div className="flex-1 md:ml-8 flex flex-col max-w-[650px]">
          <h4 className="font-bold lg:text-4xl text-2xl text-white">{title}</h4>
          <p className="mt-4 font-medium lg:text-xl text-sm text-secondary-white">
            {subtitle}
          </p>
        </div>
        <div className="lg:flex hidden items-center justify-center w-16 h-16 rounded-full bg-transparent border-2 border-white">
          <img src="/arrow.svg" alt="arrow" style={arrowStyles} />
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
