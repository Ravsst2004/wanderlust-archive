import Layout from "../components/layouts/Layout";
import destinationHomeImage from "../assets/image/mountain-rill.jpg";
import guideImage1 from "../assets/image/destination 3.jpg";
import guideImage2 from "../assets/image/caribbean-beach.jpg";
import guideImage3 from "../assets/image/great-barrier-reef.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SliderDefault from "@/components/ui/Carousel/SliderDefault";
import destinationsData from "../data/destination.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </Layout>
  );
};

const FirstSection = () => {
  return (
    <section
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
          world and discovering stunning destinations. From iconic landmarks to
          hidden gems, find inspiration for your next adventure.
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
  );
};

const SecondSection = () => {
  const refGuideText = useRef(null);
  const isInViewGuide = useInView(refGuideText, { once: true });

  const guideImageList = [guideImage1, guideImage2, guideImage3];

  return (
    <section className="w-full h-fit py-20 px-4 md:px-10 lg:px-28">
      <motion.div
        ref={refGuideText}
        initial={{ opacity: 0, y: 200 }}
        animate={{
          opacity: isInViewGuide ? 1 : 0,
          y: isInViewGuide ? 0 : 200,
        }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center text-center gap-2"
      >
        <h1 className="text-xl md:text-2xl  font-light tracking-[0.5rem] text-orange-600">
          we are
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl">
          a guide to magical places
        </h2>
        <hr className="w-1/3 h-[0.1rem] bg-gradient-to-r my-2 from-orange-600 to-black" />
        <p className="md:text-lg xl:max-w-5xl opacity-80">
          Start your next adventure today! Wanderlust Archive helps you uncover
          hidden gems and extraordinary destinations around the world. Whether
          you’re seeking serene escapes or thrilling journeys, we guide you to
          the places where unforgettable experiences await.
        </p>
      </motion.div>

      <div className="overflow-hidden">
        <SliderDefault>
          {guideImageList.map((image, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center mt-6 active:border-none"
            >
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: isInViewGuide ? 0 : -300 }}
                transition={{ duration: 1.5 }}
                className="absolute w-[90%] md:w-[80%] lg:w-[70%] mx-auto inset-0 -z-10 bg-cover bg-center scale-110 rounded-md opacity-25"
                style={{ backgroundImage: `url('${image}')` }}
              />
              <motion.img
                initial={{ x: 300 }}
                animate={{ x: isInViewGuide ? 0 : 300 }}
                transition={{ duration: 1.5 }}
                src={image}
                alt="Destination"
                className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto rounded-md cursor-pointer"
              />
            </div>
          ))}
        </SliderDefault>
      </div>
    </section>
  );
};

const ThirdSection = () => {
  const refDestination = useRef(null);
  const isInViewDestination = useInView(refDestination, { once: true });

  return (
    <section className="px-4 md:px-10 lg:px-28" ref={refDestination}>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{
          opacity: isInViewDestination ? 1 : 0,
          y: isInViewDestination ? 0 : 200,
        }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center text-center gap-2"
      >
        <h1 className="text-xl md:text-2xl  font-light tracking-[0.5rem] text-orange-600">
          for you
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl">
          a magical destinations
        </h2>
        <hr className="w-1/3 h-[0.1rem] bg-gradient-to-r my-2 from-orange-600 to-black" />{" "}
        <p className="md:text-lg xl:max-w-5xl opacity-80">
          Step into a world where dreams come true. From enchanting landscapes
          to hidden paradises, explore places that captivate your imagination
          and leave you in awe. Whether it's a peaceful retreat or a bustling
          city filled with wonders, each destination offers a touch of magic
          waiting to be experienced.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
        {destinationsData.slice(0, 6).map((destination, index) => {
          return (
            <Link to={`/destinations/${destination.id}`} key={destination.id}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? 200 : -200 }}
                animate={{
                  opacity: 1,
                  x: isInViewDestination ? 0 : index % 2 === 1 ? 200 : -200,
                }}
                transition={{ duration: 1 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0" />
                <h1
                  className={`absolute text-lg md:text-2xl inset-0 flex items-center justify-center text-white  font-bold group-hover:scale-0 transition-transform ease-in duration-200`}
                >
                  {destination.name}
                </h1>
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="rounded-lg cursor-pointer"
                />
              </motion.div>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center md:justify-end my-4">
        <Link to={"/destinations"}>
          <Button className="w-full md:w-fit text-lg">View More</Button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
