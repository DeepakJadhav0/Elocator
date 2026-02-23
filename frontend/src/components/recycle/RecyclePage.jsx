import { motion } from "framer-motion";
import Recycle from "./Recycle";

const RecyclePage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="">
          <Recycle />
        </div>
      </motion.div>
    </>
  );
};

export default RecyclePage;
