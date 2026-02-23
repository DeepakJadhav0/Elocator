import heroPattern from "../../assets/main-pattern.svg";
import hero_img from "../../assets/hero_image.png";
import { motion } from "framer-motion";
import toast , {Toaster} from "react-hot-toast"
import { useLocation } from "react-router";
import { useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HeroPage1() {

  const location = useLocation()

  useEffect(()=>{
      if(location?.state?.message){
    toast(location.state.message)
      }
  },[location])

  return (
    <motion.section
      className="bg-[#F5FFFC] min-h-screen flex flex-col lg:flex-row items-center justify-center px-5 lg:px-16 gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Text Section */}
      <motion.div
        className="w-full lg:w-[55%] text-center lg:text-left"
        variants={containerVariants}
      >
        <motion.h3
          className="text-xs sm:text-sm font-semibold text-green-600 py-3"
          variants={itemVariants}
        >
          -- Welcome to Elocate -- Powering a Greener Tomorrow
        </motion.h3>

        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold"
          variants={itemVariants}
        >
          Your Strategic Partner for Innovative and High-Impact
        </motion.h2>

        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-green-600 py-3"
          variants={itemVariants}
        >
          E-Waste Sustainable Disposal
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 py-3"
          variants={itemVariants}
        >
          ELocate: Revolutionizing E-Waste Management for a Sustainable Future.
          Discover nearby e-waste facilities with precision and ease. Your gateway
          to responsible recycling practices and environmental stewardship — one
          device at a time.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start py-7"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-sm font-semibold hover:animate-pulse rounded-md text-white px-6 py-4 hover:bg-red-500 shadow-md"
          >
            FIND NEAREST FACILITY
          </motion.button>

          <motion.button
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-sm font-semibold rounded-md text-white px-6 py-4 hover:bg-blue-500 shadow-md"
          >
            START RECYCLE TODAY
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative w-full lg:w-[45%] flex justify-center items-center"
        variants={imageVariants}
      >
        <img
          src={heroPattern}
          alt=""
          className="absolute inset-0 w-full h-full object-contain opacity-80"
        />

        <motion.img
          src={hero_img}
          alt="E-waste recycling illustration"
          className="relative z-10 w-[80%] sm:w-[70%] lg:w-full max-w-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.section>
  );
}
