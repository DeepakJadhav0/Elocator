import { motion } from "framer-motion";
import heropattern from "../../assets/hero-banner.svg";
import { Link } from "react-router-dom";

export default function ErrorPage() {

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 text-center">
      
      <motion.h3
        className="text-sm font-semibold text-green-600 mb-3"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        — Oops! Something went wrong —
      </motion.h3>

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-800"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        404
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mt-4 max-w-xl text-gray-600 font-semibold"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        The page you're looking for doesn’t exist or may have been moved.  
        Let’s get you back on track toward a greener future 🌱
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-10"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/">
          <button className="px-6 py-4 bg-green-500 text-white text-sm font-bold rounded-md hover:bg-blue-500 transition-all duration-300">
            GO TO HOMEPAGE
          </button>
        </Link>

        <Link to="/contact">
          <button className="px-6 py-4 border border-green-600 text-green-600 text-sm font-bold rounded-md hover:bg-green-500 hover:text-white transition-all duration-300">
            CONTACT SUPPORT
          </button>
        </Link>
      </motion.div>

      <motion.div
        className="mt-14"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={heropattern}
          alt="Error Illustration"
          className="h-64 md:h-80 rounded-full shadow-lg shadow-green-100"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
}
