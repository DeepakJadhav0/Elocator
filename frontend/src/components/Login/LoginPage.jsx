import { motion } from "framer-motion";
import Login from "./Login";

const LoginPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="">
          <Login />
        </div>
      </motion.div>
    </>
  );
};

export default LoginPage;
