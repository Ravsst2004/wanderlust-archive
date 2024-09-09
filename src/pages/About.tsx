import Layout from "../components/layouts/Layout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <div>
        <motion.h1 animate={{ fontSize: 100, x: 100, y: 100 }}>Test</motion.h1>
      </div>
    </Layout>
  );
};

export default About;
