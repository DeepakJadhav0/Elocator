
import { motion } from "framer-motion";
import SimpleMap from "./SimpleMap";

const FacilityPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <SimpleMap/>
        </div>
      </motion.div>
    </>
  );
};

export default FacilityPage;