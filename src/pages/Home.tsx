import Layout from "../components/layouts/Layout";
import destinationHomeImage1 from "../assets/image/destination 1.jpg";
import guideImage1 from "../assets/image/destination 2.jpg";
import guideImage2 from "../assets/image/destination 3.jpg";
import guideImage3 from "../assets/image/destination 4.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SliderDefault from "@/components/ui/Carousel/SliderDefault";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const guideImageList = [guideImage1, guideImage2, guideImage3];

  return (
    <Layout>
      <section
        className="relative min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('${destinationHomeImage1}')`,
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
            <Button className="mt-6 p-6 text-2xl cursor-pointer uppercase opacity-70 hover:opacity-100">
              Find Now
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="w-full h-fit py-20 px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 200 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center text-center gap-2"
        >
          <h1 className="text-xl md:text-2xl  font-light tracking-[0.5rem] text-orange-600">
            We are
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            a guide to magical places
          </h2>
          <hr className="w-1/3 h-[0.1rem] bg-gradient-to-r my-2 from-orange-600 to-black" />
          <p className="md:text-lg xl:max-w-5xl opacity-80">
            Start your next adventure today! Wanderlust Archive helps you
            uncover hidden gems and extraordinary destinations around the world.
            Whether you’re seeking serene escapes or thrilling journeys, we
            guide you to the places where unforgettable experiences await.
          </p>
        </motion.div>

        <div className="overflow-hidden" ref={ref}>
          <SliderDefault>
            {guideImageList.map((image, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center mt-10 "
              >
                <motion.div
                  initial={{ x: -300 }}
                  animate={{ x: isInView ? 0 : -300 }}
                  transition={{ duration: 1.5 }}
                  className="absolute w-[90%] md:w-3/4 mx-auto inset-0 -z-10 bg-cover bg-center scale-110 rounded-md opacity-25"
                  style={{ backgroundImage: `url('${image}')` }}
                />
                <motion.img
                  initial={{ x: 300 }}
                  animate={{ x: isInView ? 0 : 300 }}
                  transition={{ duration: 1.5 }}
                  src={image}
                  alt="Destination"
                  className="w-[90%] md:w-3/4 mx-auto rounded-md cursor-pointer"
                />
              </div>
            ))}
          </SliderDefault>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
