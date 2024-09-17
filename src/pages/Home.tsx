import Layout from "../components/layouts/Layout";
import destinationHomeImage from "../assets/image/mountain-rill.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AboutUsSection from "./AboutUsSection";
import DestinationSection from "./DestinationSection";

const Home = () => {
  return (
    <Layout>
      <section
        id="home"
        className="relative min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('${destinationHomeImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-35"></div>
        <div className="absolute z-0 flex flex-col items-center text-center text-white text-opacity-80 p-2 ">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [0, -10, 10, -10, 10, 0] }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium  uppercase"
          >
            Wanderlust Archive
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [0, 10, -10, 10, -10, 0] }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold py-6 uppercase"
          >
            Find your next adventure
          </motion.h1>

          <motion.p
            initial={{ x: -700 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:text-lg xl:max-w-5xl"
          >
            Wanderlust Archive is your gateway to exploring the beauty of the
            world and discovering stunning destinations. From iconic landmarks
            to hidden gems, find inspiration for your next adventure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Link to="/destinations">
              <Button className="mt-6 p-6 text-2xl cursor-pointer uppercase opacity-70 hover:opacity-100">
                Find Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      <AboutUsSection />
      <DestinationSection />
    </Layout>
  );
};

export default Home;
